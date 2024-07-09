// package photos
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import trip1 from './assets/trip1.jpg'
import trip3 from './assets/trip3.png'
import trip4 from './assets/trip4.png'
import img1 from './assets/1.png'
import img2 from './assets/2.jpg'
import img3 from './assets/3.jpg'
import img4 from './assets/4.jpg'
import img5 from './assets/5.jpg'
import img6 from './assets/6.jpg'
import img7 from './assets/7.jpg'
import img8 from './assets/8.jpg'
import img9 from './assets/9.jpg'
import img10 from './assets/10.jpg'



// package photos

// destination photos
import dest1 from './assets/dest1.jpg'
import dest2 from './assets/dest2.jpg'
import dest3 from './assets/dest3.jpg'
// destination photos

// brand icon and logo 
// brand icon and logo 
import logo1 from './assets/logo1.png'
import './App.css'



function App() {
    
    
    const [headerClass, setHeaderClass] = useState();
    const [menuIcon, setMenuIcon] = useState('bx bx-menu');
    const [navbar, setNavbar] = useState('navbar');

    const devName = '<Ratan>'

    useEffect(() => {
        const handleScroll = () => {
            // Your scroll event logic here
            if (window.scrollY > 0) {
                setHeaderClass('stick');
                setMenuIcon('bx bx-menu');
                setNavbar('navbar');
                console.log('stick');
            } else {
                setHeaderClass('');
                console.log('non-stick');
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const menuClick = () => {
        if (menuIcon === 'bx bx-menu' && navbar === 'navbar') {
            setMenuIcon('bx bx-x');
            setNavbar('navbar open');
        } else {
            setMenuIcon('bx bx-menu');
            setNavbar('navbar');
        }

    } 

    return (
        
        <div>
            {/* Header Section */}
            <header className={headerClass}>
                <a href="" className="logo"> <img src = {logo1} alt="" /> </a>
                <div className={menuIcon} onClick={menuClick} id='menu-icon'></div>

                <ul className={navbar}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#package">Packages</a></li>
                    <li><a href="#destination">Destination</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </header>
            
            {/* Home Section */}
            <section className="home" id="home">
                <div className="home-text">
                    <h1> Company <br /> Travel & Tours </h1>
                    <p id='para'>“The world is a book and those who do not travel <br /> read only one page.”</p>
                    <a href="" className="home-btn">Let's go now</a>
                </div>
            </section>
            {/* container */}
            <section className="container">
                <div className="text">
                    <h2>Start Your Vacation <br /> with Lots of Services!</h2>
                </div>
                <div className="row-items">
                    {/* box */}
                    <div className="container-box">
                        <div className="container-img">
                            <img src={trip1} alt="Air Trip" />
                        </div>
                        <h4>Air Trip</h4>
                        <p>150 places</p>
                    </div>
                    {/* box */}
                    <div className="container-box">
                        <div className="container-img">
                            <img src={trip3} alt="Air Trip" />
                        </div>
                        <h4>Summer Trip</h4>
                        <p>145 places</p>
                    </div>
                    {/* box */}
                    <div className="container-box">
                        <div className="container-img">
                            <img src={trip4} alt="Air Trip" />
                        </div>
                        <h4>Winter Trip</h4>
                        <p>125 places</p>
                    </div>
                </div>
            </section>
            {/* Packages Section*/}
            <section className="package" id="package">
                <div className="title">
                    <h2>Our Upcoming <br /> Tour Packages</h2>
                </div>
                <div className="package-content">
                    {/* box */}
                    <div className="box">
                        <div className="thum">
                            <img src={img6} alt="" />
                        </div>
                        
                        <div className="dest-content">
                            <div className="location">
                                <h4>Rajastan</h4>
                                
                            </div>
                            <div className="stars">
                                <a ><i className="bx bxs-star"></i></a>
                                <a ><i className="bx bxs-star"></i></a>
                                <a ><i className="bx bxs-star"></i></a>
                                <a ><i className="bx bxs-star"></i></a>
                                <a ><i className="bx bxs-star"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* box */}
                    <div className="box">
                        <div className="thum">
                            <img src={img2} alt="" />
                        </div>
                        <div className="dest-content">
                            <div className="location">
                                <h4>agra</h4>
                                <p>4h - 5h</p>
                            </div>
                            <div className="stars">
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* box */}
                    <div className="box">
                        <div className="thum">
                            <img src={img3} alt="" />
                        </div>
                        <div className="dest-content">
                            <div className="location">
                                <h4>Place</h4>
                                <p>4h - 5h</p>
                            </div>
                            <div className="stars">
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* box */}
                    <div className="box">
                        <div className="thum">
                            <img src={img4} alt="" />
                        </div>
                        <div className="dest-content">
                            <div className="location">
                                <h4>Place</h4>
                                <p>4h - 5h</p>
                            </div>
                            <div className="stars">
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* box */}
                    <div className="box">
                        <div className="thum">
                            <img src={img5} alt="" />
                        </div>
                        <div className="dest-content">
                            <div className="location">
                                <h4>Place</h4>
                                <p>4h - 5h</p>
                            </div>
                            <div className="stars">
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* box */}
                    <div className="box">
                        <div className="thum">
                            <img src={img6} alt="" />
                        </div>
                        <div className="dest-content">
                            <div className="location">
                                <h4>Place</h4>
                                <p>4h - 5h</p>
                            </div>
                            <div className="stars">
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* box */}
                    <div className="box">
                        <div className="thum">
                            <img src={img7} alt="" />
                        </div>
                        <div className="dest-content">
                            <div className="location">
                                <h4>Place</h4>
                                <p>4h - 5h</p>
                            </div>
                            <div className="stars">
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* box */}
                    <div className="box">
                        <div className="thum">
                            <img src={img8} alt="" />
                        </div>
                        <div className="dest-content">
                            <div className="location">
                                <h4>Place</h4>
                                <p>4h - 5h</p>
                            </div>
                            <div className="stars">
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* box */}
                    <div className="box">
                        <div className="thum">
                            <img src={img9} alt="" />
                        </div>
                        <div className="dest-content">
                            <div className="location">
                                <h4>Place</h4>
                                <p>4h - 5h</p>
                            </div>
                            <div className="stars">
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* box */}
                    <div className="box">
                        <div className="thum">
                            <img src={img10} alt="package to" />
                        </div>
                        <div className="dest-content">
                            <div className="location">
                                <h4>Place</h4>
                                <p>4h - 5h</p>
                            </div>
                            <div className="stars">
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Destination Section */}
            <section className="destination" id="destination">
                <div className="title">
                    <h2>Our Most Popular <br /> Destinations</h2>
                </div>
                <div className="destination-content">
                    {/* content */}
                    <div className="col-content">
                        <img src={dest1} alt="Destination" />
                        <h5>simla</h5>
                        <p>india</p>
                    </div>
                    {/* content */}
                    <div className="col-content">
                        <img src={dest2} alt="Destination" />
                        <h5>Kasmir</h5>
                        <p>india</p>
                    </div>
                    {/* content */}
                    <div className="col-content">
                        <img src={dest3} alt="Destination" />
                        <h5>Delhi</h5>
                        <p>india</p>
                    </div>
                    {/* content */}
                    <div className="col-content">
                        <img src={dest1} alt="Destination" />
                        <h5>kasi</h5>
                        <p>India</p>
                    </div>
                </div>
            </section>
            {/* Newsletter Section */}
            <section className="newsletter">
                <div className="news-text">
                    <h2>Newsletter</h2>
                    <p>Subscribe to recive upcoming packages <br /> and services </p>
                </div>
                <div className="send">
                    <form>
                        <input type="email" placeholder='Write your Email' required />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </section>
            {/* footer */}
            <section id="contact">
                <div className="footer">
                    <div className="main">
                        {/* list */}
                        <div className="list">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a>About Us</a></li>
                                <li><a>Terms & Conditions</a></li>
                                <li><a>Help</a></li>
                                <li><a>Tour</a></li>
                            </ul>
                        </div>
                        {/* list */}
                        <div className="list">
                            <h4>Support</h4>
                            <ul>
                                <li><a>About Us</a></li>
                                <li><a>Terms & Conditions</a></li>
                                <li><a>Help</a></li>
                                <li><a>Tour</a></li>
                            </ul>
                        </div>
                        {/* list */}
                        <div className="list">
                            <h4>Contact Info</h4>
                            <ul>
                                <li><a>18/129 MOTILAL NAGAR NO 3 BEHIND MANTHAN HOTEL</a></li>
                                <li><a> Mumbai - 400062</a></li>
                                <li><a>+91 9820489246</a></li>
                                <li><a>ratantravels2003@gmail.com</a></li>
                            </ul>
                        </div>
                        {/* list */}
                        <div className="list">
                            
                        </div>
                    </div>
                </div>
                <div className="end-text">
                    <p>Copyright @2022 All rights reserved | Made by {devName} </p>
                </div>
            </section>
        </div>
    );

}

export default App;