import React from "react";
import './Login.css';

const Login = (props) => (


    <div id="id01" className="custom-modal">

        <form className="modal-content animate" action="/action_page.php">
            <div className="imgcontainer">
                <span onClick={props.Login} className="close" title="Close Modal">&times;</span>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYX5DpMPK1n5dIoghDAsr_-C2g91cV-IKXgoOxt_ZM2sjUVKx8" alt="Avatar" className="avatar" />
            </div>

            <div className="container">
                <label htmlFor="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required />

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />

                <button type="submit">Login</button>
                <label>
                    <input type="checkbox" checked="checked" name="remember" /> Remember me
                                </label>
            </div>

            <div className="container">
                <button onClick={props.Login} type="button" className="cancelbtn">Cancel</button>
                <span className="psw">Forgot <a href="#">password?</a></span>
            </div>
        </form>
    </div>


)
// style="background-color:#f1f1f1"

export default Login;