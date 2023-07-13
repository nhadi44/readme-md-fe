/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

export const OurStory = () => {
  const [title, setTitle] = useState("What is Readme.md?");

  useEffect(() => {
    document.title = title;
  }, []);
  return (
    <>
      <h1>Hello from our story</h1>
    </>
  );
};
