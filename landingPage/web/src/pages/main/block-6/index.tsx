import { useInView, useSpring, animated } from 'react-spring';
import { DefaultButton } from '../../../components';
import { Card } from './card';
import './style.css';

export const Block6 = () => {
  const [ref, inView] = useInView({ amount: 0.1 });
  const fadeIn = useSpring({
    triggerOnce: true,
    opacity: inView ? 1 : 0,
    config: { duration: inView ? 600 : 0, once: true, easing: (t) => t * t * t },
  });

  return (
    <animated.div ref={ref} style={fadeIn} className="block sixthBlock">
      <div className='paragraph'>
        <div className='title'>DOLOR SIT AMET</div>
        <div className='content'>
          Dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </div>
        <div className='cards'>
          <Card title='PRODUCT 1' content='Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis.' />
          <Card title='PRODUCT 2' content='Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis.' />
          <Card title='PRODUCT 3' content='Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis.' />
        </div>
        <div className='actions'>
          <DefaultButton>DefaultButton</DefaultButton>
        </div>
      </div>
    </animated.div >
  )
}