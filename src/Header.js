import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import logo from "./assets/linkedin.png";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import photo from "./assets/PHOTO.jpeg";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="" />

        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notification" />
        <HeaderOption
          avatar={
            "https://media-exp1.licdn.com/dms/image/D5603AQFrWXhJIUYrDw/profile-displayphoto-shrink_400_400/0/1665407995522?e=1673481600&v=beta&t=NL-AD1Z1slnVymHHWq7bXSPmElaLzITrIWQW0vkvXkQ"
          }
          title="me"
        />
      </div>
    </div>
  );
}

export default Header;
