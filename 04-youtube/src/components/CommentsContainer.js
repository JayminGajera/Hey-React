import React from "react";
import Comment from "./Comment";
import { nestedComments } from "../utils/constants";

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="border border-l-black ml-5 pl-5">
        <CommentList comments={comment.replies}/>
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="bg-gray-200 p-2 rounded-lg mt-2">
      <h1 className="font-bold text-md border border-b-slate-50 pb-2">Comments</h1>
      <CommentList comments={nestedComments} />
    </div>
  );
};

export default CommentsContainer;
