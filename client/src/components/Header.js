import React, { useContext, useState } from 'react'
// import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import "./style/style.css"
import { LoginContext } from './ContextProvider/Context';
import { userValid } from '../services/Apis';

const Header = () => {

  const [show, setShow] = useState(false)
  // setShow(show)

  const navigate = useNavigate()

  const {loginData, setLoginData} = useContext(LoginContext)
  console.log(loginData);

  // Wallet Valid by click on (Related to cash deposit or withdrawal)
  // const walletValid = async()=>{
  //   const token = localStorage.getItem("userdbtoken")

  //   const response = await userValid(token)
  //   console.log(response);

  //   if(response.status === 200){
  //     console.log("user verify");
  //     navigate("/wallet")
  //   }else{
  //     console.log(response.response.data.message);
  //     // alert(response.response.data.message)
  //     // setLoginData(response)
  //     navigate("/login")
  //   }
  // }

  // const profileValid = async()=>{
  //   const token = localStorage.getItem("userdbtoken")

  //   const response = await userValid(token)
  //   console.log(response);

  //   if(response.status === 200){
  //     console.log("user verify");
  //     navigate("/profile")
  //   }else{
  //     console.log(response.response.data.message);
  //     // alert(response.response.data.message)
  //     // setLoginData(response)
  //     navigate("/login")
  //   }
  // }

  return (
    <>
    
    <div className='header' style={{maxWidth:"483px",position:"fixed",top:"0",left:"0", zIndex:"2"}}>
    {show?
    <div className="sidenav" onClick={()=>setShow(!show)} style={{width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,.87)",position:"fixed",top:0,right:0,left:0,zIndex:9,opacity:1,transition:"opacity .25s cubic-bezier(0,0,.3,1)"}}>
      <div className="sidnavDetails" style={{position:"fixed",top:0,bottom:0,backgroundColor:"#fff",zIndex:10,maxWidth:"300px",width:"70%"}}>
      
      {/* My Profile */}
      <NavLink to="/profile"  style={{textDecoration:"none",color:"#212529"}}>
      <div className="sideNav-option d-flex align-items-center" style={{position:"relative",cursor:"pointer",width:"100%",height:"5rem",padding:"20px"}}>
      <div className="img">
        <img src="/man.png" width="40px" alt="" />
        </div>
        <h4 style={{fontSize:"0.95rem",margin:"0 0 0 1.2rem"}}>My Profile</h4>
        <i class="fa-solid fa-angle-right" style={{position:"absolute",right:"1rem"}}></i>
        <div className="nav_divider" style={{position:"absolute",right:"0",left:"4.5rem",bottom:"0",backgroundColor:"#ededed",height:"0.1rem"}}></div>

      </div>
      </NavLink>

      {/* Win Cash */}
      <div className="sideNav-option d-flex align-items-center" style={{position:"relative",cursor:"pointer",width:"100%",height:"5rem",padding:"20px"}}>
      <div className="img">
        <img src="/game-controller.png" width="45px" alt="" />
        </div>
        <h4 style={{fontSize:"0.95rem",margin:"0 0 0 1.2rem"}}>Win Cash</h4>
        <i class="fa-solid fa-angle-right" style={{position:"absolute",right:"1rem"}}></i>
        <div className="nav_divider" style={{position:"absolute",right:"0",left:"4.5rem",bottom:"0",backgroundColor:"#ededed",height:"0.1rem"}}></div>
        
      </div>

      {/* My Wallet */}
      <div className="sideNav-option d-flex align-items-center" style={{position:"relative",cursor:"pointer",width:"100%",height:"5rem",padding:"20px"}}>
      <div className="img">
        <img src="/wallet.png" width="45px" alt="" />
        </div>
        <h4 style={{fontSize:"0.95rem",margin:"0 0 0 1.2rem"}}>My Wallet</h4>
        <i class="fa-solid fa-angle-right" style={{position:"absolute",right:"1rem"}}></i>
        <div className="nav_divider" style={{position:"absolute",right:"0",left:"4.5rem",bottom:"0",backgroundColor:"#ededed",height:"0.1rem"}}></div>
        
      </div>

      {/* Game History */}
      <div className="sideNav-option d-flex align-items-center" style={{position:"relative",cursor:"pointer",width:"100%",height:"5rem",padding:"20px"}}>
      <div className="img">
        <img src="/award.png" width="45px" alt="" />
        </div>
        <h4 style={{fontSize:"0.95rem",margin:"0 0 0 1.2rem"}}>Game History</h4>
        <i class="fa-solid fa-angle-right" style={{position:"absolute",right:"1rem"}}></i>
        <div className="nav_divider" style={{position:"absolute",right:"0",left:"4.5rem",bottom:"0",backgroundColor:"#ededed",height:"0.1rem"}}></div>
        
      </div>

      {/* Transaction History */}
      <div className="sideNav-option d-flex align-items-center" style={{position:"relative",cursor:"pointer",width:"100%",height:"5rem",padding:"20px"}}>
      <div className="img">
        <img src="/history.png" width="37px" alt="" />
        </div>
        <h4 style={{fontSize:"0.95rem",margin:"0 0 0 1.2rem"}}>Transaction History</h4>
        <i class="fa-solid fa-angle-right" style={{position:"absolute",right:"1rem"}}></i>
        <div className="nav_divider" style={{position:"absolute",right:"0",left:"4.5rem",bottom:"0",backgroundColor:"#ededed",height:"0.1rem"}}></div>
        
      </div>

      {/* Refer & Earn */}
      <div className="sideNav-option d-flex align-items-center" style={{position:"relative",cursor:"pointer",width:"100%",height:"5rem",padding:"20px"}}>
      <div className="img">
        <img src="/add-user.png" width="45px" alt="" />
        </div>
        <h4 style={{fontSize:"0.95rem",margin:"0 0 0 1.2rem"}}>Refer & Earn</h4>
        <i class="fa-solid fa-angle-right" style={{position:"absolute",right:"1rem"}}></i>
        <div className="nav_divider" style={{position:"absolute",right:"0",left:"4.5rem",bottom:"0",backgroundColor:"#ededed",height:"0.1rem"}}></div>
        
      </div>

      {/* Notification */}
      <div className="sideNav-option d-flex align-items-center" style={{position:"relative",cursor:"pointer",width:"100%",height:"5rem",padding:"20px"}}>
      <div className="img">
        <img src="/notification-bell.png" width="35px" alt="" />
        </div>
        <h4 style={{fontSize:"0.95rem",margin:"0 0 0 1.2rem"}}>Notification</h4>
        <i class="fa-solid fa-angle-right" style={{position:"absolute",right:"1rem"}}></i>
        <div className="nav_divider" style={{position:"absolute",right:"0",left:"4.5rem",bottom:"0",backgroundColor:"#ededed",height:"0.1rem"}}></div>
        
      </div>

      {/* Support*/}
      <div className="sideNav-option d-flex align-items-center" style={{position:"relative",cursor:"pointer",width:"100%",height:"5rem",padding:"20px"}}>
      <div className="img">
        <img src="/question.png" width="35px" alt="" />
        </div>
        <h4 style={{fontSize:"0.95rem",margin:"0 0 0 1.2rem"}}>Support</h4>
        <i class="fa-solid fa-angle-right" style={{position:"absolute",right:"1rem"}}></i>
        <div className="nav_divider" style={{position:"absolute",right:"0",left:"4.5rem",bottom:"0",backgroundColor:"#ededed",height:"0.1rem"}}></div>
        
      </div>

      </div>
      </div>:""
      }
      <div className="left" style={{width:"30.8rem", }}>
      <Navbar bg="white" data-bs-theme="light" style={{height:"4rem",boxShadow:"0 0.3rem 0.4rem 0rem rgba(0,0,0,.06)",}}>
        <Container>
          
          <Nav className="me-auto " >
          {loginData.data ?
          <Nav.Link>
          
            <div className="sideNav" onClick={()=>setShow(!show)}>
            <i class="fa-solid fa-bars-staggered" style={{lineHeight:"2rem"}}></i>
            </div>
          
          </Nav.Link>:""
        }

        <Nav.Link>
            <NavLink to="/">
              <img src="./khelbro.png" alt="" style={{width:"2.3rem"}}/>
            </NavLink>
            </Nav.Link>

          
          
            {/* //Related to cash deposit or withdrawal */}
            {loginData.data ?
            <div className="menu_items"  style={{position:"absolute",right:"1rem"}}>
            <Nav.Link >
            <NavLink to="/wallet" style={{textDecoration:"none"}}>
             <div className="wallet" style={{textDecoration:"none", borderRadius:"4px",position:'relative',display:"flex", alignItems:"center",width:"6.5rem", height:"2.2rem",border:"1px solid #ededed", backgroundColor:"#f8f8f8"}}>
             <div className="cash" style={{position:"relative",overflow:"hidden"}}>
              <img src="./rupee.png" alt="" style={{width:"20px", marginLeft:"0.5rem"}} />
             </div>
             
             <div className="money_box mt-1 " style={{display:"fles",alignItems:"center", justifyContent:"center",marginLeft:"0.5rem"}}>
              <div className="amount  " style={{fontSize:"0.7rem",color:"#959595",fontWeight:"400"}}>CASH</div>
              <div className="amount_no" style={{position:"relative", bottom:"0.2rem",fontSize:"0.92rem",color:"#2c2c2c",fontWeight:"900"}}>0</div>
              
             </div> 
             <div className="money_add" style={{position:"absolute", right:"0",top:"0",bottom:"0",display:"flex",alignItems:"center",justifyContent:"center",textDecoration:"none",width:"1.2rem",height:"100%",backgroundColor:"#ededed",color:"#acaaaa"}}>
             <i class="fa-solid fa-plus"></i>
             </div>
              </div> 
              </NavLink>
              </Nav.Link>
            </div>:
            <div className="signup_login">
           <Nav.Link >
           <NavLink to='/login'>  <button className='signup'>SIGNUP</button></NavLink>
            </Nav.Link> 
            <Nav.Link>
            <NavLink to='/login'>  <button className='login'>LOGIN</button></NavLink>
            </Nav.Link>
            </div>
            }
          </Nav>
        </Container>
        
        
      </Navbar>
      
      </div>
      <div className="right"></div>

      
    </div>
    <div className="right_img"></div>
      

     
    </>

  )
}

export default Header