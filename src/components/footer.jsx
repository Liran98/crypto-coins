import React from 'react';

function Footer() {
    const date = new Date().getFullYear();
   


  return (
    <div>
    <footer>CopyRight &copy;{date}</footer>
    </div>
  )
}

export default Footer;