import { useEffect, useState } from "react";

import "./App.css";

import {
  ThemeProvider,
  Avatar,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  ButtonGroup,
} from "@material-tailwind/react";
import spotiLite from "./assets/spotiLite.png";
import SearchBar from "./Pages/components/searchBar";
import axios from "axios";
import RandomSong from "./Pages/components/listItems";

const DEFAULT = {};

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

const customBtn = {
  buttonGroup: {
    defaultProps: {
      variant: "filled",
      size: "md",
      color: "blue",
      fullWidth: false,
      ripple: true,
      className: "",
    },
    valid: {
      variants: ["filled", "outlined", "gradient", "text"],
      sizes: ["sm", "md", "lg"],
      colors: [
        "white",
        "blue-gray",
        "gray",
        "brown",
        "deep-orange",
        "orange",
        "amber",
        "yellow",
        "lime",
        "light-green",
        "green",
        "teal",
        "cyan",
        "light-blue",
        "blue",
        "indigo",
        "deep-purple",
        "purple",
        "pink",
        "red",
        "sp-green",
      ],
    },
    styles: {
      base: {
        initial: {
          display: "flex",
          flexDirection: "row",
        },
        fullWidth: {
          width: "w-full",
        },
      },
      dividerColor: {
        white: {
          divideColor: "divide-blue-gray-50",
        },
        "blue-gray": {
          divideColor: "divide-blue-gray-600",
        },
        gray: {
          divideColor: "divide-gray-600",
        },
        brown: {
          divideColor: "divide-brown-600",
        },
        "deep-orange": {
          divideColor: "divide-deep-orange-600",
        },
        orange: {
          divideColor: "divide-orange-600",
        },
        amber: {
          divideColor: "divide-amber-600",
        },
        yellow: {
          divideColor: "divide-yellow-600",
        },
        lime: {
          divideColor: "divide-lime-600",
        },
        "light-green": {
          divideColor: "divide-light-green-600",
        },
        green: {
          divideColor: "sp-green",
        },
        teal: {
          divideColor: "divide-teal-600",
        },
        cyan: {
          divideColor: "divide-cyan-600",
        },
        "light-blue": {
          divideColor: "divide-light-blue-600",
        },
        blue: {
          divideColor: "divide-blue-600",
        },
        indigo: {
          divideColor: "divide-indigo-600",
        },
        "deep-purple": {
          divideColor: "divide-deep-purple-600",
        },
        purple: {
          divideColor: "divide-purple-600",
        },
        pink: {
          divideColor: "divide-pink-600",
        },
        red: {
          divideColor: "divide-red-600",
        },
      },
    },
  },
};

const nav_svg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-4 h-4"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
    />
  </svg>
);

function App() {
  const CLIENT_ID = "e168e3307df14e53acc11791df29ddd5";
  const REDIRECT_URI = "http://localhost:5173/sba320/";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState();

  const [randomSongs, setRandomSongs] = useState([]);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((el) => el.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);

      console.log(token);
    }
    setToken(token);
  }, []);

  const getRandom = async () => {
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: "Discover Weekly",
        type: "track",
      },
    });

    console.log(data);
    // setRandomSongs(data.tracks.items);
  };

  useEffect(() => {
    getRandom();
  }, [token]);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <>
      <div className="flex sm:grid  sm:space-y-2 md:space-x-2 lg:space-x-2">
        <div className="md:w-1/4 sm:w-full lg:w-1/4 bg-sp-card rounded-md flex justify-center items-center py-5">
          <img
            src={spotiLite}
            alt="spotiLite"
            width={"150px"}
            height={"70px"}
          />
        </div>
        <div className="md:w-3/4 lg:w-3/4 bg-sp-card rounded-md p-3">
          <div className="flex justify-center items-center">
            <SearchBar />
            {!token ? (
              <Button
                variant="gradient"
                color="green"
                className="ml-5 !rounded-full"
              >
                <a
                  href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
                >
                  Login
                </a>
              </Button>
            ) : (
              <ProfileAvatar logout={logout} />
            )}
          </div>
          <div className="mt-5 w-full">
            <hr className="border-sp-light-grey pb-2" />
            Quick Playlist Suggestion
          </div>
          <ThemeProvider value={customBtn}>
            <ButtonGroup fullWidth className="w-full mt-2" color="green">
              <Button>Top 50</Button>
              <Button>Hip Hop</Button>
              <Button>Pop</Button>
              <Button>Electronic</Button>
              <Button>Classic Mix</Button>
            </ButtonGroup>
          </ThemeProvider>
        </div>
      </div>
    </>
  );
}

{
  /* <RandomSong songs={randomSongs} /> */
}
export default App;

function ProfileAvatar(props) {
  return (
    <ThemeProvider value={customMenu}>
      <Menu placement="bottom-end">
        <MenuHandler>
          <Avatar
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            alt="avatar"
            className="ml-5 p-0.5 border-transparent border hover:border-2 hover:border-sp-green"
            withBorder={true}
          />
        </MenuHandler>
        <MenuList className="">
          <MenuItem className="">Profile</MenuItem>
          <MenuItem className="">About</MenuItem>
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