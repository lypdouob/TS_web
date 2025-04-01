import React, { useState } from 'react';

import xr360 from '../assets/xr360.png';
import theater from '../assets/theater.png';
import tinyworld from '../assets/tinyworld.jpg';

function ProductsPage() {
  const [activeProduct, setActiveProduct] = useState(null);

  const toggleProduct = (productId) => {
    setActiveProduct(activeProduct === productId ? null : productId);
  };

  return (
    <section id="product">
      <h2>產品介紹</h2>
      <div className="product_container">
        <div className="product_card" onClick={() => toggleProduct('XR360')}>
          <img src={xr360} alt="XR360" />
          <h3>XR360</h3>
          <p className="product_preview">
            360度虛擬實境，探索無限可能。<br /><br />
          </p>
        </div>
        
        <div className="product_card" onClick={() => toggleProduct('Theater')}>
          <img src={theater} alt="穿越式沉浸劇院" />
          <h3>穿越式沉浸劇院</h3>
          <p className="product_preview">
            結合劇情與實境，讓你身歷其境。<br /><br />
          </p>
        </div>
        
        <div className="product_card" onClick={() => toggleProduct('TinyWorld')}>
          <img src={tinyworld} alt="微縮世界" />
          <h3>微縮世界</h3>
          <p className="product_preview">
            細膩重現奇幻場景，觸手可及。<br /><br />
          </p>
        </div>
      </div>

      {activeProduct === 'XR360' && (
        <div className="product_details">
          <h3>XR360</h3>
          <div className="product_content">
            <img src={xr360} alt="XR360 詳細圖" />
            <div className="product_text">
              <p>
                XR360穿越體驗機是具360度旋轉功能之體驗椅。<br />
                標榜「一台體感椅就是一座遊樂園！」讓體驗者可以搭乘雲霄飛車穿越進入VR故事裡搭輕航機旅行、 潛入海底與魚共游、穿梭在火焰山的山谷天縫中...<br />
                讓眼睛與身體從特別的角度去看這個世界！<br />
                坐上遊樂園雲霄飛車，錄下全程，我們可以Copy到機台，讓體驗者再度體驗。<br />
                •全台唯一360°旋轉<br />
                •多款遊戲任君挑選<br />
                •操作容易、安全可靠<br />
                •占地小、適用各種場地<br />
              </p>
            </div>
            <div className='video_container'>
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube-nocookie.com/embed/e_BJdE-ItUc?si=qFyrt57qz2LgQieO&amp;controls=0" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
              </iframe>
            </div>
            <button onClick={() => setActiveProduct(null)}>返回</button>
          </div>
        </div>
      )}

      {activeProduct === 'Theater' && (
        <div className="product_details">
          <h3>穿越式沉浸劇院</h3>
          <div className="product_content">
            <img src={theater} alt="穿越式沉浸劇院詳細圖" />
            <div className="product_text">
              <p><br />
              針對團客設計的多人六軸體感座艙，應用在沉浸式體驗劇場。<br />
              以第一人稱視角隨著影片/動畫前行，隨路況而起伏顛簸，透過聲音、風(包含環境風與耳風)、煙霧、震臀與香氛營造，享受到更深的沉浸。<br />
              <br />
              • 六軸體感平台<br />
              • 周邊特效建置<br />
              • 多種規格(2.4.6.8.9.12人座)<br />
              • 擴充性佳、容易新增內容<br />
              </p>
              <button onClick={() => setActiveProduct(null)}>返回</button>
            </div>
            <div className='video_container'>
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube-nocookie.com/embed/8L5RqHv4WAw?si=uJTKmmqXaBdr512X&amp;controls=0" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
              </iframe>
            </div>
          </div>
        </div>
      )}

      {activeProduct === 'TinyWorld' && (
        <div className="product_details">
          <h3>微縮世界</h3>
          <div className="product_content">
            <img src={tinyworld} alt="微縮世界詳細圖" />
            <div className="product_text">
              <p><br />
              讓體驗者坐上六軸體感座艙，連結上初上石設計之系統，就可以穿越時空，進入到微縮世界。<br />
              在微縮世界裡，全是1/24縮小比例的微縮場景，可以建造模擬場域，將靜態的展示轉換成實體的活動，場地內可用低成本打造/擴充各式障礙關卡，來實現現實世界不容易打造的場景設施。
              </p>
              <button onClick={() => setActiveProduct(null)}>返回</button>
            </div>
            <div className='video_container'>
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube-nocookie.com/embed/hDxDibiS1jI?si=vLg4m7R1RL2RiSt5&amp;controls=0" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
              </iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProductsPage; 