import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
const SECTION_HEIGHT = 1500;
const CenterImage = () => {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, SECTION_HEIGHT + 500], [1, 0]);

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );

  const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT], [25, 0]);
  const clip2 = useTransform(scrollY, [0, SECTION_HEIGHT], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  return (
    <motion.div
      className="center-image"
      style={{
        opacity,
        backgroundSize,
        clipPath,
      }}
    />
  );
};
export default CenterImage;
