import React from "react";
import { useState, useEffect } from "react";
import {
  ThemeProvider,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const nav_svg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    className="w-4 h-4"
    onClick={() => window.location.replace("https://open.spotify.com/")}
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
    />
  </svg>
);

const customMenu = {
  menu: {
    defaultProps: {
      placement: "bottom",
      offset: 5,
      dismiss: {
        itemPress: true,
      },
      animate: {
        unmount: {},
        mount: {},
      },
      lockScroll: false,
    },
    styles: {
      base: {
        menu: {
          bg: "bg-sp-grey",
          minWidth: "min-w-[180px]",
          p: "p-1",
          border: "border-transparent",
          borderRadius: "rounded-md",
          boxShadow: "shadow-lg shadow-blue-gray-500/10",
          fontFamily: "font-sans",
          fontSize: "text-sm",
          fontWeight: "font-medium",
          color: "text-blue-gray-500",
          overflow: "overflow-auto",
          outline: "focus:outline-none",
          zIndex: "z-[999]",
        },
        item: {
          initial: {
            display: "block",
            width: "w-full",
            pt: "pt-[9px]",
            pb: "pb-2",
            px: "px-3",
            borderRadius: "rounded-none",
            textAlign: "text-start",
            lightHeight: "leading-tight",
            cursor: "cursor-pointer",
            userSelect: "select-none",
            transition: "transition-all",
            bg: "hover:bg-sp-light-grey ",
            color: "text-white",
            outline: "outline-none",
          },
          disabled: {
            opacity: "opacity-50",
            cursor: "cursor-not-allowed",
            pointerEvents: "pointer-events-none",
            userSelect: "select-none",
            bg: "hover:bg-transparent focus:bg-transparent active:bg-transparent",
            color:
              "hover:text-blue-gray-500 focus:text-blue-gray-500 active:text-blue-gray-500",
          },
        },
      },
    },
  },
};

function ProfileAvatar(props) {
  const [userImg, setUserImg] = useState(null);

  async function getProfile() {
    const { data } = await axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${props.token}`,
      },
    });

    setUserImg(data.images[1].url);
  }

  useEffect(() => {
    getProfile();
  }, []);

  const navigate = useNavigate();

  return (
    <ThemeProvider value={customMenu}>
      <Menu placement="bottom-end">
        <MenuHandler>
          <Avatar
            src={userImg}
            alt="avatar"
            className="ml-5 p-0.5 border-transparent border hover:border-2 hover:border-sp-green"
            withBorder={true}
          />
        </MenuHandler>
        <MenuList className="">
          <MenuItem className="" onClick={() => navigate("/sba320/profile")}>
            Profile
          </MenuItem>
          <MenuItem className="" onClick={() => navigate("/sba320/about")}>
            About
          </MenuItem>
          <MenuItem className="flex items-center justify-between">
            Spotify {nav_svg}
          </MenuItem>
          <hr className="border-sp-light-grey" />
          <MenuItem
            className="!text-sp-green !font-black"
            onClick={props.logout}
          >
            Log out
          </MenuItem>
        </MenuList>
      </Menu>
    </ThemeProvider>
  );
}

export default ProfileAvatar;
