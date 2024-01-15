import React, { useEffect, useState } from "react";
import "./Video.scss";
import axios from "axios";
import { youtubeInfo } from "../../../utils/externalVariables";
import YoutubeCarousel from "./YoutubeCarousel";

const Video = () => {
  const youtubeChanelLastVideosApi = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCblZWHYK0f9c2EmUxZ2mJfg&maxResults=24&order=date&type=video&key=${youtubeInfo}`;
  const [videoList, setVideoList] = useState([]);

  const getPlaylistVideos = async () => {
    const videoListResponse = await axios.get(youtubeChanelLastVideosApi);
    setVideoList(videoListResponse.data.items);
    // localStorage.setItem(
    //   "videos",
    //   JSON.stringify(videoListResponse.data.items)
    // );
  };

  useEffect(() => {
    // if (videoList.length == 0) {
    //   const storageVideos = JSON.parse(localStorage.getItem("videos"));
    //   if (storageVideos && storageVideos.length > 0) {
    //     setVideoList(storageVideos);
    //   } else {
    getPlaylistVideos();
    //   }
    // }
  }, []);

  return (
    <section id="video" className="container">
      <div id="contentContainer">
        <h2 id="title">Video</h2>
        <iframe
          width="100%"
          height="650px"
          src="https://www.youtube.com/embed/s7z_AlI4Xhk"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div id="youtubeListContainer">
          <YoutubeCarousel items={videoList} />
        </div>
      </div>
    </section>
  );
};

export { Video };
