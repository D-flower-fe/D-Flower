import React from 'react';

const Footer = () => {
  return (
    <>
      <div className ="person">
        <span>이소연</span>
        <span>이태지</span>
        <span>조보라</span>
      </div>
      <hr />
      <div class="copy-right">
        &copy;{ new Date().getFullYear() } Fast Campus KDT
      </div>
    </>
  );
};

export default Footer;