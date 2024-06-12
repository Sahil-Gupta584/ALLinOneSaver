import FAQ from "./faqs";

const FurtherComp = () => {
    return (
        <>
            <section className="features my-10">
                <h2 className="faq text-3xl font-bold " id="features">Features</h2>
                <ol>
                    <li>Download high-quality Instagram Reels and Stories</li>
                    <li>Fast and reliable service</li>
                    <li>Supports multiple formats</li>
                    <li>Easy-to-use interface</li>
                </ol>
            </section>

            <FAQ />

            <section className="how-it-works my-10">
                <h2 className="text-3xl font-bold">How It Works</h2>
                <p>Our tool allows you to download Instagram Reels and Stories quickly and easily. Just follow these simple steps:</p>
                <ol>
                    <li>Copy the link of the Instagram Reel or Story you want to download.</li>
                    <li>Paste the link into the input box above.</li>
                    <li>Click 'Go' and wait for the download link to be generated.</li>
                    <li>Click the download button to save the video to your device.</li>
                </ol>
            </section>
        </>
    )
}

export default FurtherComp;