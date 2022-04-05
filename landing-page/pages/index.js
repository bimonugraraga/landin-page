import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import '../styles/Navbar.css'

export default function Home() {
  return (
    <div className='HomePage'>
      {/* Navbar */}
      <div className="navbar bg-base-100 forNav">
        <a className="btn btn-ghost normal-case text-xl">Sandbox</a>
        <div>
          <a className='btn btn-ghost normal-case text-l'>About</a>
          <a className='btn btn-ghost normal-case text-l'>Carrer</a>
          <a className='btn btn-ghost normal-case text-l'>Documentation</a>
        </div>
        <a className='btn btn-ghost normal-case text-l'>EN</a>
      </div>


      <div className='firstContent'>
        {/* <div className='img1 '>
        </div> */}
        <img src='https://github.com/raflysyahdana/ProgateA17/blob/main/img/intro.png?raw=true' className='w-5/12 sm:w-1/4 md:w-1/4 lg:w-5/12' />
        <div className='content1'>
          <h1 className='text-3xl font-bold title'>GROW YOUR OWN BUSSINESS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      <div className='secondContent'>
        <div className='headContent2'>
          <h3 className='text-2xl font-bold fontCont2'>The service we offer is specifically designed to meet your needs.</h3>
        </div>

        <div className='cardContent'>
          <div className="member-content">
              <img src="https://media.istockphoto.com/vectors/magnifier-flat-icon-vector-illustration-vector-id829878366?b=1&k=20&m=829878366&s=612x612&w=0&h=yBUgYQFMrkoFK1s-MJ_3cehME9lu7HQcgov8c078phc=" alt="profile" className='w-24 sm:w-16 md:w-20 lg:w-24'/>
              <h5 className='text-l font-bold fontCont2'>SED Services</h5>
              <p>Lorem ipsum is the best</p>
          </div>
          <div className="member-content">
              <img src="https://media.istockphoto.com/vectors/magnifier-flat-icon-vector-illustration-vector-id829878366?b=1&k=20&m=829878366&s=612x612&w=0&h=yBUgYQFMrkoFK1s-MJ_3cehME9lu7HQcgov8c078phc=" alt="profile" className='w-24 sm:w-16 md:w-20 lg:w-24'/>
              <h5 className='text-l font-bold fontCont2'>Web Design</h5>
              <p>Lorem ipsum is the best</p>
          </div>
          <div className="member-content">
              <img src="https://media.istockphoto.com/vectors/magnifier-flat-icon-vector-illustration-vector-id829878366?b=1&k=20&m=829878366&s=612x612&w=0&h=yBUgYQFMrkoFK1s-MJ_3cehME9lu7HQcgov8c078phc=" alt="profile" className='w-24 sm:w-16 md:w-20 lg:w-24'/>
              <h5 className='text-l font-bold fontCont2'>Social Engagement</h5>
              <p>Lorem ipsum is the best</p>
          </div>
          <div className="member-content">
              <img src="https://media.istockphoto.com/vectors/magnifier-flat-icon-vector-illustration-vector-id829878366?b=1&k=20&m=829878366&s=612x612&w=0&h=yBUgYQFMrkoFK1s-MJ_3cehME9lu7HQcgov8c078phc=" alt="profile" className='w-24 sm:w-16 md:w-20 lg:w-24'/>
              <h5 className='text-l font-bold fontCont2'>Contact Marketing</h5>
              <p>Lorem ipsum is the best</p>
          </div>
        </div>
      </div>

      <div className='thirdContent'>
        {/* <div className='img1 '>
        </div> */}
        <div className='content3'>
          <h1 className='text-3xl font-bold title'>Wonder how much faster your website can go? Easily checkout your SEO now.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <img src='https://arinurrizki.github.io/ProgateA17/img/img%203.png' className='w-4/12 sm:w-1/4 md:w-1/4 lg:w-4/12' />
      </div>

      <div className='fourthContent'>
        {/* <div className='img1 '>
        </div> */}
        <img src='https://arinurrizki.github.io/ProgateA17/img/img.png' className='w-4/12 sm:w-1/4 md:w-1/4 lg:w-4/12' />
        <div className='content4'>
          <h1 className='text-3xl font-bold title'>Let's make something great together. We are trusted by  over 5000+ clients.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

    <div className="container w-full">
        <div className="contact-container">
            
            <h1 className="btn btn-ghost normal-case text-2xl forFooter">Sandbox</h1>
            <div className="contact-sosmed" id="kontak">
                <h3 className='forFooter'>Follow Our Social Media</h3>
                <div className="contact-sosmed2" >

                  <div className="sosmed-icon">
                      <img src="https://arinurrizki.github.io/ProgateA17/img/facebook.png" alt="telegram" className='w-12 sm:w-12 md:w-12 lg:w-12'/>
                  </div>
                  <div className="sosmed-icon">
                      <img src="https://arinurrizki.github.io/ProgateA17/img/instagram.png" alt="linkedin" className='w-12 sm:w-12 md:w-12 lg:w-12'/>
                  </div>
                  <div className="sosmed-icon">
                      <img src="https://arinurrizki.github.io/ProgateA17/img/linkedin.png" alt="instagram" className='w-12 sm:w-12 md:w-12 lg:w-12'/>
                  </div>
                  <div className="sosmed-icon">
                      <img src="https://arinurrizki.github.io/ProgateA17/img/telegram.png" alt="facebook" className='w-12 sm:w-12 md:w-12 lg:w-12'/>
                  </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
