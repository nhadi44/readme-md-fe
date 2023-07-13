/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { HomePageHero } from "../../Components/Hero/HomePageHero";

export const HomePage = () => {
  const [title, setTitle] = useState("Readme.md - Where good ideas find you");

  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <>
      <HomePageHero />
      <main className="container py-3">
        <h1>Hello</h1>
      </main>
    </>
  );
};
