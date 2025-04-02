import React, { useState } from 'react';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:service@truesenseworld.com?subject=${formData.subject}&body=姓名：${formData.name}%0D%0A電話：${formData.phone}%0D%0AEmail：${formData.email}%0D%0A%0D%0A主旨：${formData.subject}%0D%0A%0D%0A訊息內容：%0D%0A${formData.message}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <h2>聯絡我們</h2>
        <div className="contact-info">
          <div className="info-item">
            <h3>公司資訊</h3>
            <p>地址：台南市仁德區文華路二段326號</p>
            <p>電話：(06)366-0008</p>
            <p>傳真：(06)366-0018</p>
            <p>Email：service@truesenseworld.com</p>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d918.5776436059089!2d120.2311695284786!3d22.93878649869662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e750a13b39219%3A0xe7f7d7177d514952!2z5Yid5LiK55-z6IKh5Lu95pyJ6ZmQ5YWs5Y-4!5e0!3m2!1szh-TW!2stw!4v1743039009493!5m2!1szh-TW!2stw"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="公司位置地圖"
              ></iframe>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">姓名</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">電話</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">主旨</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">訊息內容</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">送出表單</button>
        </form>
      </div>
    </section>
  );
}

export default ContactPage; 