import { NextResponse } from 'next/server';
import ytdl from 'ytdl-core';
import getFbVideoInfo from "fb-downloader-scrapper";
import getTwitterMedia from 'get-twitter-media';
import instagramDl from "@sasmeee/igdl";





async function instagram(videolink) {
    console.log('running instagram');
    try {
        const dataList = await instagramDl(videolink);
        console.log('dataList',dataList);
        return { downloadUrl: dataList[0].download_link };

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




async function twitter(videolink) {
    const url = videolink.replace('x.com', 'twitter.com');
    console.log('in twitter')
    console.log(url);
    try {
        let res = await getTwitterMedia(url, {
            text: true,
        });
        console.log(res);
        return { downloadUrl: res.media[0].url };

    } catch (error) {
        console.log(error.message, error, 'from twitter');
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
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
