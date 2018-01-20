import React from 'react';

const Contact =()=> {

  const contactList = [
    {
      title: "Email",
      link: "info@consultplus.com"
    },
    {
      title: "Call us",
      link: "+91 8879 8767 990"
    },
    {
      title: "Career",
      link: "consult@career.com"
    }
  ];

  return(
      <div>
        <section className="section-interval">
          <div className="content">
            <h3 className="title title-section title-dark margin-bottom-30">Quick contact</h3>
            <ul className="contact-list flex-between">
              {
                contactList.map(item =>{
                  return(
                      <li>
                        <h4 className="title title-quick-contact">{item.title}</h4>
                        <a href="mailto: info@consultplus.com">{item.link}</a>
                      </li>
                  );
                })
              }
            </ul>
          </div>
        </section>
      </div>
  );
};

export default Contact;