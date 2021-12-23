import React from 'react'

export default function Login() {
    return (
        <div>
            <div className="">
                <form className="form-group b_forms">
                    <label for="username">Username</label>
                    <input className='b_input form-control' name="username"></input>

                    <label for="username">Password</label>
                    <input className='b_input form-control' name="password" type="password"></input>

                    <button className="b_btn btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
