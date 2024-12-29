import React from "react";
import "./style.css"
const Home = () => {
  return (

    <div className="navbar">
      <div className="navbar-logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS66Q9MARDvQFojhQmhBZPXCMNXyHFBb2HEpw&splaceholder-logo.png" alt="Logo" />
        <span>KKPHIM</span>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Tìm kiếm phim..." />
      </div>
      <div className="navbar-menu">
        <a href="#">Phim Bộ</a>
        <a href="#">Phim Lẻ</a>
        <a href="#">TV Shows</a>
        <a href="#">Hoạt Hình</a>

      </div>

    </div>
  )
};


export default Home;