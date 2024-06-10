import { NextResponse } from 'next/server';
import axios from 'axios';
import ytdl from 'ytdl-core';
import getFbVideoInfo from "fb-downloader-scrapper";
import getTwitterMedia from 'get-twitter-media';
import {alldown} from 'nayan-media-downloader'


async function instagram(videolink) {
    console.log('running instagram');
    try {
        let shortcode = videolink.split("reel/")[1].split(" ")[0].slice(0, 11);
        console.log(shortcode);

        const options = {
            method: 'GET',
            url: 'https://instagram-bulk-profile-scrapper.p.rapidapi.com/clients/api/ig/media_by_id',
            params: {
                shortcode: shortcode,
                response_type: 'reels'
            },
            headers: {
                'x-rapidapi-key': 'your_rapidapi_key', // Replace with your actual RapidAPI key
                'x-rapidapi-host': 'instagram-bulk-profile-scrapper.p.rapidapi.com'
            }
        };

        const response = await axios.request(options);
        console.log(response.data);

        const downloadUrl = response.data[0].items[0].video_versions[0].url;
        console.log(downloadUrl, '27');

        return { downloadUrl };

    } catch (error) {
        console.log(error.message, error, '31');
        throw error;
    }
}

async function youtube(videolink) {
    console.log('in youtube');
    try {
        const info = await ytdl.getInfo(videolink);
        console.log('in youtube try');
        const format = ytdl.chooseFormat(info.formats, { quality: 'highest' });
        let downloadUrl = format.url;
        return { downloadUrl };
    } catch (error) {
        console.log(error.message, error, '10');
        throw error;
    }
}

async function facebook(videolink) {
    console.log('in facebook');
    try {
        const getInfo = await getFbVideoInfo(videolink); // Corrected this line
        console.log('getInfo:', getInfo);

        const videoUrl = getInfo.sd;

        if (!videoUrl) {
            throw new Error('Failed to retrieve video');
        }


        return { downloadUrl: getInfo.sd };

    } catch (error) {
        console.log(error.message, error, 'from facebook function');
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// async function twitter(videolink) {
//     videolink = videolink.replace('x.com','twitter.com');
//     console.log('in twitter')
//     try {
//         let media = await getTwitterMedia(videolink, {
//             text: true,
//         });
//         console.log(media);
//         let downloadUrl = media.media[0].url
//         console.log(downloadUrl);
//         return { downloadUrl};

//     } catch (error) {
//         console.log(error.message, error, 'from twitter');
//         return NextResponse.json({ error: error.message }, { status: 500 });    }
// }

async function twitter(videolink) {
    videolink = videolink.replace('x.com','twitter.com');
    console.log('in twitter')
    try {
        const res = alldown(videolink);
        return { downloadUrl :res.media.low};

    } catch (error) {
        console.log(error.message, error, 'from twitter');
        return NextResponse.json({ error: error.message }, { status: 500 });    }
}


export async function POST(request) {
    try {
        const { inputUrl } = await request.json();
        const domain = new URL(inputUrl).hostname;
        let downloadUrl = '';

        if (domain.includes('instagram.com')) {
            console.log('insta domain matched');
            console.log(inputUrl);
            const { downloadUrl: url } = await instagram(inputUrl);
            downloadUrl = url;

        } else if (domain.includes('youtu.be') || domain.includes('youtube.com')) {
            console.log('youtube domain matched');
            console.log(inputUrl);
            console.time('youtube');
            const { downloadUrl: url } = await youtube(inputUrl);
            console.timeEnd('youtube');
            downloadUrl = url;

        } else if (domain.includes('facebook.com')) {
            console.log('fb domain matched');
            console.log(inputUrl);
            console.time('fb');
            const { downloadUrl: url } = await facebook(inputUrl);
            console.timeEnd('fb');
            downloadUrl = url;
        } else if (domain.includes('x.com')) {
            console.log('x domain matched');
            console.log(inputUrl);
            console.time('x');
            const { downloadUrl: url } = await twitter(inputUrl);
            console.timeEnd('x');
            downloadUrl = url;
        }

        return NextResponse.json({ url: downloadUrl });

    } catch (error) {
        console.log(error.message, error, '10');
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
