// import './Home.css'
import { Outlet } from "react-router-dom";
import Navbar2 from './Navbar2';
import Footer from "./Footer";
import'./Userhome.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Bodycover from "./Bodycover";
function Home(){
    return(
        <div>
        <Navbar2></Navbar2>
        <div className="divcarousel">
        <Carousel>
            <Carousel.Item>
                <div className="d-block w-90">
                <img
                className="sizeimg3"
                src="rmed.jpeg"
                alt="First slide"
                />
                <img
                className="sizemid3"
                src="rmed1.jpeg"
                alt="First slide"
                />
                <img
                className="sizeimg3"
                src="rmed2.jpeg"
                alt="First slide"
                />
                {/* <span><h2>Blood Donation BY Anindita Sarkar</h2>
                <span>
                <p>you easyli fine Doner In your Location</p></span> */}
                </div>
                <Carousel.Caption>
                {/* <h2 className="first">Welcome To User</h2> */}
                <p className="first">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <div className="d-block w-90">
               <img
                className="sticker"
                src="pol2.png"
                alt="First slide"
                />
                <img
                className="sticker2"
                src="hand.png"
                alt="Second slide"
                
                />                
                <img
                className="sticker"
                src="bol8.png"
                alt="Second slide"
                />
                </div>
                <Carousel.Caption>
                {/* <h2 className="third">" YOUR LITTLE EFFORT CAN GIVE<br></br>
                    OTHERS SECOND CHANCE TO LIVE LIFE "</h2> */}
                <p className="third">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
             </Carousel.Item>
            <Carousel.Item>
            <div className="d-block w-90">
                <img
                className="sizemid3"
                src="rmed3.jpeg"
                alt="Third slide"
                />
                {/* <img
                className="sizeimg2"
                src="bank.jpeg"
                alt="Third slide"
                /> */}
                </div>
                <Carousel.Caption>
                {/* <h2 className="third">Third slide label</h2>
                <p className="third">
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p> */}
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            

            </div>
            <Outlet></Outlet>
            <Bodycover></Bodycover>
            <Footer></Footer>
            </div>
    )
}
export default Home; 