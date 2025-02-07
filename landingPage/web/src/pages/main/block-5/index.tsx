import { animated, useInView, useSpring } from 'react-spring';
import { DefaultButton } from '../../../components';
import './style.css';

export const Block5 = () => {
  const [ref, inView] = useInView({ amount: 0.3, });
  const fadeIn = useSpring({
    triggerOnce: true,
    opacity: inView ? 1 : 0,
    config: { duration: inView ? 600 : 0, once: true, easing: (t) => t * t * t },
  });

  return (
    <animated.div ref={ref} style={fadeIn} className="block fifthBlock">
      <div className="image" />
      <div className='paragraph'>
        <div className='title'>DOLOR SIT AMET</div>
        <div className='content'>
          Dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          <p />
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          <p />
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

        </div>
        <div className='actions'>
          <DefaultButton>DefaultButton</DefaultButton>
        </div>
      </div>
    </animated.div>
  )
}