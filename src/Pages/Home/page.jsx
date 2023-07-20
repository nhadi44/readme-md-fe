/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { HomePageHero } from "../../Components/Hero/HomePageHero";
import { TrendingComponent } from "../../Components/Trending";
import { PostHomePage } from "../../Components/HomePage/PostHomePage";
import { TopicsHomePage } from "../../Components/HomePage/TopicsHomePage";

export const HomePage = () => {
  const [title, setTitle] = useState("Readme.md - Where good ideas find you");

  const [stickyTopics, setStickyTopics] = useState(false);

  useEffect(() => {
    document.title = title;

    return () => {
      document.title = setTitle;
    };
  }, [title]);

  useEffect(() => {
    const handleScrollTopics = () => {
      if (window.scrollY > 950) {
        setStickyTopics(true);
      } else {
        setStickyTopics(false);
      }
    };

    window.addEventListener("scroll", handleScrollTopics);

    return () => {
      window.removeEventListener("scroll", handleScrollTopics);
    };
  }, [stickyTopics]);

  return (
    <>
      <HomePageHero />
      <main className="">
        <section className="border-b-[1px] border-b-slate-200">
          <div className="container py-5 px-4 md:py-16 md:px-0">
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
            <div className="grid grid-rows-1 gap-3 md:grid-cols-3">
              <TrendingComponent
                trendingNumberPost={"01"}
                trendingAuthorPost={"Hadi Nurhidayat"}
                trendingTitlePost={
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quos."
                }
                trendingDatePost={"2023-07-14 19:21:00"}
                trendingTopicPost={"Technology"}
              />
              <TrendingComponent
                trendingNumberPost={"01"}
                trendingAuthorPost={"Hadi Nurhidayat"}
                trendingTitlePost={
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quos."
                }
                trendingDatePost={"2023-07-14 19:21:00"}
                trendingTopicPost={"Technology"}
              />
              <TrendingComponent
                trendingNumberPost={"01"}
                trendingAuthorPost={"Hadi Nurhidayat"}
                trendingTitlePost={
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quos."
                }
                trendingDatePost={"2023-07-14 19:21:00"}
                trendingTopicPost={"Technology"}
              />
              <TrendingComponent
                trendingNumberPost={"01"}
                trendingAuthorPost={"Hadi Nurhidayat"}
                trendingTitlePost={
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quos."
                }
                trendingDatePost={"2023-07-14 19:21:00"}
                trendingTopicPost={"Technology"}
              />
              <TrendingComponent
                trendingNumberPost={"01"}
                trendingAuthorPost={"Hadi Nurhidayat"}
                trendingTitlePost={
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quos."
                }
                trendingDatePost={"2023-07-14 19:21:00"}
                trendingTopicPost={"Technology"}
              />
              <TrendingComponent
                trendingNumberPost={"01"}
                trendingAuthorPost={"Hadi Nurhidayat"}
                trendingTitlePost={
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quos."
                }
                trendingDatePost={"2023-07-14 19:21:00"}
                trendingTopicPost={"Technology"}
              />
            </div>
          </div>
        </section>
        <section className="container py-5 px-4 md:py-16 md:px-0 grid grid-rows-1 md:grid-cols-4 gap-6">
          <div className="col-span-0 md:col-span-3 order-2 md:order-1">
            <PostHomePage />
            <PostHomePage />
            <PostHomePage />
            <PostHomePage />
            <PostHomePage />
          </div>
          <div className="col-span-0 md:col-span-1 order-1 md:order-2 ">
            <TopicsHomePage stickyTopics={stickyTopics} />
          </div>
        </section>
      </main>
    </>
  );
};
