import React, {useState, useContext, useEffect} from 'react'
import PageTitle from '../components/PageTitle'
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'

import {mainFunctions} from "../providers/MainProviders"


export default function Register() {

    const {
        err,
        setErr,
        authTrigger,
        setAuthTrigger
      }  = useContext(mainFunctions)
    

    const [registerationDetails, setRegisterationDetails] = useState({
        email:"",
        password:"",
        confirm_password:""
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

    const signUp = async () =>{
        if(registerationDetails.password === registerationDetails.confirm_password
            && registerationDetails.password !== ""
            ){
        const authentication = getAuth()
        await createUserWithEmailAndPassword(
            authentication, 
            registerationDetails.email,
            registerationDetails.password
            ).then(async (result) =>{
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
            }).catch(error =>{
                console.log(error.message)
                setErr(error.message)
            })
        }else{
            setErr("Password not same as Confirm Password ")
        }
    }
    useEffect(()=>{
        if(err !== ""){
            setTimeout(()=>{
                console.log("Waited 5 second")
                setErr("")
            }, 5000);
        }
    },[err])
    return (
        <div>
            <PageTitle title="Register" />
            <div className="">
                <form className="form-group b_forms">
                    {err !== "" &&
                    <div className="alert alert-danger" role="alert">
                        {err}
                    </div>
                    }
                    <label htmlFor="username">Email</label>
                    <input className='b_input form-control' name="email" type="text"
                    onChange={(e)=>{
                        handleChange(e)
                    }}
                    ></input>

                    <label htmlFor="username">Password</label>
                    <input className='b_input form-control' name="password" type="password"
                    onChange={(e)=>{
                        handleChange(e)
                    }}
                    ></input>

                    <label htmlFor="username"> Confirm Password</label>
                    <input className='b_input form-control' name="confirm_password" type="password"
                    onChange={(e)=>{
                        handleChange(e)
                    }}
                    ></input>

                    <button className="b_btn btn btn-primary"
                    onClick={(e)=>{
                        e.preventDefault()
                        signUp()
                    }}
                    >Register</button>
                    {/* <p>or already have an account?</p>
                    <a id='log' href='./login'><p>Login</p></a> */}
                
                </form>
            </div>
        </div>
    )
}
