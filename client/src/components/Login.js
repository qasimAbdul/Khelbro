import React, { useEffect, useState } from 'react'
// import "./style/style.css"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { sentOtpfunction, userVerify } from '../services/Apis';



const Login = () => {
  

  const [hover, setHover] = useState(false)

  const [isHover, setIsHover] = useState(false)

  const [open, setOpen] = useState(false);

  const [spinner, setSpinner] = useState(false)

  // const [number, setNumber] = useState("")
  const [email, setEmail] = useState("")

  const [otp, setOtp] = useState("")

  const [data, setData] = useState("")
  console.log(data);

  const [seconds, setSeconds] = useState(10)

  const navigate = useNavigate()

  


  // sendOtp
  const sendOtp = async(e)=>{
    e.preventDefault()

    if(email === ""){
      toast.error("Enter correct email", {
        hideProgressBar:true,
        autoClose:1000,
        position:"top-left",
        icon: ({theme, type}) => <i class="fa-solid fa-circle-exclamation" style={{color:"#FF190D", fontSize:"1.2rem"}}></i>,
        style:{backgroundColor:"#FDEDED", color:"#5F2120"}
      })
    }else if(!email.includes("@")){
      toast.error("Enter valid email", {
        hideProgressBar:true,
        autoClose:1000,
        position:"top-left",
        icon: ({theme, type}) => <i class="fa-solid fa-circle-exclamation" style={{color:"#FF190D", fontSize:"1.2rem"}}></i>,
        style:{backgroundColor:"#FDEDED", color:"#5F2120"}
      })
    }else{
      setSpinner(true)
      // navigate("/otp", {state:email})
      const data = {
        email:email
      }


      const response = await sentOtpfunction(data)
      console.log(response);
      setData(response)

      setSpinner(false)

      setOpen(true)

      // resendOtp()
      setSeconds(9)

      if(response.status === 200){
        setData(response.data.email)
        

      }
    }

    
    
  }

  const submit = async(e)=>{
    e.preventDefault()

    if(email===""){
      toast.error("Enter correct email", {
        hideProgressBar:true,
        autoClose:1000,
        position:"top-left",
        icon: ({theme, type}) => <i class="fa-solid fa-circle-exclamation" style={{color:"#FF190D", fontSize:"1.2rem"}}></i>,
        style:{backgroundColor:"#FDEDED", color:"#5F2120"}
      })
    }else if(!email.includes("@")){
      toast.error("Enter valid email", {
        hideProgressBar:true,
        autoClose:1000,
        position:"top-left",
        icon: ({theme, type}) => <i class="fa-solid fa-circle-exclamation" style={{color:"#FF190D", fontSize:"1.2rem"}}></i>,
        style:{backgroundColor:"#FDEDED", color:"#5F2120"}
      })
    }else if(otp===""){
      toast.error("OTP verification failed, Please enter correct OTP", {
        hideProgressBar:true,
        autoClose:1000,
        position:"top-left",
        icon: ({theme, type}) => <i class="fa-solid fa-circle-exclamation" style={{color:"#FF190D", fontSize:"1.2rem"}}></i>,
        style:{backgroundColor:"#FDEDED", color:"#5F2120", width:"27rem"}
      })
    }else if(!/[^a-zA-Z]/.test(otp)){
      toast.error("OTP verification failed, Please enter correct OTP", {
        hideProgressBar:true,
        autoClose:1000,
        position:"top-left",
        icon: ({theme, type}) => <i class="fa-solid fa-circle-exclamation" style={{color:"#FF190D", fontSize:"1.2rem"}}></i>,
        style:{backgroundColor:"#FDEDED", color:"#5F2120", width:"27rem"}
      })
    }else if(otp.length < 6){
      toast.error("OTP Length minimum 6 digit", {
        hideProgressBar:true,
        autoClose:1000,
        position:"top-left",
        icon: ({theme, type}) => <i class="fa-solid fa-circle-exclamation" style={{color:"#FF190D", fontSize:"1.2rem"}}></i>,
        style:{backgroundColor:"#FDEDED", color:"#5F2120", width:"27rem"}
      })
    }else{
      setSpinner(true)

      const data = {
        email:email,otp:otp
      }

      console.log(data);

    

      const response = await userVerify(data)

      console.log(response);

      if(response.status === 200){
        localStorage.setItem("userdbtoken", response.data.userToken)
        navigate("/")

      }else{
        toast.error(response.response.data.error, {
          hideProgressBar:true,
          autoClose:1000,
          position:"top-left",
          icon: ({theme, type}) => <i class="fa-solid fa-circle-exclamation" style={{color:"#FF190D", fontSize:"1.2rem"}}></i>,
          style:{backgroundColor:"#FDEDED", color:"#5F2120"}
        })
      }

      setSpinner(false)
    }
  }


  // mene isme resend OTP banaya hai, pehle email field submit krne ke baad OTP field bhi open sath mein countdown bhi start hojaye
  //uske liye mene email field "setSecond" mein (9) value pass kardiya aur pehle se jo initial value hai seconds ki wo "useState(10)" hai
  //aur resendOTP mein mene "setSeconds(10)" pass krdiya aur useEffect main mene usse stop kr rakhahai
  // jab ye run hoga to countdown start nahi hoga kuki mene stop kiya hai line no. 176 mein
  //jab email fill krke continue pe click karunga to setOpen(true) hojayega aur setSecond(9)
  //run hogi to isse email bhi send hojayega sath mein OTP field open hojayegi setOpen(true) ki wajah se
  //useEffect bhi chal jayega setOpen(true) ki wajah se uske baad resend OTP pe click karenge to
  // resendOTP function chal jayega
  const resendOtp = ()=>{
    setSeconds(10)
    
  }

  useEffect(()=>{
    if(open){
    const interval = setInterval(()=>{
      setSeconds(seconds - 1)

      if(seconds === 0){
        setSeconds(0)
        clearInterval(interval)
      }
    },800)
    return ()=>{
      clearInterval(interval)
    }
  }

  // generateimage()
  },[seconds])

  // const [profile,setProfile] = useState(pass)
  
    let pass=""
    const images = ["./man.png","./teen.png","./man2.png","./girl.png","./woman.png","./gamer.png","./avatar.png","./avatar1.png"]
     for(let index=0; index<images.length; index++){
    let char = Math.floor(Math.random() * images.length )
    pass = images[char]
    // const select_img = images[pass]
    
  }
  console.log(pass);
  // setProfile(pass)
  // console.log(profile);
  
  const [image,setImage] = useState(pass)
  // setImage()
  console.log(image);

  // const setProfile = (e)=>{
  //   setImage(pass)
  // }
  
  return (
    <>
      <div className="main" style={{ position: "relative", maxWidth: "483px", width: "100%", minHeight: "100%", backgroundColor: "#fff" }}>
        <div className="left_area" style={{ width: "100%", overflow: "hidden", backgroundColor: "transparent" }}>
          <div style={{ overflowY: "hidden" }}>
            <div className="splash" style={{ width: "100%", background: "linear-gradient(180deg,transparent -315px,#000 283.5px)", height: "100vh", position: "absolute", zIndex: "2", pointerEvents: "none" }}></div>
            <div className="splash-screen">
              <figure style={{ marginBottom: "1rem" }}>
                <img src="./Mortal Kombat logo.png" alt="" style={{ width: "100%" }} />
              </figure>
            </div>

          <NavLink to="/">  <div className="arrow d-flex justify-content-center align-items-center mx-auto " style={{ position: "absolute", top: "1.6rem", left: "2.45rem", width: "3.38rem", height: "2.68rem", border: "1px solid white", borderRadius: "0.3rem", cursor: "pointer", zIndex: "4" }}>
              <i class="fa-solid fa-arrow-left" style={{ fontSize: "1.3rem", color: "#fff" }}></i>
            </div>
            </NavLink>





            <div className="box position-absolute w-100  " style={{ top: "40%", display: "flex", alignItems: "center", flexDirection: "column", zIndex: "4" }}>
              <h4 style={{ marginBottom: "1.7rem", fontSize: "1.6rem", color: "#fff" }}>Sign in or Sign up</h4>
              <div className="profile" ></div>

              <div className="box_detail bg-white" style={{ borderRadius: "0.3125rem", width: "26rem", border: "1px solid white", padding: "1.2rem 1.6rem" }}>
                <InputGroup size="lg" >
                  <InputGroup.Text id="inputGroup-sizing-lg" style={{ backgroundColor: "#e9ecef", color: "#495057", width: "8rem", borderTopLeftRadius: "0.3rem", borderBottomLeftRadius: "0.3rem", }}>Email</InputGroup.Text>
                  <Form.Control style={{ borderRadius: "0",transition:"all 3s ease-out 0s", color:"#495057", fontSize:"1rem"}}
                  onChange={(e)=>setEmail(e.target.value)}
                  // onChange={handleChange}
                  type='email'
                  name='email'
                    placeholder='Email'
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                  
                </InputGroup>

                {open?
                <InputGroup size="lg" style={{ paddingTop: "0.8rem" }}>
                  <InputGroup.Text id="inputGroup-sizing-lg" style={{ backgroundColor: "#e9ecef", color: "#495057", width: "8rem", borderTopLeftRadius: "0.3rem", borderBottomLeftRadius: "0.3rem", }}>OTP</InputGroup.Text>
                  <Form.Control style={{ borderRadius: "0", transition:"border-color .15s ease-in-out,box-shadow .15s ease-in-out" }}
                  onChange={(e)=>setOtp(e.target.value)}
                  type='text'
                  name='otp'
                    placeholder='Enter OTP'
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </InputGroup>:""
                }

                {data?
                <InputGroup size="lg" style={{ paddingTop: "0.8rem" }}>
                  <InputGroup.Text id="inputGroup-sizing-lg" style={{ backgroundColor: "#e9ecef", color: "#495057", width: "8rem", borderTopLeftRadius: "0.3rem", borderBottomLeftRadius: "0.3rem", }}>Refer Code</InputGroup.Text>
                  <Form.Control style={{ borderRadius: "0", transition:"border-color .15s ease-in-out,box-shadow .15s ease-in-out" }}
                  onChange={(e)=>setOtp(e.target.value)}
                  type='text'
                  name='refer'
                    placeholder='Set Refer Code'
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </InputGroup>:""
                }
                </div>

            {open?
              <div className="otp text-white">
              {seconds >0?
              <span style={{color:"#757373"}}>Resend OTP in {seconds < 10? "0"+seconds :seconds} seconds.</span>:

              <span>
                <u onClick={resendOtp}>Resend OTP</u><span> or </span>
                <u>Via Call</u>
                </span>
              }

              </div>:""
            }
            

              <Button onClick={open?submit:sendOtp} style={{ width: "26rem", height: "3.2rem", marginTop: "1.5rem", fontSize: "1rem", fontWeight: "500", borderRadius: "0.3125rem", backgroundColor: "#0db25b", border: "#0db25b" }} size="lg" active>

                {
                  spinner ? <span><Spinner animation="border" /></span>:"CONTINUE"
                }
              </Button>
            </div>


            <div className="footer text-white" style={{maxWidth:"483px", width:"100%",lineHeight:"18px",padding:"0 10px",fontSize:"0.75rem", textAlign:"center",zIndex:"3",position:"fixed",bottom:"5%",}}>
              By proceeding, you agree to our <span onMouseEnter={() => setHover(!hover)} onMouseLeave={() => setHover(!hover)} style={{cursor:"pointer",fontSize:"0.9rem",textDecoration:hover? "underline":""}}>Terms of Use</span>, <span onMouseEnter={() => setIsHover(!isHover)} onMouseLeave={() => setIsHover(!isHover)} style={{cursor:"pointer",fontSize:"0.9rem",textDecoration:isHover? "underline":""}}>Privacy Policy</span> and that you are 18 years or older. You are not playing from Assam, Odisha, Nagaland, Sikkim, Meghalaya, Andhra Pradesh, or Telangana.
            </div>
          </div>


        </div>

        <ToastContainer />
      </div>
      <div className="divider" style={{ position: "fixed", left: "483px", top: "0", bottom: "0", width: "10px", backgroundColor: "#e0e0e0", zIndex: "5" }}></div>
      <div className="right_img" style={{ position: "fixed", left: "490px", right: "0", bottom: "0", top: "0", background: `url("https://steamdeckhq.com/wp-content/uploads/2023/05/MK1.jpg")`, backgroundSize: "cover", backgroundPosition: "center" }}></div>

    </>
  )
}

export default Login