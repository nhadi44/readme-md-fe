/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const TopicsHomePage = ({ stickyTopics }) => {
  return (
    <div className={` ${stickyTopics ? "block md:fixed md:top-28 md:w-[20%]" : "block"}`}>
      <h5 className="font-semibold text-sm md:text-lg text-slate-900 mb-5">
        Discover more of what metters to you
      </h5>
      <div className="flex flex-wrap mb-4">
        <Link
          to={"#"}
          className="bg-slate-100 min-w-0 m-[5px] p-[10px] rounded-md transition-all duration-100 ease-in hover:bg-slate-200 text-sm"
        >
          Programming
        </Link>
        <Link
          to={"#"}
          className="bg-slate-100 min-w-0 m-[5px] p-[10px] rounded-md transition-all duration-100 ease-in hover:bg-slate-200 text-sm"
        >
          Data Science
        </Link>
        <Link
          to={"#"}
          className="bg-slate-100 min-w-0 m-[5px] p-[10px] rounded-md transition-all duration-100 ease-in hover:bg-slate-200 text-sm"
        >
          Technology
        </Link>
        <Link
          to={"#"}
          className="bg-slate-100 min-w-0 m-[5px] p-[10px] rounded-md transition-all duration-100 ease-in hover:bg-slate-200 text-sm t"
        >
          Self Improvement
        </Link>
        <Link
          to={"#"}
          className="bg-slate-100 min-w-0 m-[5px] p-[10px] rounded-md transition-all duration-100 ease-in hover:bg-slate-200 text-sm"
        >
          Writing
        </Link>
        <Link
          to={"#"}
          className="bg-slate-100 min-w-0 m-[5px] p-[10px] rounded-md transition-all duration-100 ease-in hover:bg-slate-200 text-sm"
        >
          Relationship
        </Link>
        <Link
          to={"#"}
          className="bg-slate-100 min-w-0 m-[5px] p-[10px] rounded-md transition-all duration-100 ease-in hover:bg-slate-200 text-sm"
        >
          Machine Learning
        </Link>
      </div>
      <Link
        to={"#"}
        className="text-green-500 font-semibold transition-all duration-100 ease-in hover:text-green-600"
      >
        See more topics
      </Link>
      <div className="border-b-[1px] border-b-slate-200 mt-5"></div>
      <div className="py-0 md:py-5 text-slate-500 hidden md:flex md:flex-wrap md:gap-2">
        <Link to={"#"} className="min-w-0 my-1 p-1 text-[16px]">
          Help
        </Link>
        <Link to={"#"} className="min-w-0 my-1 p-1 text-[16px]">
          Status
        </Link>
        <Link to={"#"} className="min-w-0 my-1 p-1 text-[16px]">
          Writers
        </Link>
        <Link to={"#"} className="min-w-0 my-1 p-1 text-[16px]">
          Blog
        </Link>
        <Link to={"#"} className="min-w-0 my-1 p-1 text-[16px]">
          Careers
        </Link>
        <Link to={"#"} className="min-w-0 my-1 p-1 text-[16px]">
          Privacy
        </Link>
        <Link to={"#"} className="min-w-0 my-1 p-1 text-[16px]">
          Terms
        </Link>
        <Link to={"#"} className="min-w-0 my-1 p-1 text-[16px]">
          About
        </Link>
        <Link to={"#"} className="min-w-0 my-1 p-1 text-[16px]">
          Text to speech
        </Link>
        <Link to={"#"} className="min-w-0 my-1 p-1 text-[16px]">
          Teams
        </Link>
      </div>
    </div>
  );
};
