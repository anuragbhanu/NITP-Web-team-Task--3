import React from "react";

const Card = (props) => {
  return (
    <a href={props.permalink} target="blank">
      <div className="bg-indigo-200 p-4">
        <div className="bg-white border rounded-sm ">
          <a href={props.profile_link} target="_blank">
            <div className="flex items-center px-4 py-3">
              <img className="h-8 w-8 rounded-full" src={props.dp} />
              <div className="ml-3 ">
                <span className="text-sm font-semibold antialiased block leading-tight">
                  {props.username}
                </span>
              </div>
            </div>
          </a>
          
        {/*Using Conditional Rendring to Render the Instagram Image or Video with <img/> <iframe/> repectively  */}
          {props.source == "Instagram" && <>
              {props.media_type != "VIDEO" ? (
                <img src={props.media_url} />
              ) : (
                <div className="relative overflow-hidden pt-[56.25%]">
                <iframe id="mediaId"
                  className=" absolute w-full h-full top-0 left-0 p-1 md:p-3"
                  src={props.media_url}
                  title="YouTube video player"
                  frameborder="0"
                  controls="true"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>)
              }
              </>
          }

          {/*Conditional Rendering For Youtube Videos */}
          {props.source == "Youtube" && (
            <div className="relative overflow-hidden pt-[56.25%]">
              <iframe
                className=" absolute w-full h-full top-0 left-0 p-1 md:p-3"
                src={`https://www.youtube.com/embed/${props.videoId}?rel=0&amp;autoplay=0&mute=1`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>{" "}
            </div>
          )}

          <div className="px-4 py-4">
            <p>{props.caption}</p>
          </div>
          <div className="px-4 py-4">
            <p>{props.time}</p>
          </div>
        </div>
      </div>
    </a>
  );
};


export default Card;
