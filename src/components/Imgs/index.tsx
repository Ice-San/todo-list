import './index.css';

type ImgsType = {
    sizedClass: string;
    imgsUrl: string;
}

export const Imgs = ({sizedClass, imgsUrl}: ImgsType) => {
    return (
        <div className={sizedClass}>
            <div className="imgs-container" style={{ backgroundImage: `url(${imgsUrl})` }}></div>
        </div>
    );
};