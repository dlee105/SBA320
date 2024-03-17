import React from "react";
import { List, Card, ListItem } from "@material-tailwind/react";

function RandomSong(props) {
  console.log(props.songs);

  const render = () => {
    return props.songs.map((song) => (
      <ListItem className="text-white">
        <div className="flex justify-center items-center focus:text-black">
          <img className="mr-5" src={song.album.images[2].url} alt="" />
          <p>{song.name}</p>
        </div>
      </ListItem>
    ));
  };

  console.log(render());

  return (
    <Card className="w-full bg-gray-800">
      <List>{render()}</List>
    </Card>
  );
}

export default RandomSong;
