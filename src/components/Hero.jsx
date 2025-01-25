import CenterImage from "./CenterImage";
import { motion } from "framer-motion";
import ParallaxImages from "./ParallaxImages";
const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div className="hero">
      <CenterImage />
      <ParallaxImages />
    </div>
  );
};
export default Hero;
