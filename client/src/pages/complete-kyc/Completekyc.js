import React, { useState } from 'react'
import "../complete-kyc/completekyc.css"


const Completekyc = () => {

  const [open, setOpen] = useState(false);
  // const [show, setShow] = useState("")
  // console.log(show);

  const [select, setSelected] = useState("")
  console.log(select);

  const options = ["AADHAAR CARD","PAN CARD"
    // {label:"AADHAAR CARD"},
    // {label:"PAN CARD"}
  ]
  
  const [data, setData] = useState(options)
  console.log(data);

  
  return (
    <>
      <div className="main_area " style={{ paddingTop: "4rem", maxWidth: "483px", backgroundColor: "#fff" }}>
        <div className="kyc_banner">
          <div className="kycBox">
            <div className="alertIcon">
              <i class="fa-solid fa-triangle-exclamation"></i>
            </div>
            <div className="kycName">KYC REJECTED</div>
          </div>

          <h5>Step 1 {select==options[0]?
          <span style={{fontSize:"0.85rem",fontWeight:"400"}}>of 2</span>:""}</h5>
          <p>You need to submit a document that shows that you are <span>above 18 years</span> of age and not a resident of <span>Assam, Odisha, Sikkim, Nagaland, Telangana, Andhra Pradesh, Tamil Nadu and Karnataka.</span></p>
          <br />

          <h4>Document Type</h4>
          <div className="input" onClick={()=>setOpen(!open)}>
          
            <span>{select?select:"SELECT DOCUMENT"}</span>
            <i class="fa-solid fa-angle-down"></i>
          </div>

          {select?
            <div className="text_input">
          <label htmlFor=""> {select?`Enter ${select} Number`:""}</label>
          <div className="text">
          <input type="text" />
          </div>
          </div>:""
          }

          {/* {select?
            <div className="text_input">
          <label htmlFor=""> Enter Pan Card Number</label>
          <div className="text">
          <input type="text" />
          </div>
          </div>:""
          } */}

        </div>

        {open?
        <div className="selectkyc">
        <div className="input_overlay" onClick={()=>setOpen(!open)}></div>
        
          <div className="selectBox">
          <div className="inputName">
          <h3>Select Document</h3>
          </div>
            {data.map((element,id)=>{
              return(
                <>
                <div className="aadhar" onClick={()=>{setSelected(element) 
                setOpen(false)}}>
            <div className="aadhaar abc">{element}
            {select===element?
            <div className="tick"><i class="fa-solid fa-check"></i></div>
            :""}
            </div>
            </div>
                </>
              )
            })
            }

            {/* <div className="aadhar" onClick={()=>setOpen(false)}>
            <div className="aadhaar abc" onClick={()=>setShow(true)}>AADHAAR CARD
            {show?
            <div className="tick"><i class="fa-solid fa-check"></i></div>
            :""}
            </div>
            </div>
            
            <div className="pan " onClick={()=>setOpen(false)}>
            
            <div className="pan abc" onClick={()=>setShow()}>PAN CARD
            {show?
            <div className="tick" ><i class="fa-solid fa-check"></i></div>
            :""}
            </div>
            
            </div> */}
          
          </div>
        
        
        </div>:""
        }


        <div className="details_done">
          <button>DONE</button>
        </div>
      </div>
    </>
  )
}

export default Completekyc