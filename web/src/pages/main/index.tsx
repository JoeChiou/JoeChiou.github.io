import { DefaultButton, GreyButton } from "../../components"
import { Block1 } from "./block-1";
import { Block2 } from "./block-2";
import { Block3 } from "./block-3";
import { Block4 } from "./block-4";
import { Block5 } from "./block-5";
import { Block6 } from "./block-6";
import { Subscribe } from "./subscribe";
import './style.css';

export const PageMain = () => {
  return (
    <>
      <header className="header">
        <img src='./images/logo.svg' className="logo" />
        <div className="contactButtons">
          <GreyButton>CONTACT US</GreyButton>
          <DefaultButton>DefaultButton</DefaultButton>
        </div>
      </header>
      <div className="container">
        <Block1 />
        <Block2 />
        <Block3 />
        <Block4 />
        <Block5 />
        <Block6 />
        <Subscribe />
      </div>
      <footer className="footer">
        <span>
          <img src='./images/logo.svg' className="logo" />
          <div className="mobile">
            <div className="text">Download TableTone's mobile app</div>
            <span>
              <a><img src={'/images/google_play.png'} style={{ width: '136px', height: '40px' }} /></a>
              <a><img src={'/images/apple_store.png'} style={{ width: '120px', height: '40px' }} /></a>
            </span>
          </div>
        </span>
        <span className="second">
          <div className="links">
            <a>About us</a>
            <a>Terms & Conditions</a>
            <a>FAQ</a>
            <a>Licenses</a>
            <a>Contact</a>
            <a>Privacy Statement</a>
          </div>
          <div className="social">
            <div className='text'>Follow us</div>
            <div className="socialIcon">
              <a className="facebook" />
              {/* <a className="socialLogo twitter" /> */}
              <a className="instagram" />
              <a className="discord" />
              <a className="youtube" />
            </div>
          </div>
        </span>
      </footer >
    </>

  )
}