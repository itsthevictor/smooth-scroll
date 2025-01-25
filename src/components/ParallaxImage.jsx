import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const ParallaxImage = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px ${end}px`, `${end}px ${end * -1}px`],
  });

  // useMotionValueEvent(scrollYProgress, "change", (latest) =>
  //   console.log(latest)
  // );

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);

  const transform = useMotionTemplate`translateY(${y}px)`;

  return (
    <motion.img
      re={ref}
      src={src}
      alt={alt}
      className={className}
      style={{ transform }}
    />
  );
};
export default ParallaxImage;
