import React from "react";
import YouTube from 'react-youtube';

export default function Test() {

  return (
      <div>
          <YouTube videoId="wnqiSwrtGac"
                   opts={
                    {
                        height: '390',
                        width: '640',
                        playerVars: {
                          // https://developers.google.com/youtube/player_parameters
                          autoplay: 1,
                        },
                      }
                   } />
      </div>
  )
}
