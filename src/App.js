import React from 'react';
import Header from './Components/Header/Header';
import AboutUs from './Components/Sections/AboutUs/AboutUs';
import Features from './Components/Sections/Features/Features';
import Project from './Components/Sections/Project/Project';
import Services from './Components/Sections/Services/Services';
import Testimonials from './Components/Sections/Testimonials/Testimonials';
import Blog from './Components/Sections/Blog/Blog';
import Contact from './Components/Sections/Contact/Contact';
import Footer from './Components/Footer/Footer';


class App extends React.Component {

  render() {
    return (
        <div>
          <Header/>
          <AboutUs/>
          <Features/>
          <Project/>
          <Services/>
          <Testimonials/>
          <Blog/>
          <Contact/>
          <Footer/>
        </div>
    )
  }
}

export default App;