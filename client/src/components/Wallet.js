import React, { useContext, useEffect, useState } from 'react'
import Rightimg from './Rightimg'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { userValid } from '../services/Apis';
// import { LoginContext } from './ContextProvider/Context';


const Wallet = () => {

  // const {loginData, setLoginData} = useContext(LoginContext)
  // console.log(loginData);

  const navigate = useNavigate()

  const walletValid = async()=>{
    const token = localStorage.getItem("userdbtoken")

    const response = await userValid(token)
    console.log(response);

    if(response.status === 200){
      console.log("user verify");
      navigate("/wallet")
    }else{
      console.log(response.response.data.message);
      // alert(response.response.data.message)
      // setLoginData(response)
      navigate("/login")
    }
  }

  useEffect(()=>{
    walletValid()
  },[])

  const [hover, setHover] = useState(false)
  return (
    <>
      <div className="main_area bg-light" style={{ paddingTop: "4rem", maxWidth: "483px" }}>
        <div className="order_history" style={{ padding: "30px 25px 30px 25px", backgroundColor: "#f8f9fa" }}>
          <div className="order" style={{ cursor: "pointer", display: "flex", alignItems: "center", border: "1px solid #e0e0e0", height: "4.5rem", backgroundColor: "#fff", borderRadius: "5px" }}>
            <i class="fa-solid fa-clock-rotate-left" style={{ marginLeft: "1.5rem", fontSize: "1.8rem", color: "#6c757d" }}></i>
            <div className="clock_history w-100" onMouseEnter={() => setHover(!hover)} onMouseLeave={() => setHover(!hover)} style={{ textDecoration: hover ? "underline" : "", marginLeft: "5rem", color: "#6c757d" }}>
              <span>Order History</span>
            </div>
          </div>
        </div>
        <div className="divider-x" style={{ width: "100%", backgroundColor: "#f1f1f1", height: "0.6rem" }}></div>
        <div className="wallet_cards" style={{ padding: "30px 25px 30px 25px" }}>
          <div className="wallet_card w-100">
            <Card style={{ width: '100%',marginBottom:"1rem" }}>
              <Card.Body>
                <Card.Title>
                <div className="title">
                <img src="./rupee.png" alt="" style={{ width: "25px" }} /> <span style={{marginLeft:"0.5rem"}}>₹0</span> 
                <button style={{fontWeight:"500",position:"absolute",right:"1rem",fontSize:"0.8rem",border:"1px solid #fff",padding:"10px 30px",borderRadius:"5px"}}>ADD CASH</button>
                </div> 
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">DEPOSIT CASH</Card.Subtitle>
                <Card.Text style={{marginTop:"2rem"}}>
                  Can be used to play Tournaments & Battles.
                  Cannot be withdrawn to Paytm or Bank.
                </Card.Text>
                
              </Card.Body>
            </Card>

            {/* Withdrawal cash */}
            <Card style={{ width: '100%',marginBottom:"1rem" }}>
              <Card.Body>
                <Card.Title>
                <div className="title">
                <img src="./rupee.png" alt="" style={{ width: "25px" }} /> <span style={{marginLeft:"0.5rem"}}>₹0</span> 
                <button style={{fontWeight:"500",position:"absolute",right:"1rem",fontSize:"0.8rem",border:"1px solid #fff",padding:"10px 30px",borderRadius:"5px"}}>ADD CASH</button>
                </div> 
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">DEPOSIT CASH</Card.Subtitle>
                <Card.Text style={{marginTop:"2rem"}}>
                  Can be used to play Tournaments & Battles.
                  Cannot be withdrawn to Paytm or Bank.
                </Card.Text>
                
              </Card.Body>
            </Card>

            {/* Playin games */}
            <Card style={{ width: '100%',marginBottom:"1rem" }}>
              <Card.Body>
                <Card.Title>
                <div className="title">
                <img src="./rupee.png" alt="" style={{ width: "25px" }} /> <span style={{marginLeft:"0.5rem"}}>₹0</span> 
                <button style={{fontWeight:"500",position:"absolute",right:"1rem",fontSize:"0.8rem",border:"1px solid #fff",padding:"10px 30px",borderRadius:"5px"}}>ADD CASH</button>
                </div> 
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">DEPOSIT CASH</Card.Subtitle>
                <Card.Text style={{marginTop:"2rem"}}>
                  Can be used to play Tournaments & Battles.
                  Cannot be withdrawn to Paytm or Bank.
                </Card.Text>
                
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <Rightimg />
    </>
  )
}

export default Wallet