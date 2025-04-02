import React from 'react';
import fb from '../assets/icon/facebook.png';
import ig from '../assets/icon/instagram.png';
import yt from '../assets/icon/youtube.png';


function Footer() {
  return (
    <section id="footer">
      <p>
        聯絡方式 : service@truesenseworld.com<br />
        公司地址 : 台南市仁德區文華路二段326號<br />
        電話 : (06)366-0008 傳真 : (06)366-0018<br />
        True Sense Technology Co. Ltd. © All Rights Reserved.
      </p>
      <div className="img_container">
        <a href="https://www.facebook.com/truesenseworld">
          <img src={fb} alt="facebook" />
        </a>
        <a href="https://www.instagram.com/truesenseworld">
          <img src={ig} alt="facebook" />
        </a>
        <a href="https://www.youtube.com/@truesenseworld">
          <img src={yt} alt="facebook" />
        </a>
      </div>
    </section>
  );
}

export default Footer;