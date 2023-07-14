import Avatar from "../Assets/icons/man.png";
import { datePostConvert } from "../libs/dateConveter";
import { useEffect, useState } from "react";

export const TrendingComponent = () => {
  const [datePost, setDatePost] = useState();
  const postTime = "2023-07-14 19:21:00";

  useEffect(() => {
    setDatePost(datePostConvert(postTime));

    return () => {
      setDatePost(datePostConvert(postTime));
    };
  }, []);

  return (
    <>
      <section>
        <h1 className="flex items-center gap-3 mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 border-[1px] border-slate-500 p-1 rounded-xl"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
            />
          </svg>
          <span className="text-md text-slate-900 font-semibold">Trending on Readme</span>
        </h1>

        <div className="flex gap-4">
          <h1 className="text-slate-300 text-5xl font-semibold">01</h1>

          <div className="py-2">
            <div className="flex items-center gap-3 mb-3">
              <img src={Avatar} alt="avatar-post" className="w-4 h-4 rounded" />
              <span className="text-slate-900 text-[14px]">Hadi Nurhidayat</span>
            </div>

            <div>
              <h6 className="text-slate-900 text-md font-bold leading-snug overflow-hidden line-clamp-2 mb-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quos.
              </h6>

              <span className="text-slate-500 text-sm">
                <span>{datePost}</span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
