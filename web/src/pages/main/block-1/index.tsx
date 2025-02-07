import { animated, useInView, useSpring } from "react-spring";
import { DefaultButton } from "../../../components";
import './style.css';

export const Block1 = () => {
  const [ref, inView] = useInView({ amount: 0.3, });
  const fadeIn = useSpring({
    triggerOnce: true,
    opacity: inView ? 1 : 0,
    config: { duration: inView ? 600 : 0, once: true, easing: (t) => t * t * t },
  });
  
  return (
    <animated.div ref={ref} style={fadeIn} className="block firstBlock">
      <div>
        <div className="title">MOST INTUITIVE & IMMERSIVE<br />SOUNDSCAPE EXPERIENCE FOR TRPG</div>
        <div className="text">Dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempo.</div>
        <DefaultButton>DefaultButton</DefaultButton>
      </div>
    </animated.div>
  )
}