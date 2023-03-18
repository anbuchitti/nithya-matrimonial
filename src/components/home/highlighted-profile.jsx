import maleImg from './../../assets/icons/male.jpeg';
import femaleImg from './../../assets/icons/female.png';

export default function HighlightedProfile() {
    return (
        <div className='highlighted-profile'>
            <h1>Highlighted Profile</h1>
            <div className='container'>
                <div className='profile-box'>
                    <div className='profile-item'>
                        <div className='profilepic'>
                            <img src={femaleImg} alt='profile-pic1' />
                        </div>
                        <div className='profile-info'>
                            <label className='profile-caption'>Name<span>: Nithya</span></label>
                            <label className='profile-caption'>Age<span>: 27</span></label>
                            <label className='profile-caption'>Religion<span>: Hindu</span></label>
                            <label className='profile-caption'>Caste<span>: BC</span></label>
                            <label className='profile-caption'>City<span>: Pondicherry</span></label>
                            <label className='profile-caption'>Job<span>: Asst.Professor</span></label>
                        </div>
                    </div>
                </div>
                <div className='profile-box'>
                    <div className='profile-item'>
                        <div className='profilepic'>
                            <img src={maleImg} alt='profile-pic2' />
                        </div>
                        <div className='profile-info'>
                            <label className='profile-caption'>Name<span>: Anbuganesh</span></label>
                            <label className='profile-caption'>Age<span>: 30</span></label>
                            <label className='profile-caption'>Religion<span>: Hindu</span></label>
                            <label className='profile-caption'>Caste<span>: MBC</span></label>
                            <label className='profile-caption'>City<span>: Villupuram</span></label>
                            <label className='profile-caption'>Job<span>: Software Engineer</span></label>
                        </div>
                    </div>
                </div>
                <div className='profile-box'>
                    <div className='profile-item'>
                        <div className='profilepic'>
                            <img src={maleImg} alt='profile-pic3' />
                        </div>
                        <div className='profile-info'>
                            <label className='profile-caption'>Name<span>: Sathish</span></label>
                            <label className='profile-caption'>Age<span>: 30</span></label>
                            <label className='profile-caption'>Religion<span>: Hindu</span></label>
                            <label className='profile-caption'>Caste<span>: OC</span></label>
                            <label className='profile-caption'>City<span>: Villupuram</span></label>
                            <label className='profile-caption'>Job<span>: Software Engineer</span></label>
                        </div>
                    </div>
                </div>
                <div className='profile-box'>
                    <div className='profile-item'>
                        <div className='profilepic'>
                            <img src={femaleImg} alt='profile-pic4' />
                        </div>
                        <div className='profile-info'>
                            <label className='profile-caption'>Name<span>: Keerthana</span></label>
                            <label className='profile-caption'>Age<span>: 22</span></label>
                            <label className='profile-caption'>Religion<span>: Hindu</span></label>
                            <label className='profile-caption'>Caste<span>: SC</span></label>
                            <label className='profile-caption'>City<span>: Cuddalore</span></label>
                            <label className='profile-caption'>Job<span>: Software Engineer</span></label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}