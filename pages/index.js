import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container10">
        <Head>
          <title>Pixel Knack Code Haven</title>
          <meta
            name="description"
            content="Welcome to Pixel Knack Code Haven (PKCH), where creativity meets technology."
          />
          <meta property="og:title" content="Pixel Knack Code Haven" />
          <meta
            property="og:description"
            content="Welcome to Pixel Knack Code Haven (PKCH), where creativity meets technology."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/66f0ce7c-0387-4e4e-bf51-9849219514e5/e17e7c8f-6850-44bb-bc07-c74ba842b248?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <div data-role="Header" className="home-navbar-container">
          <div className="home-navbar">
            <img alt="image" src="/avatar-1500w.png" className="home-image1" />
            <div className="home-links-container1">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8"
                  fill="currentColor"
                ></path>
              </svg>
              <Link href="/about">
                <a className="home-link11 Navbar-Link">About</a>
              </Link>
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M12.876.64V.639l8.25 4.763c.541.313.875.89.875 1.515v9.525a1.75 1.75 0 0 1-.875 1.516l-8.25 4.762a1.75 1.75 0 0 1-1.75 0l-8.25-4.763a1.75 1.75 0 0 1-.875-1.515V6.917c0-.625.334-1.202.875-1.515L11.126.64a1.75 1.75 0 0 1 1.75 0m-1 1.298L4.251 6.34l7.75 4.474l7.75-4.474l-7.625-4.402a.25.25 0 0 0-.25 0m.875 19.123l7.625-4.402a.25.25 0 0 0 .125-.216V7.639l-7.75 4.474ZM3.501 7.64v8.803c0 .09.048.172.125.216l7.625 4.402v-8.947Z"
                  fill="currentColor"
                ></path>
              </svg>
              <a href="#packages" className="home-link12 Navbar-Link">
                Packages
              </a>
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M11 23.59v-3.6c-5.01-.26-9-4.42-9-9.49C2 5.26 6.26 1 11.5 1S21 5.26 21 10.5c0 4.95-3.44 9.93-8.57 12.4zM11.5 3C7.36 3 4 6.36 4 10.5S7.36 18 11.5 18H13v2.3c3.64-2.3 6-6.08 6-9.8C19 6.36 15.64 3 11.5 3m-1 11.5h2v2h-2zm2-1.5h-2c0-3.25 3-3 3-5c0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5"
                  fill="currentColor"
                ></path>
              </svg>
              <a href="#faq" className="home-link13 Navbar-Link">
                FAQ
              </a>
            </div>
            <div data-role="BurgerMenu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon16">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
            <div data-role="MobileMenu" className="home-mobile-menu">
              <div className="home-container11">
                <div data-role="CloseMobileMenu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon18">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-links-container2">
                <Link href="/about">
                  <a className="home-link15 Navbar-Link">About</a>
                </Link>
                <a href="#packages" className="home-link16 Navbar-Link">
                  Packages
                </a>
                <a
                  href="mailto:mail@pkch.onlinee?subject=Contact"
                  className="home-link17 Navbar-Link"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="home-section-separator1"></div>
        <div className="home-section-separator2"></div>
        <div className="home-container12">
          <div className="home-hero">
            <div className="home-hero-text-container">
              <h1 className="home-heading1">
                <span className="Section-Heading home-text10">Pixel Knack</span>
                <br className="Section-Heading home-text11"></br>
                <span className="Section-Heading home-text12"> Code Haven</span>
                <br></br>
              </h1>
              <span className="home-text14">
                Crafting Pixels into Functional Code
              </span>
              <span id="about" className="home-text15">
                Welcome to Pixel Knack Code Haven (PKCH), where creativity meets
                technology! I&apos;m [Your Name], a passionate developer
                dedicated to transforming ideas into reality through innovative
                web and mobile solutions
              </span>
              <div className="home-cta-btn-container">
                <button className="home-cta-btn1 Anchor button">
                  <span className="home-text16">
                    Explore my Work (Comming Soon)
                  </span>
                </button>
                <a
                  href="mailto:mail@pkch.online?subject=Get in Touch"
                  className="home-cta-btn2 Anchor button"
                >
                  <span className="home-text17">Get in touch</span>
                </a>
              </div>
            </div>
            <div className="home-container13">
              <div className="home-container14">
                <div className="home-container15">
                  <img
                    alt="image"
                    src="/avatar-1500w.png"
                    className="home-image2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-features">
          <div className="home-heading-container1">
            <h2 className="home-text18">Key Skills/Services</h2>
          </div>
          <div className="home-cards-container">
            <div className="home-card1">
              <div className="home-icon-container1">
                <svg
                  viewBox="0 0 1170.2857142857142 1024"
                  className="home-icon20"
                >
                  <path d="M1170.286 877.714v73.143h-1170.286v-877.714h73.143v804.571h1097.143zM1097.143 164.571v248.571c0 16-19.429 24.571-31.429 12.571l-69.143-69.143-361.714 361.714c-7.429 7.429-18.857 7.429-26.286 0l-133.143-133.143-237.714 237.714-109.714-109.714 334.286-334.286c7.429-7.429 18.857-7.429 26.286 0l133.143 133.143 265.143-265.143-69.143-69.143c-12-12-3.429-31.429 12.571-31.429h248.571c10.286 0 18.286 8 18.286 18.286z"></path>
                </svg>
              </div>
              <div className="home-content-container1">
                <span className="home-heading2 Card-Heading">Blockchain</span>
                <span className="home-text19">
                  Blockchain Integration and Smart Contract Development-API
                  Development and Database Management
                </span>
              </div>
            </div>
            <div className="home-card2">
              <div className="home-icon-container2">
                <svg viewBox="0 0 1024 1024" className="home-icon22">
                  <path d="M810 128q34 0 60 26t26 60v256h-214l44-172-172 44v-214h256zM726 726l-44-172h214v256q0 34-26 60t-60 26h-256v-214zM342 554l-44 172 172-44v214h-256q-34 0-60-26t-26-60v-256h214zM128 214q0-34 26-60t60-26h256v214l-172-44 44 172h-214v-256z"></path>
                </svg>
              </div>
              <div className="home-content-container2">
                <span className="home-heading3 Card-Heading">Fullstack</span>
                <span className="home-text20">
                  Full-Stack Development with Next.js
                </span>
              </div>
            </div>
            <div className="home-card3">
              <div className="home-icon-container3">
                <svg
                  viewBox="0 0 865.7188571428571 1024"
                  className="home-icon24"
                >
                  <path d="M207.429 877.714l52-52-134.286-134.286-52 52v61.143h73.143v73.143h61.143zM506.286 347.429c0-7.429-5.143-12.571-12.571-12.571-3.429 0-6.857 1.143-9.714 4l-309.714 309.714c-2.857 2.857-4 6.286-4 9.714 0 7.429 5.143 12.571 12.571 12.571 3.429 0 6.857-1.143 9.714-4l309.714-309.714c2.857-2.857 4-6.286 4-9.714zM475.429 237.714l237.714 237.714-475.429 475.429h-237.714v-237.714zM865.714 292.571c0 19.429-8 38.286-21.143 51.429l-94.857 94.857-237.714-237.714 94.857-94.286c13.143-13.714 32-21.714 51.429-21.714s38.286 8 52 21.714l134.286 133.714c13.143 13.714 21.143 32.571 21.143 52z"></path>
                </svg>
              </div>
              <div className="home-content-container3">
                <span className="home-heading4 Card-Heading">Design</span>
                <span className="home-text21">
                  UI/UX Design for Exceptional User Experiences
                </span>
              </div>
            </div>
          </div>
        </div>
        <div id="packages" className="home-pricing">
          <div className="home-heading-container2">
            <h1 className="home-text22 Section-Heading">Ask for a quote</h1>
            <span className="home-text23">
              Ready to bring your project to life? Choose a service package that
              best fits your needs. Fill out the form below to get started!
            </span>
          </div>
          <div className="home-pricing-card-container">
            <div className="home-card4">
              <div className="home-card-heading1">
                <h1 className="home-type1">Minimal</h1>
                <span className="home-price1">
                  <span>BASIC Package ⭐</span>
                  <br></br>
                  <span className="home-text26">$100.00</span>
                </span>
              </div>
              <div className="home-card-content1">
                <div className="home-feature1">
                  <span className="home-name1">
                    Up to 3 pages Responsive web development.
                  </span>
                </div>
                <div className="home-feature2">
                  <span className="home-name2">
                    Basic UI/UX design tailored to your brand
                  </span>
                </div>
                <div className="home-feature3">
                  <span className="home-name3">Basic SEO optimization.</span>
                </div>
                <div className="home-feature4">
                  <span className="home-name4">One round of revisions.</span>
                </div>
                <a
                  href="mailto:mail@pkch.online?subject=Basic Package"
                  className="home-choose button Anchor"
                >
                  CHOOSE
                </a>
              </div>
              <span className="home-text27">
                Small businesses or personal projects looking for a
                straightforward online presence.
              </span>
            </div>
            <div className="home-card5">
              <div className="home-card-heading2">
                <h1 className="home-type2">Medium</h1>
                <span className="home-price2">
                  <span>COMPLEX Package ⭐⭐ </span>
                  <br></br>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text31">$200.00</span>
                </span>
              </div>
              <div className="home-card-content2">
                <div className="home-container16">
                  <span className="home-text32">
                    Up to 5 pages of responsive web development.
                  </span>
                </div>
                <div className="home-container17">
                  <span className="home-text33">
                    Advanced UI/UX design with user flow optimization.
                  </span>
                </div>
                <div className="home-container18">
                  <span className="home-text34">
                    Integration of up to 5 third-party APIs.
                  </span>
                </div>
                <div className="home-container19">
                  <span className="home-text35">
                    Enhanced SEO optimization strategies.
                  </span>
                </div>
                <div className="home-container20">
                  <span className="home-text36">Two rounds of revisions.</span>
                </div>
                <div className="home-container21">
                  <span className="home-text37">
                    Basic database setup (e.g., PostgreSQL).
                  </span>
                </div>
                <a
                  href="mailto:mail@pkch.online?subject=Mdium Package"
                  className="home-link18 Anchor button"
                >
                  CHOOSE
                </a>
              </div>
              <span className="home-text38">
                Medium-sized businesses needing a more customized and functional
                solution.
              </span>
            </div>
            <div className="home-card6">
              <div className="home-card-heading3">
                <h1 className="home-type3">Premium</h1>
                <span className="home-price3">
                  <span>PRO Package⭐⭐⭐</span>
                  <br></br>
                  <span className="home-text41">$1000.00</span>
                </span>
              </div>
              <div className="home-card-content3">
                <div className="home-container22">
                  <span className="home-text42">
                    Unlimited pages of responsive web development.
                  </span>
                </div>
                <div className="home-container23">
                  <span>
                    Comprehensive UI/UX design with user testing and feedback
                    integration.
                  </span>
                </div>
                <div className="home-container24">
                  <span className="home-text44">
                    Full integration of unlimited third-party APIs.
                  </span>
                </div>
                <div className="home-container25">
                  <span className="home-text45">
                    <span>Advanced SEO optimization with ongoing support.</span>
                    <span className="home-text47 Card-Text"> four</span>
                  </span>
                </div>
                <div className="home-container26">
                  <span className="home-text48">
                    Multiple rounds of revisions as needed.
                  </span>
                </div>
                <div className="home-container27">
                  <span className="home-text49">
                    Complete database design and management.
                  </span>
                </div>
                <div className="home-container28">
                  <span className="home-text50">
                    Deployment and ongoing maintenance for 3 months.
                  </span>
                </div>
                <a
                  href="mailto:mail@pkch.online?subject=Premium Package"
                  className="home-link19 Anchor button"
                >
                  CHOOSE
                </a>
                <span className="home-text51">
                  Larger businesses or startups requiring a full-fledged,
                  scalable web solution.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-section-separator3"></div>
        <div className="home-section-separator4"></div>
        <div className="home-section-separator5"></div>
        <div id="faq" className="home-faqs">
          <h2 className="home-text52 Section-Heading">
            Check frequently asked questions
          </h2>
          <div className="home-content-container4">
            <div className="home-faq1">
              <div className="home-question-container1">
                <span className="home-question1">
                  Have questions? We’ve got answers! Here are some of the most
                  common inquiries from our clients.
                </span>
              </div>
              <div className="home-answer-container1">
                <span className="home-answer1">
                  What services do you offer?
                </span>
                <span className="home-answer2">
                  At Pixel Knack Code Haven, we specialize in web development,
                  mobile application development, UI/UX design, blockchain
                  integration, API development, and database management. Our
                  goal is to create tailored solutions that meet your unique
                  needs.
                </span>
              </div>
            </div>
            <div className="home-faq2">
              <div className="home-question-container2">
                <span className="home-question2">
                  How long does it take to complete a project?
                </span>
              </div>
              <div className="home-answer-container2">
                <span className="home-answer3">
                  he timeline for project completion varies based on the
                  complexity and scope. Typically, our Basic Package takes 1-2
                  weeks, the Complex Package takes 2-4 weeks, and the
                  Professional Package can take 4-8 weeks. We’ll provide a more
                  accurate estimate during our initial consultation.
                </span>
              </div>
            </div>
            <div className="home-faq3">
              <div className="home-question-container3">
                <span className="home-question3">
                  What is your payment process?
                </span>
              </div>
              <div className="home-answer-container3">
                <span className="home-answer4">
                  We require a 50% deposit before starting the project, with the
                  remaining balance due upon completion. We accept various
                  payment methods for your convenience.
                </span>
              </div>
            </div>
            <div className="home-faq4">
              <div className="home-question-container4">
                <span className="home-question4">
                  Can I see examples of your work?
                </span>
              </div>
              <div className="home-answer-container4">
                <span className="home-answer5">
                  Absolutely! You can check out our portfolio section to see
                  some of the projects we&apos;ve completed. If you&apos;re
                  interested in a specific type of work, just let us know!
                </span>
              </div>
            </div>
            <div className="home-faq5">
              <div className="home-question-container5">
                <span className="home-question5">
                  How do you ensure the quality of your work?
                </span>
              </div>
              <div className="home-answer-container5">
                <span className="home-answer6">
                  We follow industry best practices for coding, testing, and
                  project management. We conduct regular code reviews, user
                  testing, and iterations based on feedback to ensure the
                  highest quality
                </span>
              </div>
            </div>
            <div className="home-faq6">
              <div className="home-question-container6">
                <span className="home-question6">
                  What technologies do you use?
                </span>
              </div>
              <div className="home-answer-container6">
                <span className="home-answer7">
                  We primarily use Next.js, React, Node.js, and PostgreSQL,
                  among other technologies. However, we are always open to
                  utilizing the best tools for your specific project.
                </span>
              </div>
            </div>
            <div className="home-faq7">
              <div className="home-question-container7">
                <span className="home-question7">
                  Can you work with existing code or projects?
                </span>
              </div>
              <div className="home-answer-container7">
                <span className="home-answer8">
                  Yes! We can review and improve existing projects, integrate
                  new features, or help with debugging and optimization.
                </span>
              </div>
            </div>
            <a
              href="https://github.com/pixelknack"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link20"
            >
              <div className="home-container29">
                <button className="home-cta-btn3 Anchor button">
                  <span className="home-text53">GitHub</span>
                </button>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M16 22.027v-2.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75a5.07 5.07 0 0 0-.09-3.77s-1.18-.35-3.91 1.48a13.4 13.4 0 0 0-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 0 0 5 5.797a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58v2.87"></path>
                    <path d="M9 20.027c-3 .973-5.5 0-7-3"></path>
                  </g>
                </svg>
              </div>
            </a>
          </div>
        </div>
        <div className="home-section-separator6"></div>
        <div className="home-subscribe"></div>
        <div className="home-section-separator7"></div>
        <div className="home-footer-container">
          <div className="home-footer">
            <div className="home-copyright-container">
              <svg viewBox="0 0 1024 1024" className="home-icon30">
                <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
              </svg>
              <span className="Anchor">Copyright, 2021</span>
            </div>
            <span className="home-text54">Made By Pixel Knack</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container10 {
            color: #bfbfbf;
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            font-family: 'monospace';
            flex-direction: column;
            background-image: linear-gradient(
              180deg,
              rgba(17, 17, 17, 0.81) 2%,
              rgba(0, 0, 0, 0.8) 99%
            );
          }
          .home-navbar-container {
            width: 100%;
            display: flex;
            z-index: 100;
            position: fixed;
            align-items: center;
            flex-direction: column;
            backdrop-filter: blur(10px);
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.32);
          }
          .home-navbar {
            width: 100%;
            cursor: pointer;
            height: 141px;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: center;
          }
          .home-image1 {
            width: 50px;
            height: auto;
            object-fit: cover;
            border-color: #00d5ff;
            border-style: double;
            border-width: 10px;
            border-radius: var(--dl-radius-radius-round);
          }
          .home-links-container1 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-link11 {
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .home-link12 {
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .home-link13 {
            margin-left: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .home-burger-menu {
            display: none;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-icon16 {
            width: 36px;
            height: 36px;
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-space-space-tripleunit);
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: #fff;
          }
          .home-container11 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-icon18 {
            width: 24px;
            height: 24px;
          }
          .home-links-container2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link15 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link16 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link17 {
            text-decoration: none;
          }
          .home-section-separator1 {
            width: 100%;
            height: 1px;
            display: flex;
            margin-top: var(--dl-space-space-tenunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-section-separator2 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container12 {
            gap: var(--dl-space-space-doubleunit);
            width: 100%;
            height: 100%;
            display: flex;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-left: var(--dl-space-space-tenunits);
            padding-right: var(--dl-space-space-tenunits);
            flex-direction: column;
            justify-content: center;
          }
          .home-hero {
            width: 100%;
            height: auto;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-hero-text-container {
            width: 568px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading1 {
            height: auto;
            font-family: 'Courier New';
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text14 {
            font-style: italic;
            font-family: 'Courier New';
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text15 {
            font-style: italic;
            font-family: 'Courier New';
            font-weight: 700;
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .home-cta-btn-container {
            gap: var(--dl-space-space-doubleunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-cta-btn1 {
            fill: transparent;
            color: #b7b7b7;
            width: 100%;
            box-shadow: 5px 5px 10px 0px #000000;
            text-align: center;
            border-color: #a5a5a5;
            border-radius: var(--dl-radius-radius-radius8);
            animation-name: bounce;
            animation-delay: 0s;
            animation-duration: 1000ms;
            animation-direction: normal;
            animation-iteration-count: 5;
            animation-timing-function: ease;
          }
          .home-text16 {
            width: 100%;
            font-family: 'Courier New';
          }
          .home-cta-btn2 {
            fill: transparent;
            color: #b7b7b7;
            width: 100%;
            align-self: center;
            box-shadow: 5px 5px 10px 0px #000000;
            text-align: center;
            border-color: #a5a5a5;
            border-radius: var(--dl-radius-radius-radius8);
            animation-name: bounce;
            animation-delay: 4s;
            text-decoration: none;
            animation-duration: 1000ms;
            animation-direction: normal;
            animation-iteration-count: 4;
            animation-timing-function: ease;
          }
          .home-text17 {
            width: 100%;
            font-family: 'Courier New';
          }
          .home-container13 {
            flex: 0 0 auto;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            box-shadow: 5px 5px 10px 0px #000000;
            align-items: center;
            border-color: rgba(0, 176, 201, 0.5);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            animation-name: shakeX;
            flex-direction: column;
            animation-delay: 0s;
            justify-content: center;
            backdrop=-filter: blur(10px);
            animation-duration: 10000ms;
            animation-direction: normal;
            animation-iteration-count: 1000;
            animation-timing-function: ease;
          }
          .home-container14 {
            flex: 0 0 auto;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            box-shadow: -5px 5px 10px 0px #000000;
            align-items: center;
            border-color: rgba(0, 255, 254, 0.58);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            animation-name: shakeX;
            flex-direction: column;
            animation-delay: 0s;
            backdrop-filter: blur(10px);
            justify-content: center;
            background-image: linear-gradient(
              90deg,
              rgba(252, 0, 255, 0.07) 0%,
              rgba(0, 219, 222, 0.15) 100%
            );
            animation-duration: 8000ms;
            animation-direction: normal;
            animation-iteration-count: 1000;
            animation-timing-function: ease;
          }
          .home-container15 {
            flex: 0 0 auto;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            box-shadow: 5px 5px 10px 0px #000000;
            align-items: center;
            border-color: rgba(0, 232, 255, 0.77);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            animation-name: shakeX;
            flex-direction: column;
            animation-delay: 0s;
            backdrop-filter: blur(10px);
            justify-content: center;
            background-image: linear-gradient(
              90deg,
              rgba(27, 70, 0, 0.43) 0%,
              rgba(0, 166, 11, 0.69) 100%
            );
            animation-duration: 6000ms;
            animation-direction: normal;
            animation-iteration-count: 1000;
            animation-timing-function: ease;
          }
          .home-image2 {
            width: 304px;
            height: 322px;
            box-shadow: 5px 5px 10px 0px #0e0e0e;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
            animation-name: shakeY;
            animation-delay: 0s;
            animation-duration: 30s;
            animation-direction: normal;
            animation-iteration-count: 1000;
            animation-timing-function: ease;
          }
          .home-features {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .home-heading-container1 {
            width: 45%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-text18 {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Arial Black';
            font-weight: 700;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-cards-container {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            border-radius: 10px;
            flex-direction: row;
            justify-content: space-between;
            background-color: #272727;
          }
          .home-card1 {
            width: 30%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-icon-container1 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .home-icon20 {
            fill: var(--dl-color-gray-900);
            width: 100px;
            height: 100px;
            min-width: 100px;
            min-height: 100px;
          }
          .home-content-container1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading2 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text19 {
            text-align: center;
            font-family: 'Courier New';
          }
          .home-card2 {
            width: 30%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-icon-container2 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .home-icon22 {
            fill: var(--dl-color-gray-900);
            width: 100px;
            height: 100px;
            min-width: 100px;
            min-height: 100px;
          }
          .home-content-container2 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading3 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text20 {
            text-align: center;
            font-family: 'Courier New';
          }
          .home-card3 {
            width: 30%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-icon-container3 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .home-icon24 {
            fill: var(--dl-color-gray-900);
            width: 100px;
            height: 100px;
            min-width: 100px;
            min-height: 100px;
          }
          .home-content-container3 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading4 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text21 {
            text-align: center;
            font-family: 'Courier New';
          }
          .home-pricing {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: #202020;
          }
          .home-heading-container2 {
            width: 45%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .home-text22 {
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-text23 {
            font-style: italic;
            text-align: center;
            font-family: 'Courier New';
            font-weight: 700;
          }
          .home-pricing-card-container {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-card4 {
            width: 30%;
            display: flex;
            min-width: 350px;
            align-items: center;
            flex-direction: column;
          }
          .home-card-heading1 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: 20px;
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: #585858;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-type1 {
            color: rgb(247, 247, 247);
            font-size: x-large;
            font-family: 'Courier New';
            font-weight: 700;
            line-height: 1.55;
            text-shadow: 2px 2px 5px black;
            margin-bottom: var(--dl-space-space-tripleunit);
            text-transform: capitalize;
            text-decoration: none;
          }
          .home-price1 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            text-align: center;
            font-family: 'Arial';
            font-weight: 700;
            text-shadow: 2px 2px 3px black;
            text-transform: uppercase;
          }
          .home-text26 {
            font-size: 30px;
            font-family: 'Courier New';
          }
          .home-card-content1 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .home-feature1 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-name1 {
            font-family: 'Courier New';
          }
          .home-feature2 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-name2 {
            font-family: 'Courier New';
          }
          .home-feature3 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-name3 {
            font-family: 'Courier New';
          }
          .home-feature4 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
          }
          .home-name4 {
            font-family: 'Courier New';
          }
          .home-choose {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-fourunits);
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: #28b500;
            border-width: 1px;
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-tenunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            text-decoration: none;
            background-color: var(--dl-color-gray-black);
          }
          .home-text27 {
            padding: var(--dl-space-space-tripleunit);
            font-family: 'Courier New';
            border-radius: var(--dl-radius-radius-radius8);
            background-color: rgba(8, 8, 8, 0.37);
          }
          .home-card5 {
            width: 30%;
            display: flex;
            min-width: 350px;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
          }
          .home-card-heading2 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: 19px;
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1579547945413-497e1b99dac0?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGdyYWRpZW50fGVufDB8fHx8MTcyOTkxMDkxNXww&ixlib=rb-4.0.3&w=500');
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-type2 {
            color: rgb(247, 247, 247);
            font-size: x-large;
            font-family: 'Courier New';
            font-weight: 700;
            line-height: 1.55;
            text-shadow: 2px 2px 5px black;
            margin-bottom: var(--dl-space-space-tripleunit);
            text-transform: capitalize;
            text-decoration: none;
          }
          .home-price2 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            text-align: center;
            font-family: 'Arial';
            font-weight: 700;
            text-shadow: 2px 2px 3px black;
            text-transform: uppercase;
          }
          .home-text31 {
            font-size: 30px;
            font-family: 'Courier New';
          }
          .home-card-content2 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .home-container16 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-text32 {
            font-family: 'Courier New';
          }
          .home-container17 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-text33 {
            font-family: 'Courier New';
          }
          .home-container18 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-text34 {
            font-family: 'Courier New';
          }
          .home-container19 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
          }
          .home-text35 {
            font-family: 'Courier New';
          }
          .home-container20 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
          }
          .home-text36 {
            font-family: 'Courier New';
          }
          .home-container21 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
          }
          .home-text37 {
            font-family: 'Courier New';
          }
          .home-link18 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-fourunits);
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: #00d8f9;
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-tenunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            text-decoration: none;
            background-color: var(--dl-color-gray-black);
          }
          .home-text38 {
            padding: var(--dl-space-space-tripleunit);
            font-family: 'Courier New';
            border-radius: var(--dl-radius-radius-radius4);
            background-color: rgba(10, 10, 10, 0.39);
          }
          .home-card6 {
            width: 30%;
            display: flex;
            min-width: 350px;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
          }
          .home-card-heading3 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: 20px;
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            backdrop-filter: blur(10px);
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1636690513351-0af1763f6237?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE4fHxwcmVtaXVtfGVufDB8fHx8MTcyOTkxMDQ3MHww&ixlib=rb-4.0.3&w=500');
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-type3 {
            color: #f7f7f7;
            font-size: x-large;
            font-family: 'Courier New';
            font-weight: 700;
            line-height: 1.55;
            text-shadow: 2px 2px 5px black;
            margin-bottom: var(--dl-space-space-tripleunit);
            text-transform: capitalize;
            text-decoration: none;
          }
          .home-price3 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            text-align: center;
            font-family: 'Arial';
            font-weight: 700;
            text-shadow: 2px 2px 3px black;
            text-transform: uppercase;
          }
          .home-text41 {
            font-size: 30px;
            font-family: 'Courier New';
          }
          .home-card-content3 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .home-container22 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-text42 {
            font-family: 'Courier New';
          }
          .home-container23 {
            width: 100%;
            display: flex;
            align-items: center;
            font-family: 'Courier New';
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-container24 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-text44 {
            font-family: 'Courier New';
          }
          .home-container25 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
          }
          .home-text45 {
            font-style: normal;
            font-family: 'Courier New';
            font-weight: 700;
          }
          .home-text47 {
            font-size: 16px;
            line-height: 1.55;
            letter-spacing: 1px;
            text-transform: none;
            text-decoration: none;
          }
          .home-container26 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
          }
          .home-text48 {
            font-family: 'Courier New';
          }
          .home-container27 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
          }
          .home-text49 {
            font-family: 'Courier New';
          }
          .home-container28 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
          }
          .home-text50 {
            font-family: 'Courier New';
          }
          .home-link19 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-fourunits);
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: #eda000;
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-tenunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            text-decoration: none;
            background-color: var(--dl-color-gray-black);
          }
          .home-text51 {
            padding: var(--dl-space-space-doubleunit);
            font-family: 'Courier New';
            border-radius: var(--dl-radius-radius-radius8);
            background-color: #272727;
          }
          .home-section-separator3 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-section-separator4 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-section-separator5 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-faqs {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
          }
          .home-text52 {
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-content-container4 {
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-faq1 {
            width: 85%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-question-container1 {
            width: 100%;
            align-self: center;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-question1 {
            font-size: 18px;
          }
          .home-answer-container1 {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-answer1 {
            font-family: 'Courier New';
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-answer2 {
            font-family: 'Courier New';
          }
          .home-faq2 {
            width: 85%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-question-container2 {
            width: 100%;
            align-self: center;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-question2 {
            font-size: 18px;
          }
          .home-answer-container2 {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-answer3 {
            font-family: 'Courier New';
          }
          .home-faq3 {
            width: 85%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-question-container3 {
            width: 100%;
            align-self: center;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-question3 {
            font-size: 18px;
          }
          .home-answer-container3 {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-answer4 {
            font-family: 'Courier New';
          }
          .home-faq4 {
            width: 85%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-question-container4 {
            width: 100%;
            align-self: center;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-question4 {
            font-size: 18px;
          }
          .home-answer-container4 {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-answer5 {
            font-family: 'Courier New';
          }
          .home-faq5 {
            width: 85%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-question-container5 {
            width: 100%;
            align-self: center;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-question5 {
            font-size: 18px;
          }
          .home-answer-container5 {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-answer6 {
            font-family: 'Courier New';
          }
          .home-faq6 {
            width: 85%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-question-container6 {
            width: 100%;
            align-self: center;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-question6 {
            font-size: 18px;
          }
          .home-answer-container6 {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-answer7 {
            font-family: 'Courier New';
          }
          .home-faq7 {
            width: 85%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-question-container7 {
            width: 100%;
            align-self: center;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-question7 {
            font-size: 18px;
          }
          .home-answer-container7 {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-answer8 {
            font-family: 'Courier New';
          }
          .home-link20 {
            display: contents;
          }
          .home-container29 {
            flex: 0 0 auto;
            width: 200px;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            border-color: #7e7e7e;
            border-width: 1px;
            border-radius: 20px;
            justify-content: center;
            text-decoration: none;
          }
          .home-cta-btn3 {
            fill: transparent;
            color: #b7b7b7;
            width: auto;
            cursor: pointer;
            align-self: center;
            text-align: center;
            padding-top: var(--dl-space-space-unit);
            border-color: #a5a5a5;
            border-width: 0px;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .home-text53 {
            width: 100%;
            font-family: 'Courier New';
          }
          .home-section-separator6 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-subscribe {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-section-separator7 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-footer-container {
            color: var(--dl-color-gray-900);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
            background-color: #232323;
          }
          .home-copyright-container {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon30 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-text54 {
            font-family: 'Courier New';
          }
          @media (max-width: 991px) {
            .home-hero {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .home-hero-text-container {
              width: 80%;
              align-items: center;
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .home-heading1 {
              text-align: center;
            }
            .home-text10 {
              text-align: center;
            }
            .home-text11 {
              text-align: center;
            }
            .home-text12 {
              text-align: center;
            }
            .home-text14 {
              text-align: center;
            }
            .home-text15 {
              text-align: center;
            }
            .home-image2 {
              width: 100%;
            }
            .home-text18 {
              text-align: center;
            }
            .home-pricing-card-container {
              justify-content: center;
            }
            .home-card4 {
              margin-right: var(--dl-space-space-fourunits);
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .home-card5 {
              margin-bottom: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .home-navbar {
              position: relative;
              flex-direction: row;
              justify-content: space-between;
            }
            .home-links-container1 {
              display: none;
            }
            .home-burger-menu {
              display: flex;
              padding: var(--dl-space-space-halfunit);
              margin-left: var(--dl-space-space-tripleunit);
              border-radius: var(--dl-radius-radius-radius4);
              background-color: var(--dl-color-gray-black);
            }
            .home-icon16 {
              fill: var(--dl-color-gray-white);
            }
            .home-heading1 {
              font-size: 1.5em;
              align-self: flex-start;
              text-align: left;
              font-family: Courier New;
            }
            .home-text10 {
              font-family: Overpass;
              font-weight: 900;
              line-height: 1.22;
              text-transform: none;
              text-decoration: none;
            }
            .home-text11 {
              font-family: Overpass;
              font-weight: 900;
              line-height: 1.22;
              text-transform: none;
              text-decoration: none;
            }
            .home-text12 {
              font-family: Overpass;
              font-weight: 900;
              line-height: 1.22;
              text-transform: none;
              text-decoration: none;
            }
            .home-text14 {
              align-self: flex-start;
              text-align: left;
            }
            .home-text15 {
              text-align: left;
            }
            .home-cta-btn1 {
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .home-cta-btn2 {
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .home-heading-container1 {
              width: 100%;
            }
            .home-cards-container {
              align-items: center;
              flex-direction: column;
            }
            .home-card1 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-card2 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-card3 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-heading-container2 {
              width: 100%;
            }
            .home-card4 {
              margin-right: 0px;
            }
            .home-content-container4 {
              width: 100%;
              flex-direction: column;
            }
            .home-faq1 {
              width: 100%;
            }
            .home-faq2 {
              width: 100%;
            }
            .home-faq3 {
              width: 100%;
            }
            .home-faq4 {
              width: 100%;
            }
            .home-faq5 {
              width: 100%;
            }
            .home-faq6 {
              width: 100%;
            }
            .home-faq7 {
              width: 100%;
            }
            .home-cta-btn3 {
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .home-subscribe {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .home-navbar {
              height: auto;
              padding: var(--dl-space-space-doubleunit);
              flex-direction: row;
              justify-content: space-between;
            }
            .home-burger-menu {
              margin-left: var(--dl-space-space-doubleunit);
            }
            .home-mobile-menu {
              display: none;
              background-color: #020202;
            }
            .home-icon18 {
              fill: #d9d9d9;
            }
            .home-container12 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-hero-text-container {
              width: 100%;
            }
            .home-heading1 {
              width: 100%;
              font-size: 2em;
              text-align: left;
              font-family: Courier New;
            }
            .home-text10 {
              font-family: Overpass;
              font-weight: 900;
              line-height: 1.22;
              text-transform: none;
              text-decoration: none;
            }
            .home-text11 {
              font-family: Overpass;
              font-weight: 900;
              line-height: 1.22;
              text-transform: none;
              text-decoration: none;
            }
            .home-text12 {
              font-family: Overpass;
              font-weight: 900;
              line-height: 1.22;
              text-transform: none;
              text-decoration: none;
            }
            .home-text15 {
              text-align: left;
            }
            .home-cta-btn-container {
              gap: var(--dl-space-space-unit);
              width: 100%;
            }
            .home-cta-btn1 {
              width: 100%;
              margin-right: var(--dl-space-space-halfunit);
            }
            .home-cta-btn2 {
              width: 100%;
              margin-right: var(--dl-space-space-halfunit);
            }
            .home-text18 {
              font-size: 2.5rem;
            }
            .home-card1 {
              width: 100%;
            }
            .home-card2 {
              width: 100%;
            }
            .home-card3 {
              width: 100%;
            }
            .home-text22 {
              text-align: center;
            }
            .home-content-container4 {
              padding-left: 0px;
            }
            .home-container29 {
              gap: var(--dl-space-space-doubleunit);
            }
            .home-cta-btn3 {
              width: auto;
              margin-right: var(--dl-space-space-halfunit);
              padding-left: 0px;
              padding-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
