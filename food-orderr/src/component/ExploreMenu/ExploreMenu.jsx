import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Khám Phá</h1>
            <p className='explore-menu-text'>Nhìn lại những ngày đầu, ý tưởng hình thành AYA Food được thắp sáng khi nhận ra rằng ngày càng nhiều người tìm kiếm thực phẩm sạch, lành mạnh nhưng lại gặp khó khăn trong việc tiếp cận những sản phẩm đáng tin cậy. Chúng tôi muốn tạo nên một nơi mà bất kỳ ai cũng có thể tin tưởng, nơi không chỉ cung cấp thực phẩm thuần chay chất lượng mà còn là nơi truyền cảm hứng sống khỏe và sống xanh. </p>
            <div className="explore-menu-lists">
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className='explore-menu-list-item'>
                            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu