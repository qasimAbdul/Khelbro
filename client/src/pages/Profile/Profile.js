import React, { useContext, useEffect, useState } from 'react'
import "../Profile/profile.css"
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { Updateprofile, Updateuser, userLogout, userValid } from '../../services/Apis'
import { LoginContext } from '../../components/ContextProvider/Context'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const Profile = () => {

  const images = ["./man.png","./teen.png","./man2.png","./girl.png","./woman.png","./gamer.png","./avatar.png","./avatar1.png"]

  const convert = Math.floor(Math.random() * images.length)
  console.log(convert);

  const index = [0,1,2,3,4,5,6,7]

  const select_img = images[convert]

  const [profile,setProfile] = useState("")
  // setProfile(select_img)
  console.log(profile);
  const [show, setShow] = useState(false)
  const [open, setOpen] = useState(false)
  const [edit, setEdit] = useState(false)

  const {id="65fd2ff5d26593d0b4a09af9"} = useParams()
  // console.log(id);
  

  // const [img, setImg] = useState(images)
  // console.log(img);

  const [avatar, setAvatar] = useState("")
  console.log(avatar);

  const [selectImg, setSelectImg] = useState("")
  console.log(selectImg);

  const [data,setData] = useState("")
  console.log(data);

  const [username, setUsername] = useState("")
  console.log(username);
  const [updateUser, setUpdateUser] = useState("")
  console.log(updateUser);

  

  // const generateUsername = () =>{
  //   let pass = ""
  //   let str = "-abcdefghijklmnopqrstuvwxyz"
  //   let pre = ""
  //   for (let index = 1; index <= 5; index++) {
  //     let char = Math.floor(Math.random() * str.length + 1)

  //     let pro = Math.floor(100000 + Math.random() * 900000)
  //     pre = pro

  //     pass += str.charAt(char)
      
  //     // const element = array[index];
      
  //   }
  //   console.log(pass[0].toUpperCase() + pass.slice(1) + "_" + pre);
  // }

  // const generateimage = ()=>{
  //   let pass=""
  //   const images = ["./man.png","./teen.png","./man2.png","./girl.png","./woman.png","./gamer.png","./avatar.png","./avatar1.png"]
  //    for(let index=0; index<images.length; index++){
  //   let char = Math.floor(Math.random() * images.length )
  //   pass = images[char]
  //   // const select_img = images[pass]
    
  // }
  // console.log(pass);
  // setProfile(pass)

  // // const combine = pass[0].toUpperCase() + pass.slice(1) + "_" + Math.floor(100000 + Math.random() *900000)
  // //   console.log(combine);
  // //   setUsername(combine)

     
     
  //   //  console.log(pass[0].toUpperCase() + pass.slice(1) + "_" + Math.floor(100000 + Math.random() *900000));

    
  // }
  // *1000 +10


  

  const {loginData, setLoginData} = useContext(LoginContext)
  console.log(loginData);

  const navigate = useNavigate()

  const profileValid = async()=>{
    const token = localStorage.getItem("userdbtoken")

    const response = await userValid(token)
    console.log(response);
    setProfile(response.data.profileIndex)
    // setLoginData(response.data.profileIndex)
    setUsername(response.data.username)
    // setData(response.data.email)


    if(response.status === 200){
      console.log("user verify");
      navigate("/profile")
    }else{
      console.log(response.response.data.message);
      // alert(response.response.data.message)
      // setLoginData(response)
      navigate("/login")
    }
  }

  useEffect(()=>{
    profileValid()

    // if(loginData.data){
    //   generateUsername()
    // }else{
    //   setUpdateUser(updateUser)
    // }
    
    // p()
    // generateimage()
    

    if(avatar){
      setSelectImg(URL.createObjectURL(avatar))
    }
  },[avatar])

  // Logout user
  const logoutuser = async()=>{
    const token = localStorage.getItem("userdbtoken")

    // console.log(token);

    // const config = {
    //   token
    // }

    console.log(token);

    const response = await userLogout(token)
    console.log(response);

    if(response.status !== 200){
      console.log("error");
      // navigate("")
    }else{
      console.log("user logout");
      localStorage.removeItem("userdbtoken")
      setLoginData(false)
      navigate("/login#!")
    }
  }

  // const handlechange = (e)=>{
  //   const {name,value} = e.target

  //   setUpdateUser({[name]:value})

  //   // console.log(username);
  // }
  const userupdate = async(e)=>{
    e.preventDefault()

    if(updateUser===""){
      toast.error("Username must be of 4-20 characters.", {
        hideProgressBar:true,
        autoClose:60000,
        position:"top-left",
        icon: ({theme, type}) => <i style={{display:"flex",alignItems:"center",justifyContent:"center",color:"#D32F2F", fontSize:"1.2rem"}}><ErrorOutlineIcon/></i>,
        style:{backgroundColor:"#FDEDED",marginTop:"14px", color:"#5F2120", width:"27rem"}
      })
    }else{
      const data = {
        updateUser:updateUser
        // id: '65f8310949e151c6b2b9f2a5'
      }

      const response = await Updateuser(id,data)
      console.log(response);

      setEdit(false)

      if(response.status === 200){
        setUsername(response.data.username)
        toast.success("User Updated", {
          hideProgressBar:true,
          autoClose:2000,
          position:"top-left",
          icon: ({theme, type}) => <i class="fa-solid fa-circle-check" style={{color:"rgb(46, 125, 50)", fontSize:"1.2rem"}}></i>,
          style:{backgroundColor:"#EDF7ED", color:"rgb(46, 125, 50)", width:"15rem"}
          })
        

      }
    }
  }

  // const updateprofile = async(e)=>{
  //   e.preventDefault()

  //   if(selectImg){

  //     const data = {
  //       selectImg
  //     }

  //     const response = await Updateprofile(id,data)
  //     console.log(response);
  //     setOpen(false)
  //   }
  // }
  return (
    <>
        <div className="main_area bg-light" style={{ paddingTop: "4rem", maxWidth: "483px", backgroundColor:"rgb(250, 250, 250)" }}>
        <div className="profile_area" style={{display:"flex", flexDirection:"column",alignItems:"center" ,padding: "30px 25px 30px 25px", backgroundColor: "#f8f9fa" }}>
            <div className="profile" onClick={()=>setOpen(!open)} style={{ width:"6rem", cursor:"pointer"}}>
                <img src={images[profile]} width="100%"  alt="" style={{height:"6rem",borderRadius:"50%"}}/>
            </div>

            {open?
            <div className="selectimage">
              <div className="image_overlay" onClick={()=>setOpen(!open)}></div>

              <div className="profile_section">
                <div className="top_profile">
                  <div className="profile_pic" style={{width:"5rem",cursor:"pointer"}}>
                    <img src={selectImg?selectImg:"./man.png"} width="100%" alt="" style={{height:"5rem",borderRadius:"50%"}}/>
                  </div>

                  <div className="file_upload">{avatar?avatar.name:"Browse your profile pic"}
                    <span className="browse">Browse</span>
                    <input type="file" onChange={(e)=>{setAvatar(e.target.files[0])
                    setOpen(false)
                    if(selectImg==selectImg){
                          toast.success("Avatar Updated", {
                          hideProgressBar:true,
                          autoClose:1000,
                          position:"top-left",
                          icon: ({theme, type}) => <i class="fa-solid fa-circle-check" style={{color:"rgb(46, 125, 50)", fontSize:"1.2rem"}}></i>,
                          style:{backgroundColor:"#EDF7ED", color:"rgb(46, 125, 50)", width:"15rem"}
                          })
                          }
                    }}/>
                  </div>
                  <span style={{marginTop:"0.6rem"}}>OR</span>
                  <div className="choose_avatar mt-2">Choose Avatar</div>
                </div>

                <div className="bottom_profile">
                  {
                    images.map((element,index)=>{
                      {/* console.log(element,index) */}
                      return(
                        <>
                          <div className="profile_row" style={{width:"3.5rem",cursor:"pointer"}} >
                            <img src={element} width="100%" alt="" onClick={async(e)=>{ setSelectImg(index)
                          setOpen(false)
                          e.preventDefault()
                          if(selectImg){

    const data = {
      selectImg
    }

    const response = await Updateprofile(id,data)
    console.log(response);
    setProfile(response.data.profileIndex)
    setOpen(false)
  }

  
                          // if(selectImg==selectImg){
                          // toast.success("Avatar Updated", {
                          // hideProgressBar:true,
                          // autoClose:1000,
                          // position:"top-left",
                          // icon: ({theme, type}) => <i class="fa-solid fa-circle-check" style={{color:"rgb(46, 125, 50)", fontSize:"1.2rem"}}></i>,
                          // style:{backgroundColor:"#EDF7ED", color:"rgb(46, 125, 50)", width:"15rem"}
                          // })
                          // }
                          }} />
                          </div>
                        </>
                      )
                    })
                    
                  }
                </div>
              </div>
            </div>:""
            }
            
            {/* User number */}
            <span style={{color:"#959595",letterSpacing:"1px",fontWeight:"600",marginTop:"5px",fontSize:"0.85rem", textAlign:"center"}}>1234567890</span>

            {/* name & edit */}
            <div className="pro_name" style={{margin:"1rem 0",fontSize:"1.09em",fontWeight:"600"}}>
            
            {!edit?
            <div className='d-flex align-items-center'>{username}
          
            <div onClick={()=>setEdit(!edit)} style={{display:"flex",justifyContent:"center",alignItems:"center", color:"white",width:"22px",height:"22px",fontSize:"0.5rem",marginLeft:"0.5rem",borderRadius:"50%",backgroundColor:"#007bff"}}><i class="fa-solid fa-pen"></i></div>
            </div>
            :
            <div className='d-flex align-items-center'>
            <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 0, width: '20ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" type='text' name='updateUser' label="Enter Username" variant="standard" onChange={(e)=>setUpdateUser(e.target.value)}/>
    </Box>

    <div className="check" onClick={userupdate} style={{fontSize:"1.7rem",marginLeft:"0.2rem",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",top:"0.5rem"}}>
            <i class="fa-solid fa-check" style={{color:"#007bff"}} ></i>
            </div>
            </div>
            }
            </div>
            

            {/* My Wallet */}
            <div className="wallet xyz" style={{ width:"100%",cursor: "pointer", display: "flex", alignItems: "center", border: "1px solid #e0e0e0", height: "4.5rem", backgroundColor: "#fff", borderRadius: "5px" }}>
            <img src="/wallet.png" width="50px" style={{marginLeft:"2rem"}} alt="" />
            <div className="wallet_name" style={{width:"100%"}}>
            <span style={{marginLeft:"2.5rem"}}>My Wallet</span>

            </div>
            </div>
        </div>

        {/* Divider */}
        <div className="divider-x" style={{ width: "100%", backgroundColor: "#f1f1f1", height: "0.6rem" }}></div>
        
        {/* KYC section */}
        <div className="KYC_area" style={{padding: "20px", backgroundColor: "#fff" }}>
            <p style={{fontWeight:"600",fontSize:"1.1rem",letterSpacing:"1px"}}>Complete Profile</p>

            {/* KYC */}
            <div className="kyc_details" style={{width:"100%",marginTop:"2rem",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
              <div className="left_angle arrow" onClick={()=>setShow(false)} style={{display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"50%",backgroundColor:"#2663b4",width:"1.8rem",height:"1.8rem",fontSize:"1rem",color:"#fff"}}><i class="fa-solid fa-angle-left"></i></div>
              
              {!show?
              <NavLink to="/complete-kyc" style={{textDecoration:"none"}}>
              <div className="kyc" style={{padding:"0 15px",display:"flex",alignItems:"center",width:"23rem",border: "1px solid #e0e0e0", height: "4.5rem",borderRadius:"5px"}}>
                <div className="kyc_icon" style={{width:"3rem"}}><img src="./kyc.png" width="100%" alt="" /></div>
                <div className="kyc_text" style={{width:"100%",paddingTop:"5px"}}>
                <div style={{fontSize:"1rem",color:"#6c757d",marginLeft:"4rem"}}>Complete KYC</div>
                </div>
              </div>
              </NavLink>:

              <div className="kyc" style={{padding:"0 15px",display:"flex",alignItems:"center",width:"23rem",border: "1px solid #e0e0e0", height: "4.5rem",borderRadius:"5px"}}>
                <div className="kyc_icon" style={{width:"3rem"}}><img src="./mail.png" width="100%" alt="" /></div>
                <div className="email_text" style={{width:"100%",paddingTop:"5px"}}>
                <span style={{fontSize:"1rem",color:"#6c757d",marginLeft:"4rem"}}>Update Email Id</span>
                </div>
              </div>
              }
              <div className="right_angle arrow" onClick={()=>setShow(true)} style={{display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%",width:"1.8rem",height:"1.8rem",fontSize:"1rem",backgroundColor:"#2663b4",color:"#fff"}}><i class="fa-solid fa-angle-right"></i></div>
            </div>
        </div>

        {/* Divider */}
        <div className="divider-x" style={{ width: "100%", backgroundColor: "#f1f1f1", height: "0.6rem" }}></div>
        
        {/* battles */}
        <div className="battle_datails" style={{padding:"20px",backgroundColor:"#fff"}}>
        <div className="refer_code" style={{display:"flex",alignItems:"center"}}>
        <div className="refer_icon" style={{width:"2.5rem"}}>
        <img src="/add-user.png" width="100%" alt="" />
        </div>

        <div className="refer_detail" style={{paddingLeft:"1.5rem"}}>
          <p style={{margin:"0",fontSize:"0.8rem", color:"#0000008a",fontWeight:"500"}}>USE REFER CODE</p>
          <div className="input_tag" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <input type="text" style={{padding:"3px 0",textTransform:"uppercase",outline:"none",borderTop:"none",borderLeft:"none",borderRight:"none"}} />
            <div className="check" style={{fontSize:"1.7rem",marginLeft:"0.5rem",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <i class="fa-solid fa-check" style={{color:"#007bff"}}></i>
            </div>
          </div>
        </div>
        </div>

        {/* Cash */}
        <div className="cash_won" style={{height:"5rem",marginTop:"2rem",display:"flex",alignItems:"center"}}>
          <div className="cash_icon" style={{fontSize:"1.2rem",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",borderRadius:"50%",width:"2.5rem",height:"2.5rem",backgroundColor:"#0db25b"}}>
          <i class="fa-solid fa-indian-rupee-sign"></i>
          </div>

          <div className="cash" style={{paddingLeft:"1.5rem"}}>
          <p style={{margin:"0",fontSize:"0.8rem", color:"#0000008a",fontWeight:"500"}}>CASH WON</p>
          <div className="rupee_icon" style={{display:"flex",alignItems:"center"}}>
          <img src="/rupee.png" width="20px" alt="" />
          <span style={{marginLeft:"8px",fontWeight:"600",letterSpacing:"1px"}}>₹19</span>
            
          </div>
        </div>

        </div>

        {/* battle played */}
        <div className="battles" style={{marginTop:"2rem",display:"flex",alignItems:"center"}}>
          <div className="battle_icon" style={{width:"2.5rem"}}>
            <img src="./global-purple-battleIcon.png" width="100%" alt="" />
          </div>

          <div className="battle" style={{display:"flex",flexDirection:"column",justifyContent:"center",paddingLeft:"1.5rem"}}>
          <p style={{margin:"0",color:"#0000008a",fontSize:"0.8rem",fontWeight:"500"}}>BATTLE PLAYED</p>
          <span style={{fontWeight:"600"}}>1</span>
          </div>
        </div>
        </div>

        <div className="divider-x" style={{ width: "100%", backgroundColor: "#f1f1f1", height: "0.6rem" }}></div>

        {/* Logout */}
        <div className="logout" style={{textAlign:"center",padding:"20px", backgroundColor:"#fff"}}>
        <div className="log xyz" onClick={logoutuser} style={{cursor:"pointer",padding:"24px 0",color:'#6c757d',fontWeight:"600",letterSpacing:'1px'}}>LOG OUT</div>
        </div>
        <ToastContainer />
        </div>
    </>
  )
}

export default Profile