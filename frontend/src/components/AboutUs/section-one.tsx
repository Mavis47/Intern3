import Pic3 from "/about.jpg";
import "../AboutUs Styles/Section.css";

export default function Section() {
  return (
    <div className="section-one">
        <h1 className="about-header">About Us</h1>
        <h1 className="about-text">We believe you’re bright</h1>
        <div className="main-container">
            <div className="image-and-text">
                <img src={Pic3} alt="" className="about-img"/>
                    <h1 className="text-inside-img">Our Mission</h1>
                    <p className="paragraph-text">Our mission is to provide our clients with tailored financial solutions that cater to their unique needs. We strive to make the process of securing a mortgage as straightforward and stress-free as possible, guiding you through every step with transparency and integrity.</p>
            </div>
            <div className="text-only">
                <h1 className="text-header-one">Welcome to Alphaa Financial Solutions</h1>
                <p className="text-two">At Alphaa Financial Solutions, we believe in empowering your property dreams with our premium financial services. Established with a vision to provide seamless loan processing and financial advisory, we have grown to become a trusted name in the Australian mortgage industry.</p>

                <h1 className="text-header-one" id="story-text">Our Story 🙂</h1>
                <p className="text-two"> Alphaa Financial Solutions was born out of a desire to simplify the complexities of property financing. Our founder,
                Mr. Pawan Punjabi, envisioned a company where customer-centricity and financial expertise go hand in hand. Over the years, we have helped thousands of Australians achieve their dream of owning a home, thanks to our unwavering commitment to excellence and innovation.</p>
            </div>
        </div>
    </div>
  )
}
