import { commonrequest } from "./ApiCall";
import { BACKEND_URL } from "./Helper";


// export const registerfunction = async(data)=>{
//     return await commonrequest("POST", `${BACKEND_URL}/user/register`, data)
// }

export const sentOtpfunction = async(data,header)=>{
    return await commonrequest("POST", `${BACKEND_URL}/user/register`, data,header)
}


export const userVerify = async(data,header)=>{
    return await commonrequest("POST", `${BACKEND_URL}/user/login`, data,header)
}

export const userValid = async(header)=>{
    console.log(header);
    return await commonrequest("GET", `${BACKEND_URL}/user/uservalid`,"",header)

}

export const Updateuser = async(id,data,header)=>{
    return await commonrequest("PUT", `${BACKEND_URL}/user/userUpdate/${id}`,data,header)
}


export const Updateprofile = async(id,data,header)=>{
    return await commonrequest("PUT", `${BACKEND_URL}/user/profileUpdate/${id}`,data,header)
}


export const userLogout = async(header)=>{
    console.log(header);
    return await commonrequest("GET", `${BACKEND_URL}/user/userlogout`,"",header)
}

console.log(userValid);