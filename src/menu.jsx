import './assets/css/style.css';
import profilepic from './assets/images/Blank-Profile-Picture-1.jpg';
import { useEffect, useState } from 'react';
import $ from 'jquery';

export function Menu({ activeElement }) {

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        
        // Adjust styles based on the menu state
        let menu = document.getElementById('menu');
        let menuWords = document.querySelectorAll('.nav-link span');
        let navLink = document.querySelectorAll('.nav-link');
        let logo = document.getElementById('logo');
        let navBrand = document.querySelector('.navbar-brand');
        let searchContainer = document.getElementById('search_container');
        
        if (menuOpen) {
            // If menu is open, revert to default styles]
            menu.style.width = '240px';
            menu.style.paddingRight = "20px";
            menuWords.forEach(word => {
            word.style.display = 'flex';
            });
            logo.style.display = "none";
            navBrand.style.display = "flex";
            searchContainer.style.transform = 'translateX(-470px)';
        } else {
            // If menu is closed, apply new styles
            menu.style.width = '70px';
            menu.style.paddingRight = "5px";
            menuWords.forEach(word => {
                word.style.display = 'none';
            });

            navLink.forEach(links => {
                links.style.display = 'block';
                links.style.width = 'fit-content';
            });
            
            logo.style.display = "flex";
            navBrand.style.display = "none";
            searchContainer.style.transform = 'translateX(50px)';
            searchContainer.style.borderLeft = "0px"
        }
    };

    
    const MoreElementToggle = () => {
        $('.logout').toggle()
    }

    const Notification = () =>{

        setMenuOpen(!menuOpen);
        let menu = document.getElementById('menu');
        let menuWords = document.querySelectorAll('.nav-link span');
        let navLink = document.querySelectorAll('.nav-link');
        let logo = document.getElementById('logo');
        let navBrand = document.querySelector('.navbar-brand');
        let notification = document.querySelector('.notification');
        

        if (menuOpen) {
            // If menu is open, revert to default styles]
            menu.style.width = '240px';
            menu.style.paddingRight = "20px";
            menuWords.forEach(word => {
            word.style.display = 'flex';
            });
            logo.style.display = "none";
            navBrand.style.display = "flex";
            notification.style.transform = 'translateX(-470px)';
        } else {
            // If menu is closed, apply new styles
            menu.style.width = '70px';
            menu.style.paddingRight = "5px";
            menuWords.forEach(word => {
                word.style.display = 'none';
            });

            navLink.forEach(links => {
                links.style.display = 'block';
                links.style.width = 'fit-content';
            });
            
            logo.style.display = "flex";
            navBrand.style.display = "none";
            notification.style.transform = 'translateX(50px)';
            notification.style.borderLeft = "0px"
        }
        
    }

    return(
        <>
            <nav className="navbar navbar-light ps-2 py-4" id='menu'>
                <div className=' mt-2 ps-3'>
                    <ul className='nav flex-column'>
                        <li className='nav-item d-flex align-items-center'>
                            <span className='mt-1 mb-3' id='logo'><ion-icon name="logo-instagram"></ion-icon></span><span><a className="navbar-brand" href="/home">Instagram</a></span>                            
                        </li>
                    </ul>
                </div>

                <div className='mb-5 mt-5'>
                    <ul className="nav flex-column nav-pills">
                        <li className="nav-item">
                            <a className={activeElement === 'home' ? 'nav-link active d-flex align-items-center' : 'nav-link d-flex align-items-center'} href='/home'>
                                <svg aria-label="Home" class="me-3" fill={activeElement === 'home' ? 'currentColor' : 'none'}  stroke={activeElement === 'home' ? 'none' : 'currentColor'}  height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z"></path></svg>
                                <span>Home</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link d-flex align-items-center" id='search_open' onClick={toggleMenu}>
                                <svg aria-label="Search" class="me-3" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="16.511" x2="22" y1="16.511" y2="22"></line></svg>
                                <span>Search</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={activeElement === 'explore' ? "nav-link active d-flex align-items-center" : "nav-link d-flex align-items-center" } href='/explore'>
                                <svg aria-label="Explore" class="me-3" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon><polygon fill-rule="evenodd" points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"></polygon><circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle></svg>
                                <span>Explore</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={activeElement === 'reels' ? "nav-link active d-flex align-items-center" : "nav-link d-flex align-items-center" } href='/reels'>
                                <svg aria-label="Reels" class="me-3" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="2.049" x2="21.95" y1="7.002" y2="7.002"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="13.504" x2="16.362" y1="2.001" y2="7.002"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="7.207" x2="10.002" y1="2.11" y2="7.002"></line><path d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z" fill-rule="evenodd"></path></svg>
                                <span>Reels</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link d-flex align-items-center" href='/messages'>
                                <svg aria-label="Messenger" class="me-3" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.739"></path><path d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z" fill-rule="evenodd"></path></svg>
                                <span>Messages</span>
                            </a>
                        </li>
                        <li className="nav-item" onClick={Notification}>
                            <a className="nav-link d-flex align-items-center">
                                <svg aria-label="Notifications" class="me-3" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                                <span>Notifications</span>
                            </a>
                        </li>
                        <li className="nav-item" data-bs-toggle="modal" data-bs-target="#Modal">
                            <a className="nav-link d-flex align-items-center">
                                <svg aria-label="New post" class="me-3" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line></svg>
                                <span>Create</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={activeElement === 'profile' ? "nav-link active d-flex align-items-center" : "nav-link d-flex align-items-center" } href='/profile'>
                                <img src={profilepic} width={24} height={20} className='me-3' />
                                <span>Profile</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <ul className="nav flex-column nav-pills">
                        <li className="nav-item">
                            <a className="nav-link d-flex align-items-center" href="https://www.threads.net/login" target='blank'>
                                <svg aria-label="" class="me-3" fill="currentColor" height="24" role="img" viewBox="0 0 192 192" width="24"><path class="xcslo1z" d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"></path></svg>
                                <span>Threads</span>
                            </a>
                        </li>
                        <li className="nav-item" onClick={MoreElementToggle}>
                            <a className="nav-link d-flex align-items-center" id='more'>
                                <svg aria-label="Settings" class="me-3" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="3" x2="21" y1="4" y2="4"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="3" x2="21" y1="12" y2="12"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="3" x2="21" y1="20" y2="20"></line></svg>
                                <span>More</span>
                            </a>
                        </li>
                    </ul>
                    <div class="modal fade" id="Modal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-body text-center pb-0">
                                    <h6>Create new post</h6>
                                </div>
                                <hr />
                                <div class="modal-body text-center" id='modal_body'>
                                    <svg aria-label="Icon to represent media such as images or videos"  fill="currentColor" height="77" role="img" viewBox="0 0 97.6 77.3" width="96"><title>Icon to represent media such as images or videos</title><path d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z" fill="currentColor"></path><path d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z" fill="currentColor"></path><path d="M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z" fill="currentColor"></path></svg>
                                    <p>Drag photos and videos here</p>
                                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Select from computer</button>
                                </div>
                            </div>
                        </div>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                </div>

                <div className="align-items-start py-4 px-3" id='search_container'>
                    <div className='search pb-4'>
                        <h4>Search</h4>
                        <div className='d-flex align-items-center'>
                            <span className='mt-4 search-icon'><ion-icon name="search-outline"></ion-icon></span>
                            <input type='text' placeholder='Search' id='search_bar' className='mt-4' />
                        </div>
                    </div>

                    <div className="search-results mt-3">
                        <h6>Recent</h6>
                        <div className='d-flex align-items-center justify-content-center'>
                            No recent searches
                        </div>
                    </div>
                </div>

                <div className='logout'>
                    <div class='start bg-white px-4 pt-3 pb-1'>
                        <div class='d-flex gap-3 mb-3'>
                            <div>
                                <svg aria-label="Settings" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="18" role="img" viewBox="0 0 24 24" width="18"><title>Settings</title><circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle><path d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                            </div>
                            <p>Settings</p>
                        </div>
                        <div class='d-flex gap-3 mb-3'>
                            <div>
                                <svg aria-label="Your activity" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="18" role="img" viewBox="0 0 24 24" width="18"><title>Your activity</title><path d="M19 1H5C2.794 1 1 2.794 1 5v14c0 2.206 1.794 4 4 4h14c2.206 0 4-1.794 4-4V5c0-2.206-1.794-4-4-4ZM5 3h14c1.103 0 2 .897 2 2v6h-2.382l-2.723-5.447c-.34-.678-1.45-.678-1.79 0L9 15.764l-2.105-4.211A1 1 0 0 0 6 11H3V5c0-1.103.897-2 2-2Zm14 18H5c-1.103 0-2-.897-2-2v-6h2.382l2.723 5.447a1 1 0 0 0 1.79 0L15 8.236l2.105 4.211A1 1 0 0 0 18 13h3v6c0 1.103-.897 2-2 2Z"></path></svg>
                            </div>
                            <p>Your activity</p>
                        </div>
                        <div class='d-flex gap-3 mb-3'>
                            <div>
                                <svg aria-label="Saved" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="18" role="img" viewBox="0 0 24 24" width="18"><title>Saved</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                            </div>
                            <p>Saved</p>
                        </div>
                        <div class='d-flex gap-3 mb-3'>
                            <div>
                                <svg aria-label="Theme icon" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="18" role="img" viewBox="0 0 24 24" width="18"><title>Theme icon</title><path d="M12.00018,4.5a1,1,0,0,0,1-1V2a1,1,0,0,0-2,0V3.5A1.00005,1.00005,0,0,0,12.00018,4.5ZM5.28241,6.69678A.99989.99989,0,1,0,6.69647,5.28271l-1.06054-1.061A.99989.99989,0,0,0,4.22186,5.63574ZM4.50018,12a1,1,0,0,0-1-1h-1.5a1,1,0,0,0,0,2h1.5A1,1,0,0,0,4.50018,12Zm.78223,5.30322-1.06055,1.061a.99989.99989,0,1,0,1.41407,1.41406l1.06054-1.061a.99989.99989,0,0,0-1.41406-1.41407ZM12.00018,19.5a1.00005,1.00005,0,0,0-1,1V22a1,1,0,0,0,2,0V20.5A1,1,0,0,0,12.00018,19.5Zm6.71729-2.19678a.99989.99989,0,0,0-1.41406,1.41407l1.06054,1.061A.99989.99989,0,0,0,19.778,18.36426ZM22.00018,11h-1.5a1,1,0,0,0,0,2h1.5a1,1,0,0,0,0-2ZM18.01044,6.98975a.996.996,0,0,0,.707-.293l1.06055-1.061A.99989.99989,0,0,0,18.364,4.22168l-1.06054,1.061a1,1,0,0,0,.707,1.707ZM12.00018,6a6,6,0,1,0,6,6A6.00657,6.00657,0,0,0,12.00018,6Zm0,10a4,4,0,1,1,4-4A4.00458,4.00458,0,0,1,12.00018,16Z"></path></svg>
                            </div>
                            <p>Switch appearance</p>
                        </div>
                        <div class='d-flex gap-3'>
                            <div>
                                <svg aria-label="Report a problem" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="18" role="img" viewBox="0 0 24 24" width="18"><title>Report a problem</title><path d="M18.001 1h-12a5.006 5.006 0 0 0-5 5v9.005a5.006 5.006 0 0 0 5 5h2.514l2.789 2.712a1 1 0 0 0 1.394 0l2.787-2.712h2.516a5.006 5.006 0 0 0 5-5V6a5.006 5.006 0 0 0-5-5Zm3 14.005a3.003 3.003 0 0 1-3 3h-2.936a1 1 0 0 0-.79.387l-2.274 2.212-2.276-2.212a1 1 0 0 0-.79-.387H6a3.003 3.003 0 0 1-3-3V6a3.003 3.003 0 0 1 3-3h12a3.003 3.003 0 0 1 3 3Zm-9-1.66a1.229 1.229 0 1 0 1.228 1.228A1.23 1.23 0 0 0 12 13.344Zm0-8.117a1.274 1.274 0 0 0-.933.396 1.108 1.108 0 0 0-.3.838l.347 4.861a.892.892 0 0 0 1.77 0l.348-4.86a1.106 1.106 0 0 0-.3-.838A1.272 1.272 0 0 0 12 5.228Z"></path></svg>
                            </div>
                            <p>Report a problem</p>
                        </div>
                    </div>
                    <div class='end bg-white px-4 pt-3  border-bottom'>
                        <div class='d-flex'>
                            <p>Switch accounts</p>
                        </div>
                    </div>
                    <div class='endd bg-white px-4 pt-3 '>
                        <div class='d-flex'>
                            <p>Log out</p>
                        </div>
                    </div>
                </div>

                <div class='notification h-100 border text-start'> 
                    <div class='border-bottom pt-3 ps-3'>
                        <p class='fw-bold'>Notifications</p>
                    </div>
                </div>
            </nav>
        </>
    );
}