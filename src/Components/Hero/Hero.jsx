/* eslint-disable react/prop-types */
import { Hero } from "react-daisyui";
export const HeroComponent = ({ heroWrapperClass, heroOverlayColor, content }) => {
  return (
    <Hero className={heroWrapperClass}>
      <Hero.Overlay className={heroOverlayColor} />
      <Hero.Content className="text-center">{content}</Hero.Content>
    </Hero>
  );
};
