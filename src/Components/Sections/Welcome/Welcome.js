import React from 'react';

const Welcome =()=>{
    return(
        <div>
            <div className="bottom-header">
                <div className="jumbotron jumbotron-fluid jumbotron-welcome content margin-bottom-30">
                    <div className="container margin-bottom-30">
                        <h2 className="title title-welcome-sm light-text">We are leading consulting company</h2>
                        <p className="lead title title-welcome-bg light-text">Choose your industry</p>
                    </div>
                </div>
                <ul className="welcome-slider">
                    <li><a className="" href="">Education</a></li>
                    <li><a className="" href="">Business</a></li>
                    <li><a className="" href="">Technology</a></li>
                    <li><a className="" href="">Banking</a></li>
                    <li><a className="" href="">Real Estate</a></li>
                    <li><a className="" href="">Law</a></li>
                    <li><a className="" href="">Industry</a></li>
                    <li><a className="" href="">Works</a></li>
                    <li><a className="" href="">Text1</a></li>
                    <li><a className="" href="">Text2</a></li>
                    <li><a className="" href="">Text3</a></li>
                    <li><a className="" href="">Text4</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Welcome;