
import pairIcon from './../../assets/icons/pair.jpg';
import ringIcon from './../../assets/icons/ring.png';

export default function AboutUs() {
    return (
        <div className='about-us'>
            <h1>About Us</h1>
            <div className='container'>
                <div className='item-box'>
                    <div className='item'>
                        <div className='icon-img'>
                            <img src={pairIcon} alt='pair icon' />
                        </div>
                        <h1>10000</h1>
                        <label>Members</label>
                    </div>
                </div>
                <div className='item-box'>
                    <div className='item'>
                        <div className='icon-img'>
                            <img src={ringIcon} alt='pair icon' />
                        </div>
                        <h1>10</h1>
                        <label>Engaged</label>
                    </div>
                </div>
                <div className='item-box'>
                    <div className='item'>
                        <div className='icon-img'>
                            <img src={pairIcon} alt='pair icon' />
                        </div>
                        <h1>10</h1>
                        <label>Married</label>
                    </div>
                </div>
            </div>
        </div>
    )
}