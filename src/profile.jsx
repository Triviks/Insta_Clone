import { Helmet } from 'react-helmet';
import { Menu } from './menu';
import profilepic from './assets/images/Blank-Profile-Picture-1.jpg';
import camera from './assets/images/camera-removebg-preview.png';

export function Profile() {
    return(
        <>
            <Helmet>
                <title>Instagram</title>
            </Helmet>

            <div class='d-flex'>
                <div>
                    <Menu activeElement={'profile'} />
                </div>
                <div class='profile-main mt-3'>
                    <div class='d-flex profile-main-div'>
                        <div class='profile-image'>
                            <img src={profilepic} width={170} height={150} class='rounded-circle'></img>
                        </div>
                        <div class='profile-details text-start mt-4'>
                            <div class='d-flex gap-3'>
                                <p class='profile-name'>the_eternal_stud</p>
                                <div>
                                    <button>Edit profile</button>
                                </div>
                                <div>
                                    <button>View Archive</button>
                                </div>
                                <div>
                                    <svg aria-label="Options" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Options</title><circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle><path d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                                </div>
                            </div>
                            <div class='d-flex gap-5 mt-2'>
                                <p><span class='fw-bold'>0</span> posts</p>
                                <p><span class='fw-bold'>267</span> followers</p>
                                <p><span class='fw-bold'>626</span> following</p>
                            </div>
                            <p style={{fontSize: '14px', fontWeight: 'bold'}}> Trivikraman 🏹 السهم</p>
                            <p style={{fontSize: '14px', fontWeight: 'light'}}>*A Hopeless romantic*💞🖇️ <br />It's cool not growing old. I like being the eternal stud🧛🏻😉</p>
                        </div>
                    </div>
                    <div class='profile-story text-start border-bottom mt-4 pb-4'>
                        <div class='profile-stories rounded-circle d-flex justify-content-center align-items-center'>
                            <svg aria-label="Plus icon" fill="#c7c7c7" height="44" role="img" viewBox="0 0 24 24" width="44"><title>Plus icon</title><path d="M21 11.3h-8.2V3c0-.4-.3-.8-.8-.8s-.8.4-.8.8v8.2H3c-.4 0-.8.3-.8.8s.3.8.8.8h8.2V21c0 .4.3.8.8.8s.8-.3.8-.8v-8.2H21c.4 0 .8-.3.8-.8s-.4-.7-.8-.7z"></path></svg>
                        </div>
                        <p class='mt-2 ms-4'>New</p>
                    </div>
                    <div class='buttons d-flex justify-content-center'>
                        <div class='post-btn border-top border-dark d-flex gap-2'>
                            <div>
                                <svg  fill="currentColor" height="12" role="img" viewBox="0 0 24 24" width="12"><title></title><rect fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="18" x="3" y="3"></rect><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="9.015" x2="9.015" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="14.985" x2="14.985" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="9.015" y2="9.015"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="14.985" y2="14.985"></line></svg>
                            </div>
                            <p>POSTS</p>
                        </div>
                        <div class='reels-btn text-secondary d-flex gap-2'>
                            <div>
                                <svg fill="currentColor" height="12" role="img" viewBox="0 0 24 24" width="12"><title></title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="2.049" x2="21.95" y1="7.002" y2="7.002"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="13.504" x2="16.362" y1="2.001" y2="7.002"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="7.207" x2="10.002" y1="2.11" y2="7.002"></line><path d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z" fill-rule="evenodd"></path></svg>
                            </div>
                            <p>REELS</p>
                        </div>
                        <div class='saved-btn text-secondary d-flex gap-2'>
                            <div>
                                <svg fill="currentColor" height="12" role="img" viewBox="0 0 24 24" width="12"><title></title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                            </div>
                            <p>SAVED</p>
                        </div>
                        <div class='tagged-btn text-secondary d-flex gap-2'>
                            <div>
                                <svg fill="currentColor" height="12" role="img" viewBox="0 0 24 24" width="12"><title></title><path d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><circle cx="12.072" cy="11.075" fill="none" r="3.556" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle></svg>
                            </div>
                            <p>TAGGED</p>
                        </div>
                    </div>
                    <div class='camera d-block mx-auto rounded-circle d-flex justify-content-center align-items-center mt-5'>
                        <img src={camera} width='60px' height='60px'></img>
                    </div>
                    <div class='camera-details text-center'>
                        <p class='share mt-3'>Share Photos</p>
                        <p>When you share photos, they will appear on your profile.</p>
                        <p class='color'>Share your first photo</p>
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

            </div>


        </>
    );
}