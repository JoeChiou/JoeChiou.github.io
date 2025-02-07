import { animated, useInView, useSpring } from 'react-spring';
import { DefaultButton } from '../../../components';
import './style.css';

export const Block2 = () => {
  const [ref, inView] = useInView({ amount: 0.3, });
  const fadeIn = useSpring({
    triggerOnce: true,
    opacity: inView ? 1 : 0,
    config: { duration: inView ? 600 : 0, once: true, easing: (t) => t * t * t },
  });

  return (
    <animated.div ref={ref} style={fadeIn} className="block secondBlock">
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
        <div className='summary'>
          <span>
            <div className='number'>115%</div>
            <div className='topic'>VERO EST</div>
          </span>
          <span>
            <div className='number'>1245</div>
            <div className='topic'>AT VERO APS</div>
          </span>
          <span>
            <div className='number'>30K</div>
            <div className='topic'>ACCUSAM ET</div>
          </span>
        </div>
        <DefaultButton>DefaultButton</DefaultButton>
      </div>
    </animated.div>
  )
}