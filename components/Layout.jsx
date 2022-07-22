import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';
import Login from './Login';
import { useStateContext } from '../context/StateContext';

const Layout = ({ children }) => {
  const { user } = useStateContext()
  {if(!user)
    return( <Login />
  )}
  return (
    
      <div className="layout">
      <Head>
        <title>eGitangu eCommerce Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout