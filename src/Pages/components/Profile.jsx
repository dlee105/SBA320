import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

function Profile(props) {
  const [user, setUser] = useState(props.userData);

  useEffect(() => {
    setUser(props.userData);
  });

  return (
    <>
      <div className="flex justify-between">
        <div className="w-3/4 p-5 rounded-xl bg-sp-grey  ">
          <div className="text-5xl">{user.display_name}</div>
          <div className="flex flex-col justify-start items-start">
            <a className="hover:text-sp-green" href={user.href}>
              Profile Link (not working)
            </a>
            <p>Follower: {user.followers.total}</p>
          </div>
        </div>
        <div className="ml-5 w-1/4 flex justify-end">
          <img
            className="hover:border-sp-green rounded-xl w-48 h-48 border hover:p-1"
            src={user.images[1].url}
            alt=""
          />
        </div>
      </div>
      <div className="w-full bg-sp-grey mt-5 rounded-xl flex flex-wrap">
        <CurrentUserPlayList token={props.token} />
      </div>
    </>
  );
}

export default Profile;

function CurrentUserPlayList(props) {
  const [curr, setCurr] = useState(props.data);
  const [playlists, setPlaylists] = useState(null);

  async function getUserPlaylist() {
    // console.log(props.token);
    const { data } = await axios.get(
      "https://api.spotify.com/v1/me/playlists",
      {
        headers: {
          Authorization: `Bearer ${props.token}`,
        },
      }
    );

    console.log(data);
    setPlaylists(data.items);
  }

  useEffect(() => {
    getUserPlaylist();
  }, []);

  return (
    <>
      {/* {playlists.map((playlist, index) => (
        <Card className="w-1/3 bg-sp-light-grey text-white border border-transparent hover:border-sp-green">
          <CardHeader floated={false} className="">
            <img
              src="https://docs.material-tailwind.com/img/team-3.jpg"
              alt="profile-picture"
              className=""
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="white" className="mb-2">
              {playlist.name}
            </Typography>
            Total: {playlist.tracks.total}
          </CardBody>
        </Card>
      ))} */}
    </>
  );
}
