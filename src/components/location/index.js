import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.1192102007335!2d37.564752115960175!3d55.791167880620634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b549f3b2bbb96f%3A0xc59e238b799d1f1b!2sZhk+Vtb+Arena+Park!5e0!3m2!1sen!2sru!4v1539717750933" 
            width="100%"
            height="500px" 
            frameBorder="0" 
            allowFullScreen>
            </iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>


        </div>
    );
};

export default Location;