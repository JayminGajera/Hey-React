import React from "react";
import Comment from "./Comment";
import { nestedComments } from "../utils/constants";
import { useSelector } from "react-redux";

const CommentList = ({ comments }) => {
  const isDark = useSelector((store) => store.app.isDark);
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className={"border border-l-black ml-5 pl-5 " + (isDark && " border-none")}>
        <CommentList comments={comment.replies}/>
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  const isDark = useSelector((store) => store.app.isDark);
  return (
    <div className={"bg-gray-200 p-2 rounded-lg md:mt-2 " + ( isDark && "bg-slate-800 text-white")}>
      <h1 className={"font-bold text-md border border-b-slate-50 pb-2 pt-2 "+ (isDark && "text-white border-none") }>Comments</h1>
      <CommentList comments={nestedComments} />
    </div>
  );
};

export default CommentsContainer;
