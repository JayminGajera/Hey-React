import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { VIDEO_DETAIL_API, GOOGLE_API_KEY } from "../utils/constants";
import CommentsContainer from "./CommentsContainer";
import { MdOutlineNotificationsActive } from "react-icons/md";
import LiveChat from "./LiveChat";
import VideoContainer from "./VideoContainer"

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [info, setInfo] = useState();
  const [subscribe, setSubscribe] = useState(false);

  const [descOpen, setDescOpen] = useState(false);

  const isDark = useSelector((store) => store.app.isDark);

  console.log("search params ", searchParams.get("v"));

  const dispatch = useDispatch();

  const getInfo = async () => {
    const data = await fetch(
      VIDEO_DETAIL_API + searchParams.get("v") + "&key=" + GOOGLE_API_KEY
    );
    const json = await data.json();
    console.log("info ", json.items[0]);
    setInfo(json.items[0]);
  };

  useEffect(() => {
    dispatch(closeMenu());
    getInfo();
  }, [searchParams]);

  const handleDescOpen = () => {
    setDescOpen(!descOpen);
  };

  return (
    <div className="p-2">
      <div className="md:flex md:flex-row flex-col gap-x-3">
        <div className="w-full md:w-[800px]">
          <iframe
            className="rounded-lg w-full h-[12rem] shadow-lg md:w-[800px] md:h-[450px] mb-2"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="md:w-full w-full">
          <LiveChat />
        </div>
      </div>

      {/* description container */}
      <div className="flex md:flex-row gap-x-3 flex-col">
        <div>
          <div className="max-w-[800px] md:w-[800px] w-full">
            <h1 className={"md:text-xl text-lg font-bold p-1" + (isDark && " text-white")}>
              {info?.snippet?.title}
            </h1>
            <div className={"flex gap-x-10 items-center p-2 bg-gray-200 rounded-lg " + (isDark && "bg-slate-800 text-white ")}>
              <h1 className="font-semibold md:text-lg text-sm">
                {info?.snippet?.channelTitle}
              </h1>
              <p>like {info?.statistics?.likeCount}</p>
              <button
                onClick={() => setSubscribe(!subscribe)}
                className="bg-black text-white py-2 px-4 rounded-full"
              >
                {subscribe ? (
                  <p className="flex items-center gap-x-2">
                    <MdOutlineNotificationsActive className="text-xl" />{" "}
                    subscribed{" "}
                  </p>
                ) : (
                  "subscribe"
                )}
              </button>
            </div>
            <div
              onClick={handleDescOpen}
              className={"p-2 bg-gray-200 rounded-lg mt-2 cursor-pointer "+ (isDark && "bg-slate-800 text-white ")}
            >
              <div className="flex gap-x-5">
                <h1>{info?.statistics?.viewCount} views</h1>
                <h1>{info?.snippet?.publishedAt}</h1>
              </div>
              <div className="flex flex-wrap mb-5">
                {info?.snippet?.tags?.slice(0, 5)?.map((tag) => (
                  <p className="text-sm opacity-90">#{tag} </p>
                ))}
              </div>
              {descOpen && (
                <p className="text-sm opacity-80">
                  {info?.snippet?.description}
                </p>
              )}
            </div>
          </div>

          {/* comments container */}
          <div className="max-w-[800px] md:w-[800px] w-full mt-2">
            <CommentsContainer />
          </div>
        </div>
        <div className={"bg-gray-200 rounded-lg p-2 w-full mt-2 " + (isDark && "bg-slate-800 text-white") }>
          <h1 className={"font-bold text-lg " + (isDark && "text-white")}>Recommand</h1>
          <div>
            <VideoContainer/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
