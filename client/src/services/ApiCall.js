import axios from "axios"

// const usertoken = ""

export const commonrequest = async(methods,url,body,header)=>{
    let config = {
        method:methods,
        url,
        // headers: {},
        headers:header ? header={"Authorization":header, Accept:"application/json"}
        :{
            "Content-Type":"application/json",
            
            
        },
        data:body
        
    }

    console.log(methods);
    console.log(body);
    console.log(header);

    // if(header){
    //     config.headers["Content-Type"] = "multipart/form-data"
    // }else{
    //     config.headers["Content-Type"] = "application/json"
    // }

    // axios instance
    return axios(config).then((data)=>{
        return data
    }).catch((error)=>{
        return error
    })
}