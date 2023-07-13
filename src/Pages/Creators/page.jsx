/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

export const Creators = () => {
  const [title, setTitle] = useState("Write your ideas for free - Readme.md");

  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <>
      <h1>Hello from creators</h1>
    </>
  );
};
