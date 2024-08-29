import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Solutions = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: false });
  }, []);

  return (
    <div className='w-full h-full relative section-padding bg-[#333333]'>
      <section className="big-label-text flex items-center justify-center">
        <div className="w-[90%]">
          <div className="mb-14 | sm:mb-16 md:mb-20 | lg:mb-24">
            <span className="smallHeading smallHeading--left opacity-50 text-white">
            Bespoke Solutions for Optimal Results
            </span>
            <h2
              className="sectionHeading sectionHeading--medium text-white"
              style={{
                margin: '0',
                textAlign: 'left'
              }}
            >
            Our consulting agency delivers customized strategies to tackle your unique challenges. From optimizing processes to implementing innovative technology, we turn your vision into reality with expert guidance.{' '}
            </h2>
          </div>
          <div
            className="relative flex flex-col gap-x-16 justify-between border-t border-white border-opacity-25 mt-9 mb-14 pt-8 | sm:flex-row sm:mb-16 sm:pt-10 | md:mb-20 md:pt-16 | lg:mb-24 lg:pt-36 | xl:mb-44 xl:pt-52"
            style={{
              maxWidth: '1172px'
            }}
          >
            <span
              className="absolute text-black font-medium z-0 top-0 left-0 leading-none text-7xl | sm:text-8xl | md:text-9xl lg:text-[285px]"
              data-aos="fade-in"
            >
               #1
            </span>
            <h2
              className="big-label-text__heading text-white font-medium relative sectionHeading sectionHeading--left sectionHeading--big z-10 w-5/12 lg:max-w-xl mb-8 sm:m-0"
              style={{
                maxWidth: '582px'
              }}
              data-aos="fade-right"
            >
            Governance advisory
            </h2>
            <div
              className="Wysiwyg Wysiwyg--medium  Wysiwyg--light-bg w-full z-10 | lg:w-5/12"
              data-aos="fade-left"
            >
              <p className='text-white'>
              We guide boards and management teams in frameworks, team processes and leadership dynamics to deliver sustainable value.{' '}
                <a
                  href="https://support.google.com/merchants/answer/7558973?hl=en-GB"
                  rel="noopener"
                  target="_blank"
                >
                  {/* article explains */}
                </a>
              </p>
            </div>
          </div>

          <div
            className="relative flex flex-col gap-x-16 justify-between border-t border-white border-opacity-25 mt-9 mb-14 pt-8 | sm:flex-row sm:mb-16 sm:pt-10 | md:mb-20 md:pt-16 | lg:mb-24 lg:pt-36 | xl:mb-44 xl:pt-52"
            style={{
              maxWidth: '1172px'
            }}
          >
            <span
              className="absolute text-black font-medium z-0 top-0 left-0 leading-none text-7xl | sm:text-8xl | md:text-9xl lg:text-[285px]"
              data-aos="fade-in"
            >
              Myth #2
            </span>
            <h2
              className="big-label-text__heading text-white font-medium relative sectionHeading sectionHeading--left sectionHeading--big z-10 w-5/12 lg:max-w-xl mb-8 sm:m-0"
              style={{
                maxWidth: '582px'
              }}
              data-aos="fade-right"
            >
              Financial services advisory
            </h2>
            <div
              className="Wysiwyg Wysiwyg--medium Wysiwyg--light-bg w-full z-10 | lg:w-5/12"
              data-aos="fade-left"
            >
              <p className='text-white'>
              Get market-driven expertise to achieve your goals in banking, insurance, capital markets, and investment management.{' '}
                <a
                  href="https://www.youtube.com/watch?v=jHc_NIr8CPQ"
                  rel="noopener"
                  target="_blank"
                >
                  {/* Google’s words */}
                </a>
                {/* {' '}not ours. */}
              </p>
              <p className='text-white'>
                {/* A simple way to dispel this myth is to run a trial with us and let the numbers do the talking. */}
              </p>
            </div>
          </div>

        
        
          <div
            className="relative flex flex-col gap-x-16 justify-between border-t border-white border-opacity-25 mt-9 mb-14 pt-8 | sm:flex-row sm:mb-16 sm:pt-10 | md:mb-20 md:pt-16 | lg:mb-24 lg:pt-36 | xl:mb-44 xl:pt-52"
            style={{
              maxWidth: '1172px'
            }}
          >
            <span
              className="absolute text-black font-medium z-0 top-0 left-0 leading-none text-7xl | sm:text-8xl | md:text-9xl lg:text-[285px]"
              data-aos="fade-in"
            >
              Myth #3
            </span>
            <h2
              className="text-white big-label-text__heading font-medium relative sectionHeading sectionHeading--left sectionHeading--big z-10 w-5/12 lg:max-w-xl mb-8 sm:m-0"
              style={{
                maxWidth: '582px'
              }}
              data-aos="fade-right"
            >
             Business risk services
            </h2>
            <div
              className="Wysiwyg Wysiwyg--medium Wysiwyg--light-bg w-full z-10 | lg:w-5/12"
              data-aos="fade-left"
            >
              <p className='text-white'>
              Our market-driven expertise helps firms keep growing and manage risk in an evolving regulatory landscape.{' '}
                <a
                  href="https://www.awin.com/gb/black-friday/preparing-for-peak-css-opportunity-retail-brands"
                  rel="noopener"
                  target="_blank"
                >
                  {/* great article */}
                </a>
                {/* {' '}on this where they show that advertisers with two CSS partners delivered 2.5x additional growth over a 12-month period vs advertisers with only one CSS partner. */}
              </p>
            </div>
          </div>

          <div
            className="relative flex flex-col gap-x-16 justify-between border-t border-white border-opacity-25 mt-9 mb-14 pt-8 | sm:flex-row sm:mb-16 sm:pt-10 | md:mb-20 md:pt-16 | lg:mb-24 lg:pt-36 | xl:mb-44 xl:pt-52"
            style={{
              maxWidth: '1172px'
            }}
          >
            <span
              className="absolute text-black font-medium z-0 top-0 left-0 leading-none text-7xl | sm:text-8xl | md:text-9xl lg:text-[285px]"
              data-aos="fade-in"
            >
              Myth #4
            </span>
            <h2
              className="text-white big-label-text__heading font-medium relative sectionHeading sectionHeading--left sectionHeading--big z-10 w-5/12 lg:max-w-xl mb-8 sm:m-0"
              style={{
                maxWidth: '582px'
              }}
              data-aos="fade-right"
            >
            Economic consulting
            </h2>
            <div
              className="Wysiwyg Wysiwyg--medium Wysiwyg--light-bg w-full z-10 | lg:w-5/12"
              data-aos="fade-left"
            >
              <p className='text-white'>
              Bespoke guidance grounded in complex economic theory and practical sector insight to help you make the right decisions.
                <a
                  href="https://www.awin.com/gb/black-friday/preparing-for-peak-css-opportunity-retail-brands"
                  rel="noopener"
                  target="_blank"
                >
                  {/* great article */}
                </a>
                {/* {' '}on this where they show that advertisers with two CSS partners delivered 2.5x additional growth over a 12-month period vs advertisers with only one CSS partner. */}
              </p>
            </div>
          </div>

          <div
            className="relative flex flex-col gap-x-16 justify-between border-t border-white border-opacity-25 mt-9 mb-14 pt-8 | sm:flex-row sm:mb-16 sm:pt-10 | md:mb-20 md:pt-16 | lg:mb-24 lg:pt-36 | xl:mb-44 xl:pt-52"
            style={{
              maxWidth: '1172px'
            }}
          >
            <span
              className="absolute text-black font-medium z-0 top-0 left-0 leading-none text-7xl | sm:text-8xl | md:text-9xl lg:text-[285px]"
              data-aos="fade-in"
            >
              Myth #5
            </span>
            <h2
              className="text-white big-label-text__heading font-medium relative sectionHeading sectionHeading--left sectionHeading--big z-10 w-5/12 lg:max-w-xl mb-8 sm:m-0"
              style={{
                maxWidth: '582px'
              }}
              data-aos="fade-right"
            >
            Transaction advisory services
            </h2>
            <div
              className="Wysiwyg Wysiwyg--medium Wysiwyg--light-bg w-full z-10 | lg:w-5/12"
              data-aos="fade-left"
            >
              <p className='text-white'>
              Whether buying or selling, we help you get the deal done with our comprehensive range of transaction advisory services.
                <a
                  href="https://www.awin.com/gb/black-friday/preparing-for-peak-css-opportunity-retail-brands"
                  rel="noopener"
                  target="_blank"
                >
                  {/* great article */}
                </a>
                {/* {' '}on this where they show that advertisers with two CSS partners delivered 2.5x additional growth over a 12-month period vs advertisers with only one CSS partner. */}
              </p>
            </div>
          </div>

          <div
            className="relative flex flex-col gap-x-16 justify-between border-t border-white border-opacity-25 mt-9 mb-14 pt-8 | sm:flex-row sm:mb-16 sm:pt-10 | md:mb-20 md:pt-16 | lg:mb-24 lg:pt-36 | xl:mb-44 xl:pt-52"
            style={{
              maxWidth: '1172px'
            }}
          >
            <span
              className="absolute text-black font-medium z-0 top-0 left-0 leading-none text-7xl | sm:text-8xl | md:text-9xl lg:text-[285px]"
              data-aos="fade-in"
            >
              Myth #6
            </span>
            <h2
              className="text-white big-label-text__heading font-medium relative sectionHeading sectionHeading--left sectionHeading--big z-10 w-5/12 lg:max-w-xl mb-8 sm:m-0"
              style={{
                maxWidth: '582px'
              }}
              data-aos="fade-right"
            >
            Financial accounting advisory services (FAAS)
            </h2>
            <div
              className="Wysiwyg Wysiwyg--medium Wysiwyg--light-bg w-full z-10 | lg:w-5/12"
              data-aos="fade-left"
            >
              <p className='text-white'>
              Our FAAS team can support your finance function with the flexible resource they need to get results.
                <a
                  href="https://www.awin.com/gb/black-friday/preparing-for-peak-css-opportunity-retail-brands"
                  rel="noopener"
                  target="_blank"
                >
                  {/* great article */}
                </a>
                {/* {' '}on this where they show that advertisers with two CSS partners delivered 2.5x additional growth over a 12-month period vs advertisers with only one CSS partner. */}
              </p>
            </div>
          </div>


          <div
            className="relative flex flex-col gap-x-16 justify-between border-t border-white border-opacity-25 mt-9 mb-14 pt-8 | sm:flex-row sm:mb-16 sm:pt-10 | md:mb-20 md:pt-16 | lg:mb-24 lg:pt-36 | xl:mb-44 xl:pt-52"
            style={{
              maxWidth: '1172px'
            }}
          >
            <span
              className="absolute text-black font-medium z-0 top-0 left-0 leading-none text-7xl | sm:text-8xl | md:text-9xl lg:text-[285px]"
              data-aos="fade-in"
            >
              Myth #7
            </span>
            <h2
              className="text-white big-label-text__heading font-medium relative sectionHeading sectionHeading--left sectionHeading--big z-10 w-5/12 lg:max-w-xl mb-8 sm:m-0"
              style={{
                maxWidth: '582px'
              }}
              data-aos="fade-right"
            >
   Insolvency and global asset recovery
            </h2>
            <div
              className="Wysiwyg Wysiwyg--medium Wysiwyg--light-bg w-full z-10 | lg:w-5/12"
              data-aos="fade-left"
            >
              <p className='text-white'>
              We provide asset tracing and seamless cross-border global recovery for clients.
                <a
                  href="https://www.awin.com/gb/black-friday/preparing-for-peak-css-opportunity-retail-brands"
                  rel="noopener"
                  target="_blank"
                >
                  {/* great article */}
                </a>
                {/* {' '}on this where they show that advertisers with two CSS partners delivered 2.5x additional growth over a 12-month period vs advertisers with only one CSS partner. */}
              </p>
            </div>
          </div>

          <div
            className="relative flex flex-col gap-x-16 justify-between border-t border-white border-opacity-25 mt-9 mb-14 pt-8 | sm:flex-row sm:mb-16 sm:pt-10 | md:mb-20 md:pt-16 | lg:mb-24 lg:pt-36 | xl:mb-44 xl:pt-52"
            style={{
              maxWidth: '1172px'
            }}
          >
            <span
              className="absolute text-black font-medium z-0 top-0 left-0 leading-none text-7xl | sm:text-8xl | md:text-9xl lg:text-[285px]"
              data-aos="fade-in"
            >
              Myth #8
            </span>
            <h2
              className="text-white big-label-text__heading font-medium relative sectionHeading sectionHeading--left sectionHeading--big z-10 w-5/12 lg:max-w-xl mb-8 sm:m-0"
              style={{
                maxWidth: '582px'
              }}
              data-aos="fade-right"
            >
             Forensic and investigation services
            </h2>
            <div
              className="Wysiwyg Wysiwyg--medium Wysiwyg--light-bg w-full z-10 | lg:w-5/12"
              data-aos="fade-left"
            >
              <p className='text-white'>
              Market-driven expertise in investigations, dispute resolution and digital forensics.
                <a
                  href="https://www.awin.com/gb/black-friday/preparing-for-peak-css-opportunity-retail-brands"
                  rel="noopener"
                  target="_blank"
                >
                  {/* great article */}
                </a>
                {/* {' '}on this where they show that advertisers with two CSS partners delivered 2.5x additional growth over a 12-month period vs advertisers with only one CSS partner. */}
              </p>
            </div>
          </div>

          <div
            className="relative flex flex-col gap-x-16 justify-between border-t border-white border-opacity-25 mt-9 mb-14 pt-8 | sm:flex-row sm:mb-16 sm:pt-10 | md:mb-20 md:pt-16 | lg:mb-24 lg:pt-36 | xl:mb-44 xl:pt-52"
            style={{
              maxWidth: '1172px'
            }}
          >
            <span
              className="absolute text-black font-medium z-0 top-0 left-0 leading-none text-7xl | sm:text-8xl | md:text-9xl lg:text-[285px]"
              data-aos="fade-in"
            >
              Myth #9
            </span>
            <h2
              className="text-white big-label-text__heading font-medium relative sectionHeading sectionHeading--left sectionHeading--big z-10 w-5/12 lg:max-w-xl mb-8 sm:m-0"
              style={{
                maxWidth: '582px'
              }}
              data-aos="fade-right"
            >
            Transformation consulting
            </h2>
            <div
              className="Wysiwyg Wysiwyg--medium Wysiwyg--light-bg w-full z-10 | lg:w-5/12"
              data-aos="fade-left"
            >
              <p className='text-white'>
              Is business transformation a priority for your organisation? Our expert insight and guidance can help you achieve it.
                <a
                  href="https://www.awin.com/gb/black-friday/preparing-for-peak-css-opportunity-retail-brands"
                  rel="noopener"
                  target="_blank"
                >
                  {/* great article */}
                </a>
                {/* {' '}on this where they show that advertisers with two CSS partners delivered 2.5x additional growth over a 12-month period vs advertisers with only one CSS partner. */}
              </p>
            </div>
          </div>

        </div>
      </section>
      <footer className="md:absolute bottom-0 w-full items-center justify-center mx-auto text-white">
        <div className="w-full md:flex md:flex-col items-center justify-center">
          <div className="flex flex-col md:flex-row md:justify-between items-center text-18 md:text-5">
            <div className="flex flex-col md:flex-row md:mb-0">
              <div className="mb-8 md:mr-5">
                ©
                <span className="mr-1.5 ml-0.5 uppercase" itemProp="copyrightHolder">
                  Unicepta
                </span>
                <span itemProp="copyrightYear">2024</span>
              </div>
              <ul className="space-y-3 md:flex md:space-x-5 md:space-y-0">
                <li>
                  <a href="/contact.html">Contact</a>
                </li>
                <li>
                  <a href="/privacy-policy.html">Privacy Policy</a>
                </li>
                <li>
                  <a href="/imprint.html">Imprint</a>
                </li>
                <li>
                  <a href="/newsletter.html">Newsletter</a>
                </li>
                <li>
                  <a href="/anti-slavery-policy.html">Anti-Slavery Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Solutions;
