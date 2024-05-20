import React from 'react'
import Header from './Header'
// import Content from './Content'
// import { userValid } from '../services/Apis'
// import Termscondition from './Termscondition'
// import Dashboard from './Dashboard'
// import Error from './Error'
// import Wallet from './Wallet'

const Layout = ({children}) => {

  
  return (
    <>

    <Header/>
    
    {children}
    
    {/* <Content /> */}
    

    
    {/* <Dashboard /> */}
    
    

    </>
  )
}

export default Layout