import React,{useState, useContext} from 'react'
import PageTitle from '../components/PageTitle'
import {getAuth, sendPasswordResetEmail} from 'firebase/auth'
import {mainFunctions} from "../providers/MainProviders"

export default function ForgotPassword() {
    const {
        err,
        setErr,
        authTrigger, setAuthTrigger
      }  = useContext(mainFunctions)
    
        const [registerationDetails, setRegisterationDetails] = useState({
            email:"",
            password:""
        })
        const handleChange = (e) => {
            // var name = e.target.name
            // var value = e.target.value
            var {name, value} = e.target
            var kk = registerationDetails
            kk[name] = value
            setRegisterationDetails(kk)
    
            console.log(registerationDetails)
            // var 
        }
    
        const sendReset = async () =>{
            const authentication = getAuth()
            
                await sendPasswordResetEmail(
                        authentication,
                        registerationDetails.email
                    ).then((result)=>{
                        setAuthTrigger(Number(authTrigger) + 1)
                    }).catch(error =>{
                        console.log(error.message)
                        setErr(error.message)
                    })
                
        }
        return (
        <div>
            <PageTitle title="Forgot Password" />
            <div className="">
                <form className="form-group b_forms">
                    {err !== "" &&
                    <div className="alert alert-danger" role="alert">
                        {err}
                    </div>
                    }
                    <label htmlFor="username">Email</label>
                    <input className='b_input form-control' name="email"
                onChange={(e)=>{
                    handleChange(e)
                }}
                    ></input>

                    

                    <button className="b_btn btn btn-primary"
                    onClick={(e)=>{
                        e.preventDefault()
                        sendReset()
                    }}
                    >Send Password Reset</button>
                </form>
            </div>
        </div>
    )
}
