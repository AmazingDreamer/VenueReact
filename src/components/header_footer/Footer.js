import React from 'react';
import Fade from 'react-reveal/Fade';
const Footer = () => {
    return (
        <footer classNamr="bck_red">
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">Twenty one pilots</div>
                <div className="footer_copyright">
                    The venue 2018. All rights reserved.
                </div>

            </Fade>
        </footer>
    );
};

export default Footer;