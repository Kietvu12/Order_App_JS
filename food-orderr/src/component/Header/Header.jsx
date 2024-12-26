import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>AYA Food</h2>
        <p>Khi cuộc sống ngày càng hối hả, con người dần nhận ra rằng sức khỏe và tinh thần chỉ có thể thực sự bền vững khi trở về với những giá trị tự nhiên. Chính trong dòng chảy này, AYA Food ra đời như một lời nhắc nhở dịu dàng về việc yêu thương bản thân và nuôi dưỡng cơ thể bằng những thực phẩm thuần chay, tự nhiên và lành mạnh.
        </p>
        <a href='/menu'><button>Xem thêm</button></a>
      </div>
    </div>
  )
}

export default Header