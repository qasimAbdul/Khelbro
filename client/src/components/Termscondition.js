import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { NavLink } from 'react-router-dom';
import "./style/content.css"


const Termscondition = () => {
  return (
    <>
      <div className="terms_cond" style={{maxWidth:"483px",paddingTop:"60px"}}>
        <div className='m-3'>
        <h1 style={{fontSize:"2.5rem"}}>Terms & Condition</h1>
        
        <div className="home_link">
        <Breadcrumb style={{marginBottom:"1rem", alignItems:"center",padding:"0.75rem 1rem", backgroundColor:"#e9ecef", borderRadius:"0.25rem"}}>
      <Breadcrumb.Item active ><NavLink style={{textDecoration:"none"}}  to="/"><span>Home </span></NavLink></Breadcrumb.Item>
      
      
      <Breadcrumb.Item active>Terms & Condition</Breadcrumb.Item>
    </Breadcrumb>
    </div>

    <h4>1. The Terms</h4>
        <p>1.1. These Terms and Conditions is a legally binding document and is an electronic record in the form of an electronic contract formed under Information Technology Act, 2000 and rules made thereunder. These Terms and Conditions must be read in conjunction with the Terms of Use of the App (hereinafter referred to as “Terms of Use”) and the Privacy Policy of the App (hereinafter referred to as “Privacy Policy”).These Terms of Service (the “Terms”) are a legal and binding agreement between users (“Users”) and Gazick Private Limited (referred to as the “KhelBro”), in relation to all games and applications made available by KhelBro (jointly and interchangeably referred to as the “Services”), and any information, text, graphics, video, sound, pictures, and any other materials appearing, sent, uploaded, communicated, transmitted or otherwise made available via the abovementioned Services (jointly referred to as the “Content”).</p>
        <p>1.2. By accessing and/or using the Services, Users agree to be bound by these Terms and KhelBro Privacy Policy, as stated on paragraph 5.</p>
        <p>1.3. Users state that they are of legal age (minimum 18 years of age) to access the Services and Content, or if legally possible, to access with their legal guardian consent, due authorization and agreement with these Terms.</p>

        <p>1.4. IMPORTANT NOTICE:</p>
        <ul>
          <li>THE CONTEST FOR STAKES IS OPEN ONLY TO INDIAN CITIZENS, RESIDING IN INDIA EXCEPT THE RESIDENTS OF THE INDIAN STATES OF ASSAM, ODISHA, NAGALAND, SIKKIM, MEGHALAYA, ANDHRA PRADESH, AND TELANGANA.</li>
          <li>KhelBro DOES NOT OFFER POKER FOR STAKES WITHIN THE TERRITORY OF GUJARAT. THE RESIDENTS OF GUJARAT HOWEVER ARE NOT RESTRICTED FROM PLAYING THE FREE TO PLAY FORMAT OF POKER, OFFERED BY KhelBro.</li>
          <li>KhelBro DOES NOT OFFER RUMMY FOR STAKES WITHIN THE TERRITORY OF KERALA. THE RESIDENTS OF KERALA HOWEVER ARE NOT RESTRICTED FROM PLAYING THE FREE TO PLAY FORMAT OF RUMMY, OFFERED BY KhelBro.</li>
          <li>CITIZENS AND/OR RESIDENTS OF COUNTRIES OTHER THAN INDIA ARE NOT ELIGIBLE TO PARTICIPATE IN THE CONTEST.</li>
          <li>CASUAL GAMING IS ALLOWED ACROSS ALL STATES; THE GAME IS PERMITTED TO BE PLAYED FOR STAKES IN THE STATES WHICH DO NOT RESTRICT, PROHIBIT THE SAME, AS HIGHLIGHTED IN THESE TERMS.</li>
          <li>IF YOU ARE RESIDING AND/OR ACCESSING THE APP FROM ANY REGION/STATE/COUNTRY WHERE THE CONTEST FOR STAKES IS PROHIBITED OR RESTRICTED BY LAW OR OTHER REASONS, THEN YOU ARE PROHIBITED FROM REGISTERING AND PARTICIPATING IN THE SAID CONTEST. YOU ARE RESPONSIBLE FOR COMPLIANCE OF ANY LAWS THAT ARE APPLICABLE ON YOUR COUNTRY/DOMICILE/STATE/RESIDENCE. IN CASE YOU PARTICIPATE IN THE CONTEST BY MISREPRESENTATION, THEN KhelBro SHALL IN ITS SOLE DISCRETION HAVE THE RIGHT TO DISQUALIFY YOU AT ANY STAGE OF THE PROCESS, FORFEIT ANY PRIZE (AS DEFINED BELOW) AND TAKE LEGAL ACTION AGAINST YOU.</li>
          <li>IF YOU ARE FOUND OR SUSPECTED TO BE DEFRAUDING THE SYSTEMS OF THE CONTEST IN ANY MANNER THEN YOU SHALL BE DEBARRED FROM PARTICIPATING IN THE CONTEST AND KhelBro MAY TAKE LEGAL ACTION AGAINST YOU.</li>
          <li>EMPLOYEES OF KhelBro, ITS RESPECTIVE HOLDING, SUBSIDIARIES, ASSOCIATE COMPANIES AND THIRD-PARTY SERVICE PROVIDERS WHO HAVE BEEN ENGAGED BY KhelBro FOR THE DEVELOPMENT, PROMOTION, ADMINISTRATION OR EXECUTION OF THE CONTEST, AND THEIR FAMILY/HOUSEHOLD MEMBERS ARE NOT ELIGIBLE TO PARTICIPATE IN THE CONTEST.</li>
          <li>IN CASE OF ANY DISPUTE REGARDING THE APP OR THE CONTEST, KhelBro’S DECISION SHALL BE FINAL AND BINDING.</li>
          <li>KhelBro RESERVES THE RIGHT TO CHANGE OR MODIFY THIS TERMS AND CONDITIONS FROM TIME TO TIME, PROSPECTIVELY OR RETROSPECTIVELY, AT ITS SOLE DISCRETION AND WITHOUT ANY PRIOR INTIMATION TO YOU. YOU ARE REQUESTED TO CAREFULLY READ THESE TERMS AND CONDITIONS FROM TIME TO TIME BEFORE USING THE APP OR PARTICIPATING IN CONTEST. IT SHALL BE YOUR RESPONSIBILITY TO CHECK THESE TERMS AND CONDITIONS PERIODICALLY FOR CHANGES. KhelBro MAY REQUIRE YOU TO PROVIDE YOUR DIRECT OR INDIRECT CONSENT TO ANY UPDATE IN A SPECIFIED MANNER BEFORE FURTHER USE OF APP OR PARTICIPATION IN THE CONTEST. IF NO SUCH SEPARATE CONSENT IS SOUGHT, YOUR CONTINUED USE OF APP OR PARTICIPATION IN THE CONTEST, FOLLOWING SUCH CHANGES, WILL CONSTITUTE YOUR ACCEPTANCE OF THOSE CHANGES.</li>
          <li>KhelBro RESERVES THE RIGHT TO WITHDRAW OR DISCONTINUE OR TERMINATE THE CONTEST AT ANY STAGE WITHOUT PRIOR NOTICE AND WITHOUT ANY LIABILITY WHATSOEVER TO YOU.</li>
          <li>THE CONTEST IS VOID WHERE PROHIBITED BY LAW.</li>
          <li>IN ANY CONTEST, INCASE OF A DRAW/TIE, THE FINAL DECISION WOULD BE OF THE COMPANY. THERE WOULD BE NO REFUNDS IN ANY SITUATION.</li>
        </ul>

        <h4>2. The Services</h4>
        <p>2.1. KhelBro gives Users in compliance with these Terms a personal, royalty-free, non-assignable, non-exclusive and revocable limited license to use the software that is provided as part of the Services. This license is for the sole purpose of enabling the own personal private use from Users to enjoy the Services as provided by KhelBro, in the manner according with by these Terms. The Services may change or being modified from time to time without prior notice or communication. Furthermore KhelBro may, at its own discretion, cease totally or partially, and/or permanently or temporarily the provision of the Services or Users accounts without prior notice or communication.</p>
        <p>2.2. The Services may include advertisements, which may be targeted to the Content or information on the Services, queries made through the Services, or any other information. The types and extent of advertising by KhelBro on the Services are subject to change. In consideration for KhelBro granting you access to and use of the Services, you agree that KhelBro and its third party providers and partners may place such advertising on the Services or in connection with the display of Content or information from the Services whether submitted by you or others.</p>
        <p>2.3. When access games included in the Services, the specific rules, scoring, controls and guidelines for each game can be found within the game itself. Such rules are integral part of the Terms, which Users shall agree and comply.</p>
        <p>2.4. Any charges related to Users for accessing the Services, including but not limited to internet connection and/or mobile or data charges are full responsibility of such Users.</p>
        </div>
      </div>
    </>
  )
}

export default Termscondition