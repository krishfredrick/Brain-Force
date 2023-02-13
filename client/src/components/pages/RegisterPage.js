import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import BackgroundImage from "../../assets/images/registerPage-bg.jpg";

export default function SignUpPage() {

    return (
        <div  style={register__bg} className="text-center ">
            <div>
            <h2 className='sign__up-font'>Join us</h2>
            <h5 className='sign__up-font' >Create your personal account</h5>
            <form action="/dashboard" method='get'>
                <p>
                    <label>Name</label><br/>
                    <input type="text" name="name" required />
                </p>
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="userName" required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://cake.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
            </div>
        </div>
    )

}

const register__bg ={
    width: "100%",
    height: "90vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
}