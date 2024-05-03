import React from 'react'
const home=()=>{
 return(
    <div className='main'>
        <div className='leftDiv'>
            <p className='Expert'> EXPERT MEDICAL TREATMENT</p>
            <p className='weFollow'>We follow a holistic approach to health care.</p>
            <p className='trustedPartner'>Your Trusted Partner in Healthcare</p>
        </div>
        <div className='rightdiv'>
            <div className='patientShow'>
                <p className='kp'>5K+</p>
                <p className='kp'>Patients</p>
            </div>
            <img className="docImg" alt="" src="./images/doctor.jpg" />

            <div className='DocShow'>
                <p className='kp'>500+</p>
                <p className='kp'>Expert Doctors</p>
            </div>
        </div>
    </div>
    );
}
export default home;
