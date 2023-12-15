import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 0'}}>
      <h4>LOGO</h4>
      <div>
        <ul>
          <li>
            <NavLink className={({isActive}) => isActive ? 'active_nav' : ''} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? 'active_nav' : ''} to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? 'active_nav' : ''} to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
