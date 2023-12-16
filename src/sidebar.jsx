
import './assets/css/style.css';
import profilepic from './assets/images/Blank-Profile-Picture-1.jpg';
export function Sidebar({ accounts }) {

    const desiredNumberOfProfiles = 5;
    const shuffledProfiles = accounts
    .slice(0, desiredNumberOfProfiles)
    .sort(() => Math.random() - 0.5);

    return(
        <>
            <div className="container" id='side-container'>
                <div className="container d-flex align-items-center" id='switch_container'>
                    <div className="container d-flex" id='profile'>
                        <div><img src={profilepic} width={40} height={40} /></div>
                        <div className="container d-block" id='profile-text'>
                            <strong>the_eternal_stud</strong>
                            <p className='text-secondary'>Trivikraman 🏹 السهم</p>
                        </div>
                    </div>
                    <p><a href='#'>Switch</a></p>
                </div>

                <div className="container mt-1" id='suggested_container'>
                    <div className='d-flex justify-content-between'>
                        <strong className='text-secondary'>Suggested for you</strong>
                        <p><a href='#'>See All</a></p>
                    </div>
                    {shuffledProfiles.map((profile) => (
                        <>
                            <div className="container d-flex justify-content-around align-items-center" id='suggested_accounts'>
                                <div className="container d-flex" id='profile'>
                                    <div>
                                        <img src={profile.imageUrl} width={40} height={40} />
                                    </div>
                                    <div className="container d-block" id='profile-text'>
                                        <strong>{profile.username}</strong> 
                                        <p className='text-secondary'>
                                            Followed by {profile.username}
                                        </p>
                                    </div>
                                </div>
                                <p><a href='#'>Follow</a></p>

                             </div>
                        </>
                    ))}
                </div>
                <div className="container-fluid d-flex justify-content-start" id='side-foot'>
                    <a href='#'>About</a>
                    <a href='#'>Press</a>
                    <a href='#'>Help</a>
                    <a href='#'>API</a>
                    <a href='#'>Jobs</a>
                    <a href='#'>Privacy</a>
                    <a href='#'>Terms</a>
                    <a href='#'>Locations</a>
                    <a href='#'>Language</a>
                    <a href='#'>Meta Verified</a>
                </div>

                <div className="container-fluid d-flex align-items-center justify-content-start mt-3 mb-5" id='copyright'>
                    <span>© 2023 Instagram from Meta</span>
                </div>
            </div>              
        </>
    );
}