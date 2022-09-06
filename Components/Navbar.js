import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className='Navbar'>
          <Link to="/"> Home </Link>
          <Link to="/profile"> Profile </Link>
          <Link to="/contact"> Contact </Link>
        </div>
    )
};
