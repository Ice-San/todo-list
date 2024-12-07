import '../../index.css';
import './index.css';

type LogoType = {
    sizedClass: string;
}

export const Logo = ({sizedClass}: LogoType) => {
    return (
        <div className={sizedClass}>
            <div className='logo-container imgs-container'></div>
        </div>
    );
};