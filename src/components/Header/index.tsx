import { Logo } from '../Logo';
import { Buttons } from '../Buttons';
import './index.css';

export const Header = () => {
    return (
        <div className="header">
            <Logo />
            <Buttons btnText='Sign In' btnType='btn-transparent' />
        </div>
    );
};