import React, { useEffect, useState } from "react";

function Profile(props) {
  const [user, setUser] = useState(props.userData);

  useEffect(() => {
    setUser(props.userData);
  });

  return (
    <div className="flex ">
      <div className="w-2/3 p-5 rounded-xl bg-sp-grey  ">
        <div className="text-5xl">{user.display_name}</div>
        <div className="flex flex-col justify-start items-start">
          <a className="hover:text-sp-green" href={user.href}>
            Profile Link (not working)
          </a>
          <p>Follower: {user.followers.total}</p>
        </div>
      </div>
      <div className="ml-5 w-1/3 ">
        <img
          className="border-sp-green rounded-xl w-48 h-48 border"
          src={user.images[1].url}
          alt=""
        />
      </div>
    </div>
  );
}

export default Profile;
