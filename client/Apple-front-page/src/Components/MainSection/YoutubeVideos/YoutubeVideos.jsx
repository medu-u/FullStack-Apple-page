import { useEffect, useState } from "react";
import "./YoutubeVideos.css";

function YoutubeVideos() {
  const [youTubeVideos, setYouTubeVideos] = useState([]);

  const API_KEY = "AIzaSyA1YUB0d9I9Hx0e8_PR25SkBP_hGWW12fo";
  const APPLE_CHANNEL_ID = "UCE_M8A5yxnLfW0KghEeajjw";

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${APPLE_CHANNEL_ID}&part=snippet&order=date&maxResults=9`
    )
      .then((res) => res.json())
      .then((data) => {
        setYouTubeVideos(data.items);
      });
  }, []);
  console.log(youTubeVideos);

  return (
    <section className="youtubeVideosWrapper">
      <div className="allVideoWrapper">
        <div className="container">
          <div className="row justify-content text-center">
            <div className="col-12">
              <div className="titleWrapper">
                <br />
                <h1>Latest Videos</h1>
                <br />
              </div>
            </div>

            {youTubeVideos.map((singleVideo) => {
              let vidId = singleVideo.id.videoId;
              let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
              let videoWrapper = (
                <div key={vidId} className="col-sm-12 col-md-6 col-lg-4">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a href={vidLink} target="_blank">
                        <img src={singleVideo.snippet.thumbnails.high.url} />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a href={vidLink} target="_blank">
                          {singleVideo.snippet.title}
                        </a>
                      </div>
                      <div className="videoDesc">
                        {singleVideo.snippet.description}
                      </div>
                      <div className="productionDate">
                        {singleVideo.snippet.publishedAt}
                      </div>
                    </div>
                  </div>
                </div>
              );
              return videoWrapper;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default YoutubeVideos;
