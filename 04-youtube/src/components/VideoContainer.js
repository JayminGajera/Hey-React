import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { GOOGLE_API_KEY } from "../utils/constants";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [page,setPage] = useState(6);

  useEffect(() => {
    getVideos();
  }, [page]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API + page + "&regionCode=IN&key=" + GOOGLE_API_KEY);
    const json = await data.json();

    console.log("videos ", json.items);
    setVideos((prev) => [...prev, ...json?.items]);
  };

  const handleScroll = () => {
    if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
      setPage((prev) => prev + 6);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',handleScroll);

    return () => window.removeEventListener('scroll',handleScroll);
  },[]);

  if (videos.length === 0) return <Shimmer />;

  return (
    <div className="pt-3 flex flex-wrap">
      {videos?.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
