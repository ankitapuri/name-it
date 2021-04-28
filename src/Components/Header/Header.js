import React from 'react';
import './Header.css';
const header = ({headtitle, headerExpanded}) => {
    // here the props is passed as the argument in the fuction declared
    return (
        <div className="head-container">
            <img
                src='https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png'
                className={`head-image ${
                    headerExpanded
                        ? 'head-image-expanded'
                        : 'head-image-contracted'
                }`}
                alt="header"
            />
            <h1 className={`head-text ${
                    headerExpanded
                        ? 'head-text-expanded'
                        : 'head-text-contracted'
                }`}>{headtitle}</h1>
            {/*  calling that prop , it avoids hard-coding it */}
            
        </div>
    );
};
export default header;
