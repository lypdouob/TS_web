import React from 'react';

function AboutPage() {
  return (
    <section id="about" >
      <h2>關於初上石</h2>
      <p>
        本公司成立於2019年，由一群黑科技愛好者所成立，致力於穿越體驗系統的開發。<br />
        體驗者搭乘本公司產品，透過我們的系統以第一人稱視角穿越到夢幻國度進行冒險<br />
        <br />
        核心價值：<br />
          為客戶提供前所未有的體驗，實現夢想。<br />
        <br />
        1. 具360度旋轉能力之VR體驗椅販售「一台體感椅就是一個遊樂園」<br />
        2. 多種規格體感機台<br />
        3. 微縮穿越體驗館<br />
        4. VR軟硬整合技術服務：提供VR軟體與體感椅連結互動的技術整合服務<br /><br />
      </p>
      <div className='video_container'>
        <iframe 
            className='vidoe_frame'
            width="560"
            height="315" 
            src="https://www.youtube-nocookie.com/embed/FDcW4Cr59OQ?si=XbzsNWkwf2IrBPRe&amp;controls=0" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen 
          >
          </iframe>
      </div>
    </section>
  );
}

export default AboutPage; 