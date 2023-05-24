import React, { useEffect } from 'react';
import { animateScroll as scroll } from "react-scroll";
import wandkleed from './wandkleed.jpg';
import Magnifier from "react-magnifier";
const WandkleedInteractief = () => {
    useEffect(() => {
        scroll.scrollToBottom({ duration: 3000, smooth: 'easeInOutQuad' });

        const timeout = setTimeout(() => {
            scroll.scrollToTop({ duration: 2000, smooth: 'easeInOutQuad' });
        }, 3200);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div>
            <img className="wandkleed-afbeelding-interactief" src={wandkleed} alt="Wandkleed"/>
        </div>
    );
};

export default WandkleedInteractief;
