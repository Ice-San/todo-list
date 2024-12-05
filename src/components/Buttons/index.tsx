import './index.css';

type BtnProperties = {
    btnText: string;
    btnType: string;
};

export const Buttons = ({btnText, btnType}: BtnProperties) => {
    return (
        <div className={'btn ' + btnType}>{btnText}</div>
    );
};