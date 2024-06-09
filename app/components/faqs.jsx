export default function FAQ(){
    return(
        <section className="faq">
                <h2 className="faq text-3xl font-bold">Frequently Asked Questions</h2>

                <div className="join join-vertical w-full">
                    <div className="collapse collapse-plus join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Is this service free?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, our service is completely free to use.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            How do I download videos?
                        </div>
                        <div className="collapse-content">
                            <p>Just paste the Instagram video link in the input box and click 'Go'.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Can I download videos from private accounts?
                        </div>
                        <div className="collapse-content">
                            <p>No, you can only download videos from public accounts</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Why is my download taking so long?
                        </div>
                        <div className="collapse-content">
                            <p>Download times can vary based on the size of the video and your internet connection speed. If you experience consistent delays, please check your connection or try again later.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Do I need to create an account to use this service?
                        </div>
                        <div className="collapse-content">
                            <p>No, you do not need to create an account. Our service is completely anonymous.</p>
                        </div>
                    </div>
                </div>
            </section>
    )
}