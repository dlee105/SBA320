import { useState } from "react";
import React from "react";

import { Input, Button } from "@material-tailwind/react";
import axios from "axios";

function SearchBar(props) {
  const [query, setQuery] = useState("");

  async function getQueryInfo() {
    if (query == "") return;

    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${props.token}`,
      },
      params: {
        q: query,
        type: "track",
      },
    });

    props.func(data.tracks.items);
  }

  function handleSearch() {
    getQueryInfo();
  }

  const onChange = ({ target }) => {
    setQuery(target.value);
  };

  return (
    <div className="flex w-full border border-white  border-r-0 rounded-full">
      <Input
        type="text"
        placeholder="Search Something"
        className=" focus:!border-none !rounded-none !border-none text-white"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        containerProps={{
          className: "min-w-0 bottom-0",
        }}
        onChange={onChange}
      />
      <Button
        color="green"
        className="text-white rounded-none rounded-r-full hover:bg-green !px-5 focus:px-5"
        onClick={() => handleSearch()}
      >
        Search
      </Button>
      {/* <div className="pt-2 px-4  bg-sp-green border-r rounded-r-full hover:bg-sp-grey">
        Search
      </div> */}
    </div>
  );
}

export default SearchBar;
