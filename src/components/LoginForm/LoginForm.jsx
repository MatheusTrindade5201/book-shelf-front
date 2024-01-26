    
import './LoginForm.css'
import ImageLogin from '/assets/image-login.jpg'

const LoginForm = () => {
    return (
        <div className="wrapper">
            <img src={ImageLogin} alt="" />
            <form className="sign-in" action="">
            
                <h2>Sign Up</h2>
                <div className="input-box">
                    <input type="text" placeholder="Nome" required/>
                </div>
                <div className="input-box">
                    <input type="e-mail" placeholder="Email" required/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Senha" required/>
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Lembrar-se</label>
                    <a href="#">Esqueci a Senha</a>
                </div>

                <button type="submit">Sign In</button>


            </form>
        </div>
    )
}
export default LoginForm