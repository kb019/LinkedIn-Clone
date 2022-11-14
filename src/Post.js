import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import "./Post.css";
import InputOption from "./InputOption";
// import ThumbUAltOutlinedIcon from "./ThumbUpAltOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption title="like" color="gray" Icon={ThumbUpAltOutlinedIcon} />
        <InputOption title="Comment" color="gray" Icon={ChatOutlinedIcon} />
        <InputOption title="Share" color="gray" Icon={ShareOutlinedIcon} />
        <InputOption title="Send" color="gray" Icon={SendOutlinedIcon} />
      </div>
    </div>
  );
});

export default Post;
