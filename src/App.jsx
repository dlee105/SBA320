import { useEffect, useState } from "react";

import "./App.css";

import { Button } from "@material-tailwind/react";
import spotiLite from "./assets/spotiLite.png";
import SearchBar from "./Pages/components/searchBar";

import QuicknavBtn from "./Pages/components/quicknavBtn";
import MusicPlayer from "./Pages/components/musicPlayer";
import ProfileAvatar from "./Pages/components/profileAvatar";
import PlaylistDisplay from "./Pages/components/playlistDisplay";

function App() {
  const CLIENT_ID = "e168e3307df14e53acc11791df29ddd5";
  const REDIRECT_URI = "http://localhost:5173/sba320/";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState();
  const [apiRes, setApiRes] = useState([]);

  function handleApiResponse(data) {
    setApiRes(data);
  }

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

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <>
      <div className="flex sm:grid sm:space-y-2 md:space-x-2 lg:space-x-2">
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
            <SearchBar token={token} func={handleApiResponse} />
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
              <ProfileAvatar logout={logout} token={token} />
            )}
          </div>
          <QuicknavBtn func={handleApiResponse} token={token} />
        </div>
      </div>
      <div className="flex sm:grid sm:space-y-2 md:space-x-2 lg:space-x-2 mt-3">
        <div className="bg-sp-grey w-1/4 rounded-md">
          <MusicPlayer />
        </div>
        <div className="bg-sp-grey md:w-3/4 lg:w-3/4 sm:w-full rounded-md h-svh overflow-hidden overflow-y-scroll">
          <PlaylistDisplay data={apiRes} token={token} />
        </div>
      </div>
    </>
  );
}
export default App;
