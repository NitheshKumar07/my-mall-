import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from './CartProvider'

const Navbar = () => {
  const { cartItems } = useCart();

  const navigate = useNavigate();
  const reachToCart = () => {
    navigate('/seecart');
  }
  const reachToWishlist = () => {
    navigate('/wishlist');
  }
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header>
    <div className="nav-bar">
      <Link to='/' id='mall-logo'>Mall</Link>

      <div className="category">
        <a href='#mens-womens-shopping' className="cat2 cat-a">fashion</a>
        <a href="#" className="cat3 cat-a">mobiles & laptops</a>
        <a href="#" className="cat5 cat-a">gaming</a>
      </div>
      <div className="search-bar">
        <button><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg></button>
        <input className="s-bar" type="text" placeholder="Search Products" />
      </div>
      <div className="icons">
        <div className="icon cart-svg" onClick={reachToCart}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="black"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" /></svg>
          <p id='bagtitle'>Cart</p>
          <div><span id='cartCount' >{cartItems.length}</span></div></div>

        <div className="icon" onClick={reachToWishlist}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="black"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" /></svg>
          <p id='wishlisttitle'>Wishlist</p></div>

        <div className="icon profileIcon">
          <ul className='profileDropdown'>
            <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="black"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" /></svg>
              <p>Profile</p></li>
            <ul className='listDropdown'>
              <li><button className='loginDropdown'>Log out</button></li>
              {/* <li><button className='loginDropdown'>Login</button></li> */}
            </ul>
          </ul>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Navbar