import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import './assets/css/style.css';
import microsoft from './assets/images/microsoft.png';
import gplay from './assets/images/gplay.png';
import { useEffect, useState } from "react";
import users from './users';

function Login() {

    const [loginInput, setLoginInput] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoginButtonDisabled, setLoginButtonDisabled] = useState(true);

    const handleLoginInput = (e) => {
        const inputText = e.target.value;
        setLoginInput(inputText);
        setLoginButtonDisabled(inputText.length < 6 || password.length < 6);

    }

    const handlePasswordInput = (e) => {
        const inputPassword = e.target.value;
        setPassword(inputPassword);
        setLoginButtonDisabled(loginInput.length < 6 || inputPassword.length < 6);

    }

    const loginValidate = () => {
        const user = users.find(u =>
            (u.username === loginInput || u.email === loginInput || u.phoneNumber === loginInput) && u.password === password

        );
        
        if(user) {
            console.log(users);
            setErrorMessage('');
            setLoginInput('');
            setPassword('');
            window.location.href = '/home'
        } else{
            setErrorMessage('Invalid username, email, phone number, or password.');
            return false
        }
    }
    
    return(
        <>
            <Helmet>
                <title>Login • Instagram</title>
            </Helmet>
            <div className="container-fluid mt-3">
                <div className="container-fluid d-flex justify-content-center align-items-center" id="form_container">
                    <form className='container-fluid text-center px-5 py-4' id="form" onSubmit={(e) => { e.preventDefault(); loginValidate(); }}>
                        <div className="mb-5" id='form_head'>
                            <h5>Instagram</h5>
                        </div>
                        <div className="mb-3">
                            <input placeholder='Phone number, username, or email' id='id' value={loginInput} onChange={handleLoginInput} />
                        </div>
                        <div className="mb-3">
                            <input type="password" placeholder='Password' id='pwd' value={password} onChange={handlePasswordInput} />
                        </div>
                        <button type='submit' className="btn btn-primary" id='login_btn' disabled={isLoginButtonDisabled}>Log in</button>
                        
                        <div className='my-4 d-flex align-items-center' id='or'>
                            <div className='greyline'></div>
                            <div className='mx-2'>OR</div>
                            <div className='greyline'></div>
                        </div>
                        <div className="facebook d-flex justify-content-center align-items-center">
                            <img className='me-1' width="25" height="25" src="https://img.icons8.com/color/48/facebook.png" alt="facebook"/>
                            <div>Log in with Facebook</div>
                        </div>
                        <div className='error_msg mt-2'>
                            <p style={{ color: 'red' }}>{errorMessage}</p>
                        </div>
                        <div className="forgot_pwd mt-2">
                            <a href='#'>Forgot password?</a>
                        </div>
                    </form>
                </div>

                <div className="container-fluid d-flex justify-content-center align-items-center mt-3" id="sigup_container">
                    <div className='container-md text-center px-5 py-3' id="signup">
                        <span className='me-2 px-4'>Don't have an account? <Link to='/signup'>Sign up</Link></span> 
                    </div>
                </div>

                <div className="container-md px-5 mt-3 d-flex justify-content-center getApp">
                    Get the app.
                </div>

                <div className="container-md px-5 mt-3 d-flex justify-content-center align-items-center" id='getApp'>
                    <a href='#'><img src={gplay} width={120} height={40} alt='gplay' /></a>
                    <a href='#'><img src={microsoft} width={120} height={40} alt='microsoft' /></a>
                </div>

                <div className="container-fluid d-flex justify-content-center" id='foot'>
                    <a href='#'>Meta</a>
                    <a href='#'>About</a>
                    <a href='#'>Blog</a>
                    <a href='#'>Jobs</a>
                    <a href='#'>Help</a>
                    <a href='#'>API</a>
                    <a href='#'>Privacy</a>
                    <a href='#'>Terms</a>
                    <a href='#'>Locations</a>
                    <a href='#'>Instagram Lite</a>
                    <a href='#'>Threads</a>
                    <a href='#'>Contact Uploading & Non-Users</a>
                    <a href='#'>Meta Verified</a>
                </div>

                <div className="container-fluid d-flex align-items-center justify-content-center mt-3 mb-5" id='copyright'>
                    <select className="select me-2">
                        <option value="af">Afrikaans</option><option value="ar">العربية</option><option value="cs">Čeština</option><option value="da">Dansk</option><option value="de">Deutsch</option><option value="el">Ελληνικά</option><option value="en" selected>English</option><option value="en-gb">English (UK)</option><option value="es">Español (España)</option><option value="es-la">Español</option><option value="fa">فارسی</option><option value="fi">Suomi</option><option value="fr">Français</option><option value="he">עברית</option><option value="id">Bahasa Indonesia</option><option value="it">Italiano</option><option value="ja">日本語</option><option value="ko">한국어</option><option value="ms">Bahasa Melayu</option><option value="nb">Norsk</option><option value="nl">Nederlands</option><option value="pl">Polski</option><option value="pt-br">Português (Brasil)</option><option value="pt">Português (Portugal)</option><option value="ru">Русский</option><option value="sv">Svenska</option><option value="th">ภาษาไทย</option><option value="tl">Filipino</option><option value="tr">Türkçe</option><option value="zh-cn">中文(简体)</option><option value="zh-tw">中文(台灣)</option><option value="bn">বাংলা</option><option value="gu">ગુજરાતી</option><option value="hi">हिन्दी</option><option value="hr">Hrvatski</option><option value="hu">Magyar</option><option value="kn">ಕನ್ನಡ</option><option value="ml">മലയാളം</option><option value="mr">मराठी</option><option value="ne">नेपाली</option><option value="pa">ਪੰਜਾਬੀ</option><option value="si">සිංහල</option><option value="sk">Slovenčina</option><option value="ta">தமிழ்</option><option value="te">తెలుగు</option><option value="ur">اردو</option><option value="vi">Tiếng Việt</option><option value="zh-hk">中文(香港)</option><option value="bg">Български</option><option value="fr-ca">Français (Canada)</option><option value="ro">Română</option><option value="sr">Српски</option><option value="uk">Українська</option>
                    </select>
                    <span>© 2023 Instagram from Meta</span>
                </div>


            </div>

        </>
    );
}

export default Login;