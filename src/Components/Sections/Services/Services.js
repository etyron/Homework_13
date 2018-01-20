import React from 'react';

const Services =()=> {

  const servicesList = [
    {
     title: "Business consultation"
    },
    {
      title: "Boost local business"
    },
    {
      title: "Accounting"
    }
  ];

  return(
      <div>
        <section className="section-interval services-bg">
          <div className="content">
            <h3 className="title title-section margin-bottom-60">Services</h3>
            <ul className="services-block flex-between flex-wrap margin-bottom-50">
              {
                servicesList.map(item =>{
                  return(
                      <li>
                        <h4 className="title title-cards title-dark">{item.title}</h4>
                        <p className="text dark-text">
                          Many variations of passages of Lorem available, but the majority have suffered alteration in some form,
                          by injected humour, or randomised.words which don't look
                        </p>
                      </li>
                  );
                })
              }
            </ul>
            <div className="flex-center">
              <button className="button button-brand">Full services</button>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Services;