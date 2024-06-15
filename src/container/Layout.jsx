import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Content from './Content'

const Layout = () => {
    return (
        <div className='w-full h-auto'>
            <Navbar />
            <Content />
            <Footer/>
        </div>
    )
}

export default Layout