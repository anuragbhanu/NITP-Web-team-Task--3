
import React, { useEffect, useState } from "react";
import Card from "../Card/card";
import yt from "../../assets/Images/yt.jpg"

const YoutubeGallary = () => {
  const [videos, setData] = useState([]);
  const YOUTUBE_url="https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=UUFKRZ43w2dnnvLnaeDwKq1A&key=AIzaSyDB4JUUz0poml9NwvnAFflkBMabj54meGE"
  
  const fetchData = async () => {
    const response = await fetch(YOUTUBE_url
      ).then((e)=>e.json()).then(d=>setData(d.items))
  };
  useEffect(() => {
    fetchData();
  }, []); 

  const videosData=videos
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 mt-10 px-4 sm:px-6 sm:gap-4  ">
      {videosData.map((video) => <Card 
      key={video["id"]}
      source="Youtube"
      media_url={video["snippet"]["thumbnails"]["high"]["url"]}      
      profile_link="https://www.youtube.com/@nitp_vista"
      videoId={video["snippet"]["resourceId"]["videoId"]}
      permalink= {`https://www.youtube.com/watch?v=${video["snippet"]["resourceId"]["videoId"]}`}
      caption={video["snippet"]["title"]}
      username={video["snippet"]["channelTitle"]}
      dp={yt}
 />)}
    </div>
  );
};

export default YoutubeGallary;
