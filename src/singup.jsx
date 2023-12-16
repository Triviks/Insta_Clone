import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import './assets/css/style.css';
import microsoft from './assets/images/microsoft.png';
import gplay from './assets/images/gplay.png';
import fbicon from './assets/images/icons/icons8-facebook-40 (1).png';
import { useState, useEffect } from "react";
import users from './users';

function Signup() {

    const [mobileOrEmail, setMobileOrEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [isSignupButtonDisabled, setSignupButtonDisabled] = useState(true);

    const handleMobileorEmail = (e) => {
        const inputText = e.target.value;
        setMobileOrEmail(inputText);
        setSignupButtonDisabled(inputText.length < 6 || username.length < 6 || password.length < 6 || fullName.length < 6);

    }

    
    const handlePasswordInput = (e) => {
        const inputPassword = e.target.value;
        setPassword(inputPassword);
        setSignupButtonDisabled(mobileOrEmail.length < 6 || username.length < 6 || inputPassword.length < 6 || fullName.length < 6);
    }

    const handleUsernameInput = (e) => {
        const inputUsername = e.target.value;
        setUsername(inputUsername);
        setSignupButtonDisabled(mobileOrEmail.length < 6 || inputUsername.length < 6 || password.length < 6 || fullName.length < 6);
    }

    const handleFullName = (e) => {
        const inputFullName = e.target.value;
        setFullName(inputFullName);
        setSignupButtonDisabled(mobileOrEmail.length < 6 || username.length < 6 || password.length < 6 || inputFullName.length < 6);
    }

    
    const signupValidate = () => {
  
      // Check if the username or email is already taken
      const userExists = users.some(
        (user) => user.username === username || user.email === mobileOrEmail || user.phoneNumber === mobileOrEmail
      );
  
      if (userExists) {
        alert('Username or email already exists. Please choose a different one.');
        setPassword('');
        return false;
      }
  
      // Update the users array with the new credentials
      const newUser = {
        username: username,
        email: mobileOrEmail,
        phoneNumber: mobileOrEmail,
        password: password,
      };
  
      users.push(newUser);
  
      console.log(users);
      localStorage.setItem('users', JSON.stringify(users));
  
      // Reset the input fields
      setMobileOrEmail('');
      setUsername('');
      setPassword('');
      setFullName('');
      window.location.href = "/";
    };

    return(
        <>
            <Helmet>
                <title>Sign up • Instagram</title>
            </Helmet>
            <div className="container-fluid mt-3">
                <div className="container-fluid d-flex justify-content-center align-items-center" id="form_container">
                    <form className='container-fluid text-center px-5 py-4' id="form" onSubmit={(e) => { e.preventDefault(); signupValidate(); }}>
                        <div id='form_head'>
                            <h5>Instagram</h5>
                            <p className='mt-3'>Sign up to see photos and videos from your friends.</p>
                        </div>
                        <button type='button' className="btn btn-primary facebook d-flex justify-content-center align-items-center mb-3" id='fb'>
                            <img className='me-1' width="20" height="20" src={fbicon} alt="facebook"/>
                            <div>Log in with Facebook</div>
                        </button>
                        <div className='my-4 d-flex align-items-center' id='or'>
                            <div className='greyline'></div>
                            <div className='mx-2'>OR</div>
                            <div className='greyline'></div>
                        </div>
                        <div className="mb-2">
                            <input id='id' placeholder='Mobile Number or Email' value={mobileOrEmail} onChange={handleMobileorEmail} />
                        </div>
                        <div className="mb-2">
                            <input type="text" placeholder='Full Name' value={fullName} onChange={handleFullName} />
                        </div>
                        <div className="mb-2">
                            <input type="text" placeholder='Username' value={username} onChange={handleUsernameInput} />
                        </div>
                        <div className="mb-2">
                            <input type="password" placeholder='Password' value={password} onChange={handlePasswordInput} />
                        </div>
                        <div id='learn_more'>
                            <p>People who use our service may have uploaded your contact information to Instagram. <a href='https://www.facebook.com/help/instagram/261704639352628' target='blank'>Learn More</a></p>
                        </div>
                        <div id='terms'>
                            <p>By signing up, you agree to our <a href='https://help.instagram.com/581066165581870/?locale=en_US' target='blank'>Terms</a>, <a href='https://www.facebook.com/privacy/policy' target='blank'>Privacy Policy</a> and <a href='https://privacycenter.instagram.com/policies/cookies/' target='blank'>Cookies Policy</a> .</p>
                        </div>
                        <button type='submit' className="btn btn-primary" id='signup_btn' disabled={isSignupButtonDisabled}>Sign up</button>
                    </form>
                </div>

                <div className="container-fluid d-flex justify-content-center align-items-center mt-2" id="sigup_container">
                    <div className='container-md text-center px-5 py-3' id="signup">
                        <span className='me-1 px-5'>Have an account? <Link to='/'>Log in</Link></span> 
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

export default Signup;
