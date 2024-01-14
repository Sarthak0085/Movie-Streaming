import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import MobileFooter from './Footer/MobileFooter';

interface Props{
  children: React.ReactNode;
}

const Layout = ({children}: Props) => {
  return (
      <div className='bg-main text-white'>
          <Navbar />
          {children}
      <Footer />
      {/* Mobile footer  */}
      <MobileFooter />
      </div>
  )
}

export default Layout