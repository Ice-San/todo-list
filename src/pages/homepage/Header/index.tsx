import { Logo } from '../../../components/Logo';
import { Buttons } from '../../../components/Buttons';
import { Link } from "react-router-dom";
import './index.css';

export const Header = () => {
    return (
    <div className="header">
        <Link to='/'>
            <Logo sizedClass='logo' />
        </Link>

        <Link to='/signin/'>
            <Buttons btnText='Sign In' btnType='btn-transparent' />
        </Link>
    </div> 
    );
};