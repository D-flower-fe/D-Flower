import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/bouquet">꽃다발</Link>
        </li>
        <li>
          <Link to="/today">당일배송</Link>
        </li>
        <li>
          <Link to="/weekly">정기배송</Link>
        </li>
      </ul>
    </>
  );
};

export default Header;