import React from 'react';
import { AiFillLinkedin, AiOutlineGithub} from 'react-icons/ai';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Eric's Audio Shop - All rights reserverd</p>
      <p className="icons">
        <Link href="https://linkedin.com/in/ericgitangu">
          <AiFillLinkedin />
        </Link>  
        <Link href="https://github.com/ericgitangu" target='_blank'>
          <AiOutlineGithub />
        </Link>  
      </p>
    </div>
  )
}

export default Footer