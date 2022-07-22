import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping, AiOutlineHome } from 'react-icons/ai'
import { HiOutlineLogout } from 'react-icons/hi'
import Avatar from 'react-avatar';
import { Cart } from './';
import { useStateContext} from '../context/StateContext';
import Login from './Login';

const Navbar = () => {
  const { user, setUser, showCart, setShowCart, totalQuantities } = useStateContext();
  const handleLogout = () => {
    setUser('')
    localStorage.setItem('user', '')
    return(
      <Login />
    )
  }
  let usr = JSON.parse(user)
  return (
    <div className="navbar-container">
      <p className="logo">
      <Link href="/">
        <AiOutlineHome size={30}/>
      </Link>
      </p>
      <p className='logo'>Welcome, {usr.name}
        <Avatar style={{margin:'10px'}} name={usr.name} size="50" round={true}/>
        <HiOutlineLogout style={{pointer:'cursor'}} onClick={handleLogout} size={30}/>
        Logout
      </p>
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)} >
        <AiOutlineShopping size={50} />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  )
}

export default Navbar