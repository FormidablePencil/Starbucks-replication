import React from 'react';
import {Link} from "gatsby"

const NavbarLinks = () => {
  return (
    <div className="hidden md:flex flex-warp uppercase justify-center tracking-widest text-gray-900 text-sm">
      <div className="px-4 py-3"><Link to="/">Coffee</Link></div>
      <div className="px-4 py-3"><Link to="/">menu</Link></div>
      <div className="px-4 py-3"><Link to="/">Coffeehouse</Link></div>
      <div className="px-4 py-3"><Link to="/">social impact</Link></div>
      <div className="px-4 py-3"><Link to="/">starbucks rewards</Link></div>
      <div className="px-4 py-3"><Link to="/">stories</Link></div>
      <div className="px-4 py-3"><Link to="/">gift cards</Link></div>
    </div>
  );
};

export default NavbarLinks;