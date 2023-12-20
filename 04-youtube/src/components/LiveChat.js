import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateName } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //API polling

      dispatch(
        addMessage({
          name: generateName(),
          message: "Namaste from bharat🚩",
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <h1 className="font-bold py-2 px-1 mb-2 md:mb-0 bg-slate-200 rounded-lg border border-b-white ">
        LiveChat
      </h1>
      <div className="w-full rounded-lg h-[360px] shadow-lg bg-slate-200 p-2 overflow-y-scroll flex flex-col-reverse container-snap">
        {chatMessages.map((c) => (
          <ChatMessage key={c.name} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({
            name:"Jaymin Gajera",
            message:liveMessage,
          }));

          setLiveMessage("");
        }}
        className="py-2 px-1 bg-slate-200 rounded-lg md:mt-1 mt-2 flex gap-x-1"
      >
        <input
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          className="px-3 py-1 text-sm outline-none border w-full border-black rounded-full"
          type="text"
          placeholder="live chat"
        />
        <button className="bg-green-900 text-white rounded-full border-black border px-2 py-1">
          send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
