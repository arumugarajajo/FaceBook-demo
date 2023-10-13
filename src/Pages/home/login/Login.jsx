import "./login.css"

export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">facebook</h3>
                    <span className="loginDesc">Connect with friends and worlds around you on facebook</span>
                </div>
                <div className="loginRight">
                    <div className="loginform">
                        <input type="email" placeholder="Email" className="loginInput" />
                        <input type="password" placeholder="password" className="loginInput loginPassword" />
                        <div className="loginButton">
                        <button className="loginSubmit">Login</button>
                        <button className="LoginSignin">Signin</button>
                        </div>
                        <span className="loginForget">Forget Password?</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
