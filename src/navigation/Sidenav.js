import React from 'react';
import "./Sidenav.css";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { Avatar, Button } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { logoutUser } from "../features/userSlice";
import { auth } from "../firebase";

export default function Sidenav() {
  const user= useSelector(state=>state.data.user.user);
  const dispatch = useDispatch();
  const handelLogout = () => {
    dispatch(logoutUser());
    signOut(auth);
  };
  return (
    <div className='sidenav'>
      <img
        className="sidenav__logo"
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt="Instagram Logo"
      />

    <div className='sidenav_buttons'>
        <button className='sidenav_button'>
           <HomeIcon style={{ fontSize: 35}}/>
            <span style={{ fontWeight: "bold" }}>Home </span>
        </button>
        <button className='sidenav_button'>
           <SearchIcon style={{ fontSize: 35}}/>
            <span>Search</span>
        </button>
        <button className='sidenav_button'>
           <ExploreIcon style={{ fontSize: 35}}/>
            <span>Explore</span>
        </button>
        <button className='sidenav_button'>
           <SlideshowIcon style={{ fontSize: 35}}/>
            <span>Reels</span>
        </button>
        <button className='sidenav_button'>
           <ChatIcon style={{ fontSize: 35}}/>
            <span>Messages</span>
        </button>
        <button className='sidenav_button'>
           <FavoriteBorderIcon style={{ fontSize: 35}}/>
            <span>Notifications</span>
        </button>
        <button className='sidenav_button'>
           <AddBoxOutlinedIcon style={{ fontSize: 35}}/>
            <span>Create</span>
        </button>
       <button className="sidenav_button">
          <Avatar>
            {user.username ? user.username.charAt(0).toUpperCase() : "A"}
          </Avatar>
          <span>
            {user.username}{" "}
            <button onClick={handelLogout} className="logout_button">
              Logout
            </button>
          </span>
        </button>
        
    </div>
    </div>
  )
}
