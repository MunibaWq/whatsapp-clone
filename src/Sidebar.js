import React from "react";
import "./Sidebar.css";

import { Avatar } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChatIcon from "@material-ui/icons/Chat";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__headerRight">
          <DonutLargeIcon />
          <ChatIcon />
          <MoreVertIcon />
        </div>
      </div>
      <div className="div sidebar__search"></div>
      <div className="div sidebar__chats"></div>
    </div>
  );
};

export default Sidebar;
