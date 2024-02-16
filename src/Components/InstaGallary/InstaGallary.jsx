
import React, { useEffect, useState } from "react";
import Card from "../Card/card";
import dp from "../../assets/Images/dp.jpg"

const InstaGallary = () => {
  const [postsData, setData] = useState([]);
  const INSTAGRAM_KEY="IGQWRQZAXYxNDlKM2dRMHRlNFBXUEFIWEwtd2FqeGdRcmFLWGxiVXpiaG03Y18wUHRWN3Q2MHlzb2ZANTjVQYTlnV2RocEdSUElVWHI3aElZAdDJ3OWxVeDBfUHl1b0V4Q2dXcDVvY1BEMFFjRERRZAU41blM5eG11NWsZD"

  const url =`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,username,timestamp,permalink&access_token=${INSTAGRAM_KEY}`
  const fetchData = async () => {
    const response = await fetch(url
      ).then((e)=>e.json()).then(d=>setData(d.data))
  };
  useEffect(() => {
    fetchData();
  }, []); 


  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 mt-10 px-4 sm:px-6 sm:gap-4  ">
      {postsData.map((post) => <Card 
      key={post["id"]}
      dp={dp}
      source="Instagram"
      media_type={post["media_type"]}
      profile_link="https://www.instagram.com/bot_bhanu_op/"
      media_url={post["media_url"]} 
      caption={post["caption"]}
      username={post["username"]}
      permalink={post["permalink"]}
      time={post["timestamp"]}
 />)}
    </div>
  );
};

export default InstaGallary;
