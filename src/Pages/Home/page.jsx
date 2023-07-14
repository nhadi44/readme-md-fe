/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { HomePageHero } from "../../Components/Hero/HomePageHero";
import { TrendingComponent } from "../../Components/Trending";

export const HomePage = () => {
  const [title, setTitle] = useState("Readme.md - Where good ideas find you");

  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <>
      <HomePageHero />
      <main className="container py-5">
        <section className="grid grid-cols-3 gap-3">
          <TrendingComponent />
        </section>
      </main>
    </>
  );
};
