import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { VIDEO_DETAIL_API,GOOGLE_API_KEY } from "../utils/constants";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [info,setInfo] = useState();

  console.log("search params ", searchParams.get("v"));

  const dispatch = useDispatch();

  const getInfo = async() => {
    const data = await fetch(VIDEO_DETAIL_API+searchParams.get("v")+"&key="+GOOGLE_API_KEY);
    const json = await data.json();
    console.log('info ',json.items[0]);
    setInfo(json.items[0]);
  }

  useEffect(() => {
    dispatch(closeMenu());
    getInfo();
  }, []);

  return (
    <div className="col-span-11 p-2">
      <iframe
      className="rounded-lg"
        width="800"
        height="450"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className="w-[800px]">
        <h1 className="text-xl font-bold">{info?.snippet?.title}</h1>
        <div className="flex gap-x-10 items-center p-2">
          <h1>{info?.snippet?.channelTitle}</h1>
          <p>like {info?.statistics?.likeCount}</p>
          <button className="bg-black text-white py-2 px-4 rounded-full">subscribe</button>
        </div>
        <div className="p-2">
          <div className="flex gap-x-5">
          <h1>
            {info?.statistics?.viewCount} views
          </h1>
          <h1>{info?.snippet?.publishedAt}</h1>
          </div>
          <div className="flex flex-wrap mb-5">{info?.snippet?.tags?.slice(0,5)?.map((tag) => <p>#{tag} </p>)}</div>
          <p>{info?.snippet?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
