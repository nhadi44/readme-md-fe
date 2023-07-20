/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Avatar } from "react-daisyui";
import { datePostConvert } from "../../libs/dateConveter";

import postImage from "../../Assets/images/post-image.jpg";

export const PostHomePage = () => {
  const [datePost, setDatePost] = useState(null);

  const postTime = "2023-07-14 19:21:00";

  useEffect(() => {
    setDatePost(datePostConvert(postTime));

    return () => {
      setDatePost(datePostConvert(postTime));
    };
  }, []);

  return (
    <>
      <div className="grid grid-cols-4 mb-8">
        <div className="col-span-3">
          <div className="flex gap-2 items-center mb-2">
            <img
              src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
              alt="user-avatar"
              className="h-8 w-8 rounded-[100%]"
            />
            <span className="text-slate-900 font-normal">Hadi Nurhidayat</span>
          </div>
          <h5 className="overflow-hidden leading-snug line-clamp-2 font-bold text-sm md:text-xl mb-2 md:mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, sit.
          </h5>
          <p className="leading-snug line-clamp-2 text-slate-600 my-3 hidden md:block">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus veritatis doloribus
            nostrum quisquam in sint, libero sapiente odit asperiores inventore, earum eum iusto
            eius quidem, qui optio dicta quibusdam ea.
          </p>
          <div className="flex items-center gap-2 text-slate-600">
            <small>{datePost}</small>
            <span className="h-1 w-1 bg-slate-400 block rounded-full"></span>
            <small>Technology</small>
          </div>
        </div>
        <div className="col-span-1">
          <img
            src={postImage}
            alt="post-image"
            className="min-h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};
