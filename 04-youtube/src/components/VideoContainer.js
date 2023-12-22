import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading,setIsLoading] = useState(false);

  const handleScroll = () => {
    if(window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading){
      console.log("scroll")
    }
    getVideos();
  }

  useEffect(() => {
    window.addEventListener('scroll',handleScroll);

    return () => window.removeEventListener('scroll',handleScroll);
  }, [isLoading]);

  const getVideos = async () => {

    setIsLoading(true);

    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();

    console.log("videos ", json.items);
    setVideos(json?.items);

    setIsLoading(false);
  };

  if(videos.length === 0) return <Shimmer/>

  return (
    <div className="pt-3 flex flex-wrap">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v="+video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
