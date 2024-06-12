'use client';
import { useState } from "react";
import FurtherComp from "./furtherComp";
import Loader from "./loader";

export default function Downloader(props) {
    // quantum.register();
    const [inputUrl, setinputUrl] = useState('');
    const [downloadUrl, setDownloadUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);



    const handleChange = (event) => {
        setinputUrl(event.target.value);
    }

    const handleDownload = async () => {
        try {


            const downloadLink = document.createElement("a");
            downloadLink.href = downloadUrl;
            downloadLink.download = 'Sahil.mp4';
            downloadLink.click();


        } catch (error) {
            console.error('Error downloading the file:', error.message);
        }
    };

    async function handleSubmit(event) {
        event.preventDefault();
        setDownloadUrl('');
        setIsLoading(true);

        try {

            const postRes = await fetch('/api', {
                method: 'POST',
                Headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ inputUrl: inputUrl }), // Use body to send the request payload
            });

            const { url } = await postRes.json();
            console.log(url);
            setDownloadUrl(url);
            setIsLoading(false);
        } catch (error) {
            console.log('Eror:', error.message, error);
        }
    }

    return (
        <>
            <h1 className="tab-content-h1">{props.title}</h1>

            <form className="input-box" onSubmit={handleSubmit} noValidate={false}>
                <input required name="inputUrl" value={inputUrl} onChange={handleChange} type="url" placeholder="Paste your link here" className="input w-full max-w-xs" />
                <button type="submit" className="btn btn-active">Go</button>
            </form>


            {isLoading && <Loader />}
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