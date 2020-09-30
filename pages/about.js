import React from 'react';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';

const About = () => (
  <Root>
    <div className="about-container">
      {/* Row */}
      <div className="row mt-5 pt-5 about-hero">

      <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/about-jessie.jpg" alt="About Jessie" width="470" height="680"/>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
            <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
              <h2 className="font-size-header mb-4">
                About Me
              </h2>
              <h4 className="font-size-subheader mb-4">
              Hello! Welcome to my eCommerce site for my artwork. I am a software engineering student and aspiring web designer/UX designer and part time artist. My store here is built with a REACT js front end, Chec’s headless architecture and the Commerce.js SDK. I thought this site would be a great way for me to practice my web development skills while being able to display and spread my artwork for friends, family, and community members. I hope to soon have prints available for purchase in my designs as well as options for commission requests! Check back to this page often for updates and be sure to follow my Instagram below as well!
              </h4>
              <div className="about-cjs mt-3 d-flex flex-row">
                <a className="px-4 py-3 font-color-white about-doc" href="https://www.instagram.com/jessieguoart/" target="_blank">
                  Follow my Instagram!
                </a>
              </div>
            </div>
          </div>


      </div>

      {/* Row 2 */}
      {/* <div className="row">
        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/netlify-illustration.svg" alt="Netlify illustration"/>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4">
              Deploy to Netlify
            </h3>
            <h4 className="font-size-subheader mb-4">
              If you would like to deploy this project live today, click the button below and watch the magic happen!
            </h4>
            <div className="mt-3">
              <a className="px-4 py-3 flex-grow-1 font-color-white about-net" href="https://app.netlify.com/start/deploy?repository=https://github.com/chec/commercejs-nextjs-demo-store" target="_blank">
                Deploy to Netlify
              </a>
            </div>
          </div>
        </div>
      </div> */}

      {/* Row 3 */}
      {/* <div className="row">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4">
              Clone in GitHub
            </h3>
            <h4 className="font-size-subheader mb-4">
            If you would like to clone this project and do a manual setup, go to the repository below!
            </h4>
            <div className="mt-3">
              <a className="px-4 py-3 flex-grow-1 font-color-white about-gb" href="https://github.com/chec/commercejs-nextjs-demo-store" target="_blank">
                Clone in GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/github-illustration.svg" alt="GitHub illustration"/>
            </div>
          </div>
        </div>
      </div> */}

        {/* Row 4 */}
        {/* <div className="row">
        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/blog-illustration.svg" alt="Commerce.js blog illustration"/>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4">
              Technical Blog
            </h3>
            <h4 className="font-size-subheader mb-4">
              Read the full technical tutorial here if you want to get into the nitty gritty!
            </h4>
            <div className="mt-3">
              <a
                className="px-5 py-3 flex-grow-1 font-color-white about-blog"
                href="https://www.netlify.com/blog/2020/07/09/create-a-fully-fledged-jamstack-commerce-store-with-commerce.js-and-netlify/"
                target="_blank"
              >
                Read Blog
              </a>
            </div>
          </div>
        </div>
      </div> */}

    </div>
    <Footer />
  </Root>
);


export default About;
