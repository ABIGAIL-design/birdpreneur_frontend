import React from 'react'

export default function Register() {
    return (
        <div>
            <div className="">
                <form className="form-group b_forms">
                    <label for="username">First Name</label>
                    <input className='b_input form-control' name="username"></input>

                    <label for="username">Last Name</label>
                    <input className='b_input form-control' name="password" type="password"></input>
                    
                    <label for="username">Username</label>
                    <input className='b_input form-control' name="username"></input>

                    <label for="username">Email</label>
                    <input className='b_input form-control' name="password" type="password"></input>
                    
                    <label for="username">Phone Number</label>
                    <input className='b_input form-control' name="username"></input>

                    <label for="username">Password</label>
                    <input className='b_input form-control' name="password" type="password"></input>

                    <label for="username"> Confirm Password</label>
                    <input className='b_input form-control' name="password" type="password"></input>

                    <button className="b_btn btn btn-danger">Register</button>
                    <p>or already have an account?</p>
                    <a id='log' href='./login'><p>Login</p></a>
                
                </form>
            </div>
        </div>
    )
}
