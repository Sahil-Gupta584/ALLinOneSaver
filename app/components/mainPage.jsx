'use client';
import Downloader from "./downloader";

const MainPage = ({social}) => {    
    console.log(social == '/youtube');

    function scrollToFeature(params) {
      console.log('scroll triggered');
      document.getElementById("get-started-hero").addEventListener("click", () => {
          document.getElementById("tabs").scrollIntoView({ behavior: 'smooth' });
      });
  }
    
    
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Download videos and stories you like!</h1>
            <p className="py-6">Effortlessly download videos, photos, and stories from YouTube, Instagram, Facebook, and Twitter. Enjoy fast, easy, and reliable media downloads from your favorite social media platforms.</p>
            <a className="btn btn-primary" onClick={scrollToFeature} id="get-started-hero" >Get Started</a>
          </div>
        </div>
      </div>

      <div role="tablist" id="tabs" className="tabs tabs-lifted">

        <input type="radio" name="my_tabs_2" role="tab" className="tab Instagram" aria-label='Instagram' defaultChecked={social === 'instagram' || 'from main page'}  />
        <div role="tabpanel" className="tab-content insta bg-base-100 border-base-300 rounded-box p-6">
          <Downloader tittle='Download Instagram reel, photos and stories at one place!'/>
        </div>

        <input type="radio" name="my_tabs_2" role="tab" className="tab YouTube" aria-label="YouTube" defaultChecked={social === 'youtube'} />
        <div role="tabpanel" className="tab-content bg-base-100 yt border-base-300 rounded-box p-6">
          <Downloader tittle='Download YouTube videos and shorts.'/>
        </div>

        <input type="radio" name="my_tabs_2" role="tab" className="tab Facebook" aria-label="Facebook" defaultChecked={social === 'facebook'} />
        <div role="tabpanel" className="tab-content bg-base-100 fb border-base-300 rounded-box p-6">
          <Downloader tittle='Download Facebook videos and photos.'/>
        </div>

        <input type="radio" name="my_tabs_2" role="tab" className="tab Twitter" aria-label="Twitter" defaultChecked={social === 'twitter'} />
        <div role="tabpanel" className="tab-content bg-base-100 twitter border-base-300 rounded-box p-6">
          <Downloader tittle='Download twitter(X) videos and photos from tweets.'/>
        </div>
        
      </div>
    </>
  )
}

export default MainPage