import './index.css';

export const Hero = () => {
    return (
        <div className="hero-content">
            <div className="hero-text">
                <p>Make your <span className="hero-highlight"><span>own</span></span><br /><span>Lists</span> about <span>Everything!</span></p>
            </div>

            <div className="illustration">
                <div className="illustration-container imgs-container"></div>
            </div>
        </div>
    );
};