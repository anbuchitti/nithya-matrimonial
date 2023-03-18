import logoImg from './../../assets/images/nm_logo.png';
export default function Header() {
    return (
        <div className='header'>
            <div className='logo-set'>
                <img src={logoImg} alt='Nithya Matrimonial' />
            </div>
            <div className='menu'>
                <button className='btn no-border'>Home</button>
                <button className='btn no-border'>About us</button>
                <button className='btn no-border'>contact us</button>
                <button className='btn primary'>Login</button>
            </div>
        </div>
    )
}

