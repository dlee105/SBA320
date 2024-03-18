import React from "react";
import axios from "axios";
import { useState } from "react";

import { ThemeProvider, ButtonGroup, Button } from "@material-tailwind/react";

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

function QuicknavBtn(props) {
  const [playListID, setPlayListID] = useState(null);

  async function getPlaylistInfo() {
    if (playListID == null) return;
    const { data } = await axios.get(
      "https://api.spotify.com/v1/playlists/" + playListID,
      {
        headers: {
          Authorization: `Bearer ${props.token}`,
        },
      }
    );

    props.func(data.tracks.items.map((obj) => obj.track));
  }

  const handleQuickSelection = (type) => {
    const PLAYLIST_ID = {
      top50: "37i9dQZEVXbLRQDuF5jeBp",
      hiphop: "37i9dQZF1DX0XUsuxWHRQd",
      pop: "37i9dQZF1DWTwnEm1IYyoj",
      electronic: "37i9dQZF1DX0BcQWzuB7ZO",
      classic: "37i9dQZF1EIhNMgnrEv1hX",
    };
    setPlayListID(PLAYLIST_ID[type]);
    getPlaylistInfo();
  };

  return (
    <>
      <div className="mt-5 w-full">
        <hr className="border-sp-light-grey pb-2" />
        Quick Playlist Suggestion
      </div>
      <ThemeProvider value={customBtn}>
        <ButtonGroup fullWidth className="w-full mt-2" color="green">
          <Button onClick={() => handleQuickSelection("top50")}>Top 50</Button>
          <Button onClick={() => handleQuickSelection("hiphop")}>
            Hip Hop
          </Button>
          <Button onClick={() => handleQuickSelection("pop")}>Pop</Button>
          <Button onClick={() => handleQuickSelection("electronic")}>
            Electronic
          </Button>
          <Button onClick={() => handleQuickSelection("classic")}>
            Classic Mix
          </Button>
        </ButtonGroup>
      </ThemeProvider>
    </>
  );
}

export default QuicknavBtn;
