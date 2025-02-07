import './style.css';

export const Subscribe = () => {
  return (
    <div className='subscribe'>
      <div className='title'>
        Subscribe
        <div className='subTitle'>Stay up to date with our latest news and products</div>
      </div>
      <div className='textInput'>
        <div className='inputer'>
          <div>Email</div>
          <input placeholder='Enter your email' />
        </div>
        <button>Subscribe</button>
      </div>
    </div>
  )
}