const word = "with framer-motion";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "./Image";
import { useRef } from "react";

const ParallaxGallery = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

  const slides = [
    {
      url: "https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      parallax: 0,
    },
    {
      url: "https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      parallax: md,
    },
    {
      url: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      parallax: sm,
    },
    {
      url: "https://images.unsplash.com/photo-1494022299300-899b96e49893?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      parallax: lg,
    },
  ];

  return (
    <div className="container" ref={container}>
      <motion.h1 style={{ y: sm }}>Parralax</motion.h1>
      <h1>scroll</h1>
      <div className="word">
        <p>
          {word.split("").map((letter, i) => (
            <span key={i}>{letter}</span>
          ))}
        </p>
      </div>
      <div className="images">
        {slides.map((item, i) => (
          <motion.div
            style={{ y: item.parallax }}
            className={`image-${i}`}
            key={i}
          >
            <Image src={item.url} fill />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default ParallaxGallery;
