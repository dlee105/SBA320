import React from "react";
import { useState, useEffect } from "react";
import { Typography, Card } from "@material-tailwind/react";

function PlaylistDisplay(props) {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    setTracks(props.data);
  });

  const TABLE_HEAD = ["", "ID", "Track Name", "Artist"];

  const PLAY_BTN = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:text-sp-green"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
      />
    </svg>
  );

  return (
    <Card>
      <table className="w-full min-w-max table-auto text-left">
        <thead className="">
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-sp-grey  p-4"
              >
                <Typography
                  variant="small"
                  color="white"
                  className="font-normal leading-none"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tracks.map((song, index) => {
            const classes = "bg-sp-grey text-white p-4 ";
            const btn_classes = "bg-sp-grey text-white relative cursor-pointer";
            return (
              <tr className="hover:bg-sp-green">
                <td className={btn_classes}>
                  <img src={song.album.images[2].url} alt="" className="" />
                  {PLAY_BTN}
                </td>
                <td className={classes}>{index}</td>
                <td className={classes}>{song.name}</td>
                <td className={classes}>
                  {song.artists.map((artist) => (
                    <a href={artist.href}>{artist.name}, </a>
                  ))}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}

export default PlaylistDisplay;
