import React from 'react';
import { Helmet } from 'react-helmet';
import './assets/css/style.css';
import { Menu } from './menu';
import posts from './posts';

export function Explore({ content }) {

    const shuffledContent = content
    .sort(() => Math.random() - 0.5)
    .slice()

    return (
        <>
            <Helmet>
                <title>Instagram</title>
            </Helmet>

            <Menu activeElement={'explore'} />

            <div className='py-3' id='explore_page'>
                {shuffledContent.map((cont) => {
                    const randomNum = Math.floor(Math.random() * 9999) + 1;
                    const  random = Math.floor(Math.random() * 999) + 1;
                    return(
                        <div className="row px-0 pb-1">
                            <div className="col-4 px-1">
                                <div className="image-container img-fluid">
                                    <img src={posts[Math.floor(Math.random() * posts.length)].imageUrl}  alt='Explore Posts' className='img-fluid' />
                                    <div className="image-caption">
                                        <span className='me-2'><ion-icon name="heart-sharp"></ion-icon>{random}</span>
                                        <span><ion-icon name="chatbubble-outline"></ion-icon>{randomNum}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 px-1">
                                <div className="image-container img-fluid">
                                    <img src={posts[Math.floor(Math.random() * posts.length)].imageUrl}  alt='Explore Posts' className='img-fluid' />
                                    <div className="image-caption">
                                        <span className='me-2'><ion-icon name="heart-sharp"></ion-icon>{random}</span>
                                        <span><ion-icon name="chatbubble-outline"></ion-icon>{randomNum}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 px-1">
                                <div className="image-container img-fluid">
                                    <img src={posts[Math.floor(Math.random() * posts.length)].imageUrl}  alt='Explore Posts' className='img-fluid' />
                                    <div className="image-caption">
                                        <span className='me-2'><ion-icon name="heart-sharp"></ion-icon>{random}</span>
                                        <span><ion-icon name="chatbubble-outline"></ion-icon>{randomNum}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}

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