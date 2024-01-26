import { useState } from "react";
import InputText from "../Inputs/InputText";
import style from "./LoginForm.module.css";
import ImageLogin from "/assets/image-login.jpg";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={`${style.wrapper}`}>
      <img src={ImageLogin} alt="" />
      <form className={`${style.sign_in}`} action="">
        <h2>Sign Up</h2>
        <InputText
          inputId={"name"}
          isRequired
          placeholder="name"
          type="text"
          value={name}
          changeValue={setName}
        />
        <InputText
          inputId={"email"}
          isRequired
          placeholder="Email"
          type="e_mail"
          value={email}
          changeValue={setEmail}
        />
        <InputText
          inputId={"password"}
          isRequired
          placeholder="Password"
          type="password"
          value={password}
          changeValue={setPassword}
        />

        <div className={`${style.remember_forgot}`}>
          <label>
            <input type={`${style.checkbox}`} />
            Lembrar-se
          </label>
          <a href="#">Esqueci a Senha</a>
        </div>

        <button
          onClick={() =>
            console.log(`Name: ${name} | Email: ${email} | Pass: ${password}`)
          }
          type="submit"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};
export default LoginForm;
