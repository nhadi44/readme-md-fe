/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Avatar from "../Assets/icons/man.png";
import { datePostConvert } from "../libs/dateConveter";
import { useEffect, useState } from "react";

export const TrendingComponent = ({
  trendingNumberPost,
  trendingAuthorPost,
  trendingTitlePost,
  trendingDatePost,
  trendingTopicPost,
}) => {
  const [datePost, setDatePost] = useState();
  const postTime = trendingDatePost;

  useEffect(() => {
    setDatePost(datePostConvert(postTime));

    return () => {
      setDatePost(datePostConvert(postTime));
    };
  }, []);

  return (
    <>
      <div className="flex gap-4">
        <h1 className="text-slate-300 text-5xl font-semibold">{trendingNumberPost}</h1>

        <div className="py-2">
          <div className="flex items-center gap-3 mb-3">
            <img src={Avatar} alt="avatar-post" className="w-4 h-4 rounded" />
            <span className="text-slate-900 text-[14px]">{trendingAuthorPost}</span>
          </div>

          <div>
            <h6 className="text-slate-900 text-md font-bold leading-snug overflow-hidden line-clamp-2 mb-2">
              {trendingTitlePost}
            </h6>

            <span className="text-slate-500 text-sm flex items-center gap-2">
              <span>{datePost}</span>
              <div className="h-1 w-1 bg-slate-500 rounded-[100%] block"></div>
              <span>{trendingTopicPost}</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
