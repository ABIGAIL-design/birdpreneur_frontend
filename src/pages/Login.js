import React,{useState, useContext} from 'react'
import PageTitle from '../components/PageTitle'
import {Link} from 'react-router-dom'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import {mainFunctions} from "../providers/MainProviders"

export default function Login() {
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
    
        const signIn = async () =>{
            const authentication = getAuth()
            
                await signInWithEmailAndPassword(
                        authentication,
                        registerationDetails.email,
                        registerationDetails.password
                    ).then((result)=>{
                        setAuthTrigger(Number(authTrigger) + 1)
                    }).catch(error =>{
                        console.log(error.message)
                        setErr(error.message)
                    })
                
        }
        return (
        <div>
            <PageTitle title="Login" />
            <div className="">
                <form className="form-group b_forms">
                    {err !== "" &&
                    <div className="alert alert-danger" role="alert">
                        {err}
                    </div>
                    }
                    <label htmlFor="username">Email</label>
                    <input className='b_input form-control' name="email"
                    placeholder='email'
                onChange={(e)=>{
                    handleChange(e)
                }}
                    ></input>

                    <label htmlFor="username">Password</label>
                    <input className='b_input form-control' name="password" type="password"
                    placeholder='password'
                    onChange={(e)=>{
                        handleChange(e)
                    }}
                    ></input>

                    <button className="b_btn btn btn-primary"
                    onClick={(e)=>{
                        e.preventDefault()
                        signIn()
                    }}
                    >Submit</button>
                    <div><small><Link to="/forgot">Forgot Password?</Link></small></div>
                </form>
                
                <div>
                    
                </div>
            </div>
        </div>
    )
}
