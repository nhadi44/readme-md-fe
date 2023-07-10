import { useEffect, useState } from "react";

export const HomePage = () => {
  const [title, setTitle] = useState("Readme.md - Where good ideas find you");

  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <>
      <h1>Home Page</h1>
    </>
  );
};
