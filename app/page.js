import { Downloader, FBDownloader, InstaDownloader, TwitterDownloader, YTDownloader } from "./components/downloaders";

export default function Home() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Download videos and stories you like!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <a href="#work-area" className="btn btn-primary"><button className="btn btn-primary">Get Started</button></a>
          </div>
        </div>
      </div>

      <div role="tablist" className="tabs tabs-lifted">

        <input type="radio" name="my_tabs_2" role="tab" className="tab Instagram" aria-label='Instagram'  />
        <div role="tabpanel" className="tab-content insta bg-base-100 border-base-300 rounded-box p-6">
          <InstaDownloader />
        </div>

        <input type="radio" name="my_tabs_2" role="tab" className="tab YouTube" aria-label="YouTube" />
        <div role="tabpanel" className="tab-content bg-base-100 yt border-base-300 rounded-box p-6">
          <Downloader social='YouTube' background='#ff0000' />
        </div>

        <input type="radio" name="my_tabs_2" role="tab" className="tab Facebook" aria-label="Facebook" />
        <div role="tabpanel" className="tab-content bg-base-100 fb border-base-300 rounded-box p-6">
          <FBDownloader />
        </div>

        <input type="radio" name="my_tabs_2" role="tab" className="tab Twitter" aria-label="Twitter" />
        <div role="tabpanel" className="tab-content bg-base-100 twitter border-base-300 rounded-box p-6">
          <TwitterDownloader />
        </div>
        
      </div>
    </>
  )
}    
