import React, { useEffect } from 'react'
import { userValid } from '../services/Apis'

const Dashboard = () => {

    const dashboardValid = async()=>{
        const token = localStorage.getItem("userdbtoken")

        // console.log(token);
    
        // const config = {
        //   token
        // }

        console.log(token);
    
        const response = await userValid(token)

    
        console.log(response);
    
      }
    
      useEffect(()=>{
        dashboardValid()
      },[])
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard