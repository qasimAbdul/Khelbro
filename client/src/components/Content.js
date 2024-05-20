import React, { useContext, useEffect, useState } from 'react'
import "./style/content.css"
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import { NavLink, useNavigate } from 'react-router-dom';
import { userValid } from '../services/Apis';
import { LoginContext } from './ContextProvider/Context';


const Content = () => {

  const {loginData, setLoginData} = useContext(LoginContext)
  console.log(loginData);

  const navigate = useNavigate()

  const dashboardValid = async()=>{
    const token = localStorage.getItem("userdbtoken")

    // console.log(token);

    // const config = {
    //   token
    // }

    console.log(token);

    const response = await userValid(token)
    console.log(response);

    if(response.status == 400 || !response){
      console.log("error");
      // navigate("")
    }else{
      console.log("user verify");
      setLoginData(response)
      navigate("/")
    }

  }

  useEffect(()=>{
    dashboardValid()
  },[])

  const [open, setOpen] = useState(false);

  return (
    <>
    
      <div className="inputBox" style={{ width: "30.8rem", }}>
        <div className="box1" >
          How to win money?
        
        <div className="video_help">VIDEO HELP</div>
        </div>
      </div>
      <div className="inputBox1" style={{ padding: "1rem 0.8rem 0.5rem 0" }}>
        <Stack sx={{ width: '93%' }} spacing={2}>

          <Alert severity="warning" style={{ fontSize: "0.71rem", fontWeight: "500", padding: "0.6rem 1rem", color: "#2c2c2c", }}>Notice: KhelBro does not charge a <b>28% GST</b> on deposits. To learn more,<br />
            <span>click here.</span>
          </Alert>
        </Stack>
      </div>
      <div className="our_game">
        Our Games
      </div>
      <div className="game_section ">
        <img className="img_1" src="./global-purple-battleIcon.png" alt="" /><span>is for Battles and</span>
        <img className="img_2" src="./global-blue-tournamentIcon.png" alt="" /><span className='trn'>is for Tournaments. <b>Know more here.</b></span>

      </div>

      {/* Cards */}

      {/* card_1 */}
      <div className="game_cards">
      <Card style={{ width: '13rem'}}>
      <Card.Img variant="top" src="./mortalkombat1-1684430065700.jpg" style={{height:"10.5rem"}}/>
      <Card.Body>
        <img src="./global-purple-battleIcon.png" alt="" style={{width:"1.25rem", position:"absolute", top:"9.8rem", left:"5.8rem"}}/>
        <Card.Title className='title'>Mortal Kombat</Card.Title>
      </Card.Body>
    </Card>

    {/* card_2 */}
    <Card style={{ width: '13rem'}}>
      <Card.Img variant="top" src="./mortalkombat1-1684430065700.jpg" style={{height:"10.5rem"}}/>
      <Card.Body>
        <img src="./global-purple-battleIcon.png" alt="" style={{width:"1.25rem", position:"absolute", top:"9.8rem", left:"5.8rem"}}/>
        <Card.Title className='title'>Mortal Kombat</Card.Title>
      </Card.Body>
    </Card>

    {/* card_3 */}
    <Card style={{ width: '13rem', marginTop:"2rem"}}>
      <Card.Img variant="top" src="./mortalkombat1-1684430065700.jpg" style={{height:"10.5rem"}}/>
      <Card.Body>
        <img src="./global-purple-battleIcon.png" alt="" style={{width:"1.25rem", position:"absolute", top:"9.8rem", left:"5.8rem"}}/>
        <Card.Title className='title'>Mortal Kombat</Card.Title>
      </Card.Body>
    </Card>

    {/* card_4 */}
    <Card style={{ width: '13rem',marginTop:"2rem"}}>
      <Card.Img variant="top" src="./mortalkombat1-1684430065700.jpg" style={{height:"10.5rem"}}/>
      <Card.Body>
        <img src="./global-purple-battleIcon.png" alt="" style={{width:"1.25rem", position:"absolute", top:"9.8rem", left:"5.8rem"}}/>
        <Card.Title className='title'>Mortal Kombat</Card.Title>
      </Card.Body>
    </Card>
      </div>

      <section className='footer' style={{maxWidth:"483px"}}>
      <hr style={{color:"#959595", margin:"0", height:"1px"}}/>
        <div className="trans d-flex align-items-center" style={{padding:"1.5rem 1.3rem", backgroundColor:"#fafafa", cursor:"pointer"}}
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        >
        <div className="logo_name d-flex align-items-center" style={{width:"26rem",}}>
        <img src="./Mortal Kombat logo.png" alt="" style={{width:"4.3rem"}}/>
        <img src="./Mortal Kombat name logo.png" alt="" style={{width:"10rem",}}/>
        
        
        <div onClick={() => setOpen(!open)} className="text"  style={{fontSize:"0.9rem", padding:"0 0.3rem", color:"rgb(149, 149, 149)"}}>
        {!open?". Terms, Privacy, Supports":""
        }
        </div>
        
        </div>

        {/* expandmore and expandless */}
        <div onClick={() => setOpen(!open)} className="expand d-flex align-items-center justify-content-center" style={{marginLeft:"1rem", color:"#959595"}}>
        {open?
          <i class="fa-solid fa-angle-up"></i>:
          <i class="fa-solid fa-angle-down"></i>
        }
        </div>

        </div>
      
      <Collapse in={open}>
        <div id="example-collapse-text" style={{color:"rgb(149, 149, 149)",fontSize:"0.9rem", backgroundColor:"#fafafa"}}>
          <table >
            <tr >
              <NavLink to='/term-condition' style={{textDecoration:"none",color:"rgb(149, 149, 149)"}}><td >Terms & Condition</td></NavLink>
              <td >Privacy Policy</td>
            </tr>

            <tr>
              <td >Refund/Cancellation Policy</td>
              <td >Contact Us</td>
            </tr>

            <tr>
              <td >Responsible Gaming</td>
              <td >Platform Commission</td>
            </tr>

            <tr>
              <td >TDS Policy</td>
              <td >GST Policy</td>
            </tr>
          </table>
        </div>
      </Collapse>
      <hr style={{color:"#959595", margin:"0", height:"1px"}}/>
        
        <div className="business" style={{padding:"1.5rem 1.3rem", backgroundColor:"#fafafa", color:"#959595"}}>
          <b style={{fontSize:"0.9rem",fontWeight:"500"}}>Our Business & Products</b> <br />
          <br />
          <p style={{margin:"0",fontSize:"0.7rem"}}>We are an HTML5 game-publishing company and our mission is to make accessing games fast and easy by removing the friction of app-installs.</p>
          <br />
          <p style={{margin:"0",fontSize:"0.7rem"}}>KhelBro is a skill-based real-money gaming platform accessible only for our users in India. It is accessible on <span>https://www.khelbro.com.</span> On KhelBro, users can compete for real cash in Tournaments and Battles. They can encash their winnings via popular options such as Paytm Wallet, Amazon Pay, Bank Transfer, Mobile Recharges etc.</p>

          <br />
          <b style={{fontSize:"0.9rem",fontWeight:"500"}}>Our Games</b>
          <br />
          <p style={{margin:"0",fontSize:"0.7rem"}}>KhelBro has a wide-variety of high-quality, premium HTML5 games. Our games are especially compressed and optimised to work on low-end devices, uncommon browsers, and patchy internet speeds.</p>
          <br />
          <p style={{margin:"0",fontSize:"0.7rem"}}>We have games across several popular categories: Arcade, Action, Adventure, Sports & Racing, Strategy, Puzzle & Logic. We also have a strong portfolio of multiplayer games such as Ludo, Chess, 8 Ball Pool, Carrom, Tic Tac Toe, Archery, Quiz, Chinese Checkers and more! Some of our popular titles are: Escape Run, Bubble Wipeout, Tower Twist, Cricket Gunda, Ludo With Friends. If you have any suggestions around new games that we should add or if you are a game developer yourself and want to work with us, don't hesitate to drop in a line at <span>info@khelbro.com</span>!</p>
        </div>
      </section>


    </>
  )
}

export default Content