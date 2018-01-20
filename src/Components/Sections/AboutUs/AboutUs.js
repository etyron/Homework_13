import React from 'react';

const aboutSliderImg = [
    {
        links: "images/about-logos/logo1.png"
    },
    {
        links: "images/about-logos/logo2.png"
    },
    {
        links: "images/about-logos/logo3.png"
    },
    {
        links: "images/about-logos/logo4.png"
    },
    {
        links: "images/about-logos/logo5.png"
    }
];

const AboutUs =()=>{
  return(
      <div>
        <section className="section-interval about-us-section">
          <div className="content">
              <h3 className="title title-section title-dark margin-bottom-40">About us</h3>
              <div className="about-text-block">
                  <p className="text dark-text margin-bottom-40">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled.</p>
                  <button className="button button-brand">Read more</button>
              </div>
              <div className="about-us-block">
                  <ul className="about-us-slider">
                    {
                        aboutSliderImg.map(item => {
                            return(
                                <li><a href=""><img src={item.links} alt=""/></a></li>
                            );
                        })
                    }
                  </ul>
            </div>
          </div>
        </section>
      </div>
  );
};

export default AboutUs;