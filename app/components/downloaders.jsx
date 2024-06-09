'use client';
import { quantum } from "ldrs";
import { useState } from "react";
import FurtherComp from "./furtherComp";


function InstaDownloader(params) {
    quantum.register();
    const [inputUrl, setinputUrl] = useState('');
    const [downloadUrl, setDownloadUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);



    const handleChange = (event) => {
        setinputUrl(event.target.value);
    }

    const handleDownload = async () => {
        try {

            // const response = await fetch(downloadUrl);

            // if (!response.ok) {
            //     throw new Error('Network response was not ok');
            // }

            // const file = await response.blob();
            // console.log(file);
            const downloadLink = document.createElement("a");
            downloadLink.href = downloadUrl;
            downloadLink.download = 'Sahil.mp4';
            downloadLink.click();

            // Cleanup the object URL after the download is initiated
            // URL.revokeObjectURL(downloadLink.href);

        } catch (error) {
            console.error('Error downloading the file:', error.message,'from handledownload');
            // toast.error('Error downloading the file. Please try again.');
        }
    };

    async function handleSubmit(event) {
        event.preventDefault();
        setDownloadUrl('');
        setIsLoading(true)

        try {

            const postRes = await fetch('/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ inputUrl: inputUrl }), // Use body to send the request payload
            });

            // const { url } = await postRes.json();
            console.log(await postRes.json());
            console.log(url);
            setDownloadUrl(url);
            setIsLoading(false)

        } catch (error) {
            console.log('Eror:', error.message, error);
        }
    }

    return (
        <>
            <h1 className="tab-content-h1">Download Insta reels and stories</h1>

            <form className="input-box" onSubmit={handleSubmit}>
                <input name="inputUrl" value={inputUrl} onChange={handleChange} type="url" placeholder="Paste your link here" className="input w-full max-w-xs" />
                <button type="submit" className="btn btn-active">Go</button>
            </form>


            {isLoading && <l-quantum className='loader' size="106" speed="1.1" color="rgb(0,255,213)"></l-quantum>}
            {downloadUrl &&
                <div className="video-action">
                    <video className="skeleton" src={downloadUrl} controls height='368px'></video>
                    <button className="btn glass" onClick={handleDownload}>Download</button>
                </div>
            }

            <FurtherComp />

        </>
    );
}
function Downloader(props) {
    quantum.register();
    const [inputUrl, setinputUrl] = useState('');
    const [downloadUrl, setDownloadUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);



    const handleChange = (event) => {
        setinputUrl(event.target.value);
    }

    const handleDownload = async () => {
        try {

            // const response = await fetch(downloadUrl);

            // if (!response.ok) {
            //     throw new Error('Network response was not ok');
            // }

            // const file = await response.blob();
            // console.log(file);
            const downloadLink = document.createElement("a");
            downloadLink.href = downloadUrl;
            downloadLink.download = 'Sahil.mp4';
            downloadLink.click();

            // URL.revokeObjectURL(downloadLink.href);

        } catch (error) {
            console.error('Error downloading the file:', error.message);
            // toast.error('Error downloading the file. Please try again.');
        }
    };

    async function handleSubmit(event) {
        event.preventDefault();
        console.log('for submition started');
        setDownloadUrl('');
        setIsLoading(true);

        try {

            const postRes = await fetch('/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ inputUrl: inputUrl }), // Use body to send the request payload
            });

            const { url } = await postRes.json();
            // console.log(await postRes.json());
            console.log(url);
            setDownloadUrl(url);
            setIsLoading(false)
            // var a = document.createElement('a');
            // a.href = url;
            // a.setAttribute('download', true);
            // a.click();
        } catch (error) {
            console.log('Eror:', error.message, error);
        }
    }

    return (
        <>
            <h1 className="tab-content-h1">Download Insta reels and stories</h1>

            <form className="input-box" onSubmit={handleSubmit}>
                <input name="inputUrl" value={inputUrl} onChange={handleChange} type="url" placeholder="Paste your link here" className="input w-full max-w-xs" />
                <button type="submit" className="btn btn-active">Go</button>
            </form>


            {isLoading && <l-quantum className='loader' size="106" speed="1.1" color="rgb(0,255,213)"></l-quantum>}
            {downloadUrl &&
                <div className="video-action">
                    <video className="skeleton" src={downloadUrl} controls height='368px'></video>
                    <button className="btn glass" onClick={handleDownload}>Download</button>
                </div>
            }

            <FurtherComp />

        </>
    );
}


