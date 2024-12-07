import { Link } from 'react-router-dom';

import { Logo } from '../../components/Logo';
import { Imgs } from '../../components/Imgs';

import './index.css';

export const Signin = () => {
    return (
        <>
            <div className="signin-header">
                <Link to='/'>
                    <div className="arrow">
                        <div className="arrow-container imgs-container"></div>
                    </div>
                </Link>
            </div>

            <div className="logo-section">
                <Link to='/'>
                    <Logo sizedClass='logo-signin' />
                </Link>
            </div>

            <form action="">
                <div className="inputs">
                    <div className="inputs-title">
                        <Imgs sizedClass='inputs-imgs' imgsUrl='/signin/user-icon.svg' />
                        <p>Email</p>
                    </div>
                    <input type="email" placeholder='Ex: usertest@gmail.com' />
                </div>

                <div className="inputs">
                    <div className="inputs-title">
                        <Imgs sizedClass='inputs-imgs' imgsUrl='/signin/password-icon.svg' />
                        <p>Password</p>
                    </div>
                    <input type="password" placeholder='Ex: usertest135' />
                </div>
            </form>
        </>
    );
}