import React from "react";
import { useState } from "react";

function MusicPlayer(props) {
  const [currentTrack, setCurrentTrack] = useState(null);

  return (
    <div className="flex justify-center h-screen p-0.5 h-fit">
      <div class="rounded-lg shadow-md w-full p-4 border border-sp-green">
        <img
          src="https://telegra.ph/file/2acfcad8d39e49d95addd.jpg"
          alt="idk - Highvyn, Taylor Shin"
          class="w-64 h-64 rounded-lg m-auto shadow-md shadow-sp-green"
        />
        <div className="pt-3">
          <div className="text-lg">Song name</div>
          <div className="text-sm text-gray-500 hover:text-white">
            <a href="">Artists</a>
          </div>
        </div>
        <div className="pt-3">
          <button class="p-3 rounded-full bg-sp-light-grey hover:bg-sp-card hover:border-sp-green focus:outline-none">
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              class="w-2 h-2 text-gray-600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              transform="matrix(-1, 0, 0, 1, 0, 0)"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M16.6598 14.6474C18.4467 13.4935 18.4467 10.5065 16.6598 9.35258L5.87083 2.38548C4.13419 1.26402 2 2.72368 2 5.0329V18.9671C2 21.2763 4.13419 22.736 5.87083 21.6145L16.6598 14.6474Z"
                  fill="#ffff"
                ></path>
                <path
                  d="M22.75 5C22.75 4.58579 22.4142 4.25 22 4.25C21.5858 4.25 21.25 4.58579 21.25 5V19C21.25 19.4142 21.5858 19.75 22 19.75C22.4142 19.75 22.75 19.4142 22.75 19V5Z"
                  fill="#ffff"
                ></path>
              </g>
            </svg>
          </button>
          <button class="p-4 rounded-full bg-sp-light-grey hover:bg-sp-card hover:border-sp-green focus:outline-none mx-4">
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              class="w-2 h-2 text-gray-600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V6Z"
                  fill="#ffff"
                ></path>
                <path
                  d="M14 6C14 4.11438 14 3.17157 14.5858 2.58579C15.1716 2 16.1144 2 18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V6Z"
                  fill="#ffff"
                ></path>
              </g>
            </svg>
          </button>
          <button class="p-3 rounded-full bg-sp-light-grey hover:bg-sp-card hover:border-sp-green focus:outline-none">
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              class="w-2 h-2 text-sp-grey"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M16.6598 14.6474C18.4467 13.4935 18.4467 10.5065 16.6598 9.35258L5.87083 2.38548C4.13419 1.26402 2 2.72368 2 5.0329V18.9671C2 21.2763 4.13419 22.736 5.87083 21.6145L16.6598 14.6474Z"
                  fill="#ffff"
                ></path>
                <path
                  d="M22.75 5C22.75 4.58579 22.4142 4.25 22 4.25C21.5858 4.25 21.25 4.58579 21.25 5V19C21.25 19.4142 21.5858 19.75 22 19.75C22.4142 19.75 22.75 19.4142 22.75 19V5Z"
                  fill="#ffff"
                ></path>
              </g>
            </svg>
          </button>
        </div>
        <div class="mt-6 bg-sp-bg h-2 rounded-full">
          <div class="bg-sp-green h-2 rounded-full w-1/2"></div>
        </div>

        <div class="flex justify-between mt-2 text-sm text-gray-600">
          <span>1:57</span>
          <span>3:53</span>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