function YTDownloader(params) {
    quantum.register();
    const [inputUrl, setinputUrl] = useState('');
    const [downloadUrl, setDownloadUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    function handleSubmit(params) {
        console.log('form submition started');
    }

    const handleChange = (event) => {
        setinputUrl(event.target.value);
    }

    const handleDownload = async () => {
        try {

            const response = await fetch(downloadUrl);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const file = await response.blob();
            console.log(file);
            const downloadLink = document.createElement("a");
            downloadLink.href = URL.createObjectURL(file);
            downloadLink.download = 'Sahil.mp4';
            downloadLink.click();

            // Cleanup the object URL after the download is initiated
            URL.revokeObjectURL(downloadLink.href);

        } catch (error) {
            console.error('Error downloading the file:', error.message);
            // toast.error('Error downloading the file. Please try again.');
        }
    };


    return (
        <>
            <h1 className="tab-content-h1">Download YouTube videos and shorts.</h1>

            <form className="input-box" onSubmit={handleSubmit}>
                <input name="inputUrl" value={inputUrl} onChange={handleChange} type="url" placeholder="Paste your link here" className="input w-full max-w-xs" />
                <button type="submit" className="btn btn-active">Go</button>
            </form>


            {isLoading && <l-quantum className='loader' size="106" speed="1.1" color="rgb(0,255,213)"></l-quantum>}
            {downloadUrl &&
                <div className="video-action">
                    <video className="skeleton" src={downloadUrl} controls height='368px'></video>
                    <button className="btn glass" onClick={handleDownload}>Download</button>
                </div>
            }

            <FurtherComp />
        </>


    );
}


function FBDownloader(props) {
    quantum.register();
    const [inputUrl, setinputUrl] = useState('');
    const [downloadUrl, setDownloadUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);



    const handleChange = (event) => {
        setinputUrl(event.target.value);
    }

    const handleDownload = async () => {
        try {

            const response = await fetch(downloadUrl);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const file = await response.blob();
            console.log(file);
            const downloadLink = document.createElement("a");
            downloadLink.href = URL.createObjectURL(file)
            downloadLink.download = 'Sahil.mp4';
            downloadLink.click();

            URL.revokeObjectURL(downloadLink.href);

        } catch (error) {
            console.error('Error downloading the file:', error.message);
            // toast.error('Error downloading the file. Please try again.');
        }
    };

    async function handleSubmit(event) {
        event.preventDefault();
        console.log('for submition started');
        setDownloadUrl('');
        setIsLoading(true);

        try {

            const postRes = await fetch('/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ inputUrl: inputUrl }), // Use body to send the request payload
            });

            const { url } = await postRes.json();
            // console.log(await postRes.json());
            console.log(url);
            setDownloadUrl(url);
            setIsLoading(false)
            // var a = document.createElement('a');
            // a.href = url;
            // a.setAttribute('download', true);
            // a.click();
        } catch (error) {
            console.log('Eror:', error.message, error);
        }
    }

    return (
        <>
            <h1 className="tab-content-h1">Download Insta reels and stories</h1>

            <form className="input-box" onSubmit={handleSubmit}>
                <input name="inputUrl" value={inputUrl} onChange={handleChange} type="url" placeholder="Paste your link here" className="input w-full max-w-xs" />
                <button type="submit" className="btn btn-active">Go</button>
            </form>


            {isLoading && <l-quantum className='loader' size="106" speed="1.1" color="rgb(0,255,213)"></l-quantum>}
            {downloadUrl &&
                <div className="video-action">
                    <video className="skeleton" src={downloadUrl} controls height='368px'></video>
                    <button className="btn glass" onClick={handleDownload}>Download</button>
                </div>
            }

            <FurtherComp />

        </>
    );
}


function TwitterDownloader(params) {
    return (
        <>
            <h1 className="tab-content-h1">Download Twitter videos</h1>

            <form className="input-box">

                <input type="url" placeholder="Paste you link here" className="input input-link w-full max-w-xs" />
                <button type="submit" className="btn btn-active">Go</button>
            </form>
            <video className="skeleton" src=""></video>
            <button className="btn glass">Download</button>
        </>


    );

}
export { InstaDownloader, FBDownloader, YTDownloader, TwitterDownloader, Downloader }

