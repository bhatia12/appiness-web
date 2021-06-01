import React, {useState} from 'react'
import ReCAPTCHA from "react-google-recaptcha";

function LoginForm() {
    const [details, setDetails] = useState({email:"", name: "", phone: "", message:""})
    const [errors, setError] = useState({})
    
    const submitHandler = (e) => {
        e.preventDefault()
        const isValid = formValidation()
        
    } 
    const formValidation = () => {
        const nameErr = {}
        const phoneErr = {}
        let isValid = true

        if(details.email.trim().length ==0 ){
            errors.email = "Write a Name"
        }
        // if(!values.email){
        //     errors.email = "Write a Email"
        // } else if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)) {
        //     errors.email="Email is Invalid"
        // }
        // if(!values.phone){
        //     errors.email = "Write a Phone No"
        // } else if(!/^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/.test(values.phone)) {
        //     errors.email="Mobile Number is Invalid"
        // }
        // if(!values.message){
        //     errors.message = "Write a Name"
        // }
    }
    console.log(errors)
    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner forms">
                <h2 className="form-heading">Enquiry Form</h2>
                {/* {(error !="") ? (<div className="error">{error}</div>): ""} */}
                <div className="form-group">
                    <input className="inp" type="text" placeholder="Name" name="name" id="name" onChange={e =>setDetails({...details, name: e.target.value})} value={details.name}/>
                    {errors.name && <p>{errors.name}</p>}
                </div>
                <div className="form-group">
                    <input className="inp" type="email" placeholder="Email" name="email" id="email" onChange={e =>setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>
                <div className="form-group">
                    
                    <input className="inp" placeholder="Phone No" type="text" name="phone" id="phone" onChange={e =>setDetails({...details, phone: e.target.value})} value={details.phone}/>
                </div>
                <div className="form-group">
                    
                    <textarea className="inp" placeholder="Type a message" type="text" name="message" id="message" onChange={e =>setDetails({...details, message: e.target.value})} value={details.message}/>
                </div><div className="form-group">
                    
                
                </div>
                
                <input className="formappoint" type="submit" value="Submit"/>
            </div>
        </form>
    )
}

export default LoginForm