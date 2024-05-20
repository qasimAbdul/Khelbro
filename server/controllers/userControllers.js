const users = require("../models/userSchema");
const userotp = require("../models/userOtp");
const nodemailer = require("nodemailer");
// const jwt = require("jsonwebtoken")
// const SECRET_KEY = "abdul"

// email config
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

exports.userRegister = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    res.status(400).json({ error: "Please Enter your Email" });
  }

  try {
    const preuser = await users.findOne({ email: email });

    if (preuser) {
      // res.status(400).json({error:"This User Already exist in our db"})
      const OTP = Math.floor(100000 + Math.random() * 900000);

      const existEmail = await userotp.findOne({ email: email });

      if (existEmail) {
        const updateData = await userotp.findByIdAndUpdate(
          { _id: existEmail._id },
          {
            otp: OTP,
          },
          { new: true }
        );

        await updateData.save();

        const mailOptions = {
          from: process.env.EMAIL,
          to: email,
          subject: "Sending Email For Otp validation",
          // text: `OTP:- ${OTP}`,
          text: `Your OTP is ${OTP}. Please enter this to verify your email`
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log("error", error);
            res.status(400).json({ error: "email not send" });
          } else {
            console.log("Email sent", info.response);
            res.status(200).json({ message: "Email sent Successfully" });
          }
        });
      } else {
        const saveOtpData = new userotp({
          email,
          otp: OTP,
        });
        await saveOtpData.save();
        const mailOptions = {
          from: process.env.EMAIL,
          to: email,
          subject: "Sending Email For Otp validation",
          // text: `OTP:- ${OTP}`,
          text: `Your OTP is ${OTP}. Please enter this to verify your email`
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log("error", error);
            res.status(400).json({ error: "email not send" });
          } else {
            console.log("Email sent", info.response);
            res.status(200).json({ message: "Email sent Successfully" });
          }
        });
      }
    } else {
      const OTP = Math.floor(100000 + Math.random() * 900000);

      const existEmail = await userotp.findOne({ email: email });

      if (existEmail) {
        const updateData = await userotp.findByIdAndUpdate(
          { _id: existEmail._id },
          {
            otp: OTP,
          },
          { new: true }
        );

        await updateData.save();
        res.status(200).json({email:email})

        const mailOptions = {
          from: process.env.EMAIL,
          to: email,
          subject: "Sending Email For Otp validation",
          // text: `OTP:- ${OTP}`,
          text: `Your OTP is ${OTP}. Please enter this to verify your email`
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log("error", error);
            res.status(400).json({ error: "email not send" });
          } else {
            console.log("Email sent", info.response);
            res.status(200).json({ message: "Email sent Successfully" });
          }
        });
      }else{
      const saveOtpData = new userotp({
        email,
        otp: OTP,
      });

      await saveOtpData.save();
      res.status(200).json({email:email})

      
      // const userRegister = new users({
      //     email
      // })

      // const storeData = await userRegister.save()
      // res.status(200).json(storeData)

      const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "Sending Email For Otp validation",
        // text: `OTP:- ${OTP}`,
        text: `Your OTP is ${OTP}. Please enter this to verify your email`
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("error", error);
          res.status(400).json({ error: "email not send" });
        } else {
          console.log("Email sent", info.response);
          res.status(200).json({ message: "Email sent Successfully" });
        }
      });

    }
  }
  } catch (error) {
    res.status(400).json({ error: "Invalid Details", error });
  }
};


// user Verify

exports.userLogin = async (req, res) => {
  const { email, otp } = req.body;
  


  if (!email || !otp) {
    res.status(400).json({ error: "Please Enter your Email and OTP" });
  }

  try {
    const otpverification = await userotp.findOne({ email: email });

    if (otpverification.otp === otp) {
      const preuser = await users.findOne({email:email})

      if(preuser){

        // Token Generate
        const token = await preuser.generateAuthtoken()
        // console.log(token);
        res.cookie("usercookie", token,{
          expires:new Date(Date.now()+9000000),
          httpOnly:true
        })

        const result = {
          preuser,token
        }
        res.status(200).json({result,message:"User Login Successfully Done", userToken:token})
      }else{
      
        let pass =""
        const str = "abcdefghijklmnopqrstuvwxyz-"
        for(let index=0; index<=8; index++){
          let char = Math.floor(Math.random() * str.length )
          pass+=str.charAt(char)
          
        }
  const combine = pass[0].toUpperCase() + pass.slice(1) + "_" + Math.floor(100000 + Math.random() *900000)
  console.log(combine);

  const index = [0,1,2,3,4,5,6,7]

  const convert = Math.floor(Math.random() * index.length)
  console.log(convert);
  
        const userRegister = new users({
            email, profileIndex:convert, username:combine
          });
    
          const storeData = await userRegister.save();
          
          // Token Generate
          const preuser = await users.findOne({email:email})
          // const tokengenerate = await users.findOne({email:email})

          if(preuser){
            const token = await preuser.generateAuthtoken()

            res.cookie("usercookie", token,{
              expires:new Date(Date.now()+9000000),
              httpOnly:true
            })

          res.status(200).json({storeData, message:"Register successfully", userToken:token});

          }
          // res.status(200).json({storeData, message:"Register successfully", userToken:token});
      }
      

    }else{
        res.status(400).json({error:"Invalid OTP"})
    }
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: "Invalid Details", error });
  }
};

// User Update
exports.userUpdate = async(req,res)=>{
  // console.log(req.body);
  const { id } = req.params;
  console.log(req.params);
  const {updateUser} = req.body
  console.log(req.body);

  // if (!username) {
  //   res.status(400).json({ error: "Please Enter your Username" });
  // }

  try {
    
      const updateuser = await users.findByIdAndUpdate(
        { _id:id },
        {
          // otp: OTP,
          username:updateUser
        },
        { new: true }
      );
      
    // const updateuser = await users.findByIdAndUpdate({_id: username._id},{new:true });

    

      console.log(updateuser);
      // await updateUsername.save();
        res.status(200).json(updateuser)
    
      
  } catch (error) {
    res.status(400).json({ error: "Invalid Details", error });
  }
}

// Profile update
exports.profileUpdate = async(req,res)=>{
  const { id } = req.params;
  console.log(req.params);
  const {selectImg} = req.body
  console.log(req.body);

  try {

    const updateprofile = await users.findByIdAndUpdate(
      { _id:id },
      {
        // otp: OTP,
        profileIndex:selectImg
      },
      { new: true }
    );
    
  

  

    console.log(updateprofile);
    // await updateprofile.save();
      res.status(200).json(updateprofile)
  } catch (error) {
    res.status(400).json({ error: "Invalid Details", error });
    
  }
}


// user Valid
exports.userValid = async(req,res)=>{
  try {
    const ValidUSerOne = await users.findOne({_id:req.userId})
    res.status(200).json(ValidUSerOne)
  } catch (error) {
    res.status(400).json(error)
  }
}


// user Logout
exports.userLogout = async(req,res)=>{
  try {
    req.rootuser.tokens = req.rootuser.tokens.filter((currentElement)=>{
      return currentElement.token !== req.token
    })

    // res.clearcookie("usercookie",{path:"/"})

    req.rootuser.save()

    res.status(200).json(req.rootuser.tokens)
  } catch (error) {
    res.status(400).json(error)
  }
}
