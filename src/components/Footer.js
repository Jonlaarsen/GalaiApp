import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="info">
        <p>Teatertorget</p>
        <p>info@restauranggalai.se</p>
        <p>0470-524144</p>
      </div>

      <img
        className="info-logo"
        alt=""
        src="https://restauranggalai.se/static/media/logo-white.fdf188cfaa38d9b5d4fa33469bddd9f0.svg"
      />

      <div className="info">
        <p> Må-Fr: 11:30-14, 16:30-sent</p>
        <p> Lördag: 12:00-sent</p>
        <p> Söndag: Stängt</p>
      </div>
    </div>
  );
};

export default Footer;
