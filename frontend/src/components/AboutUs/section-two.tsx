import "../AboutUs Styles/section-two.css";
import Pic4 from "/about.jpg"

export default function Section_Two() {
  return (
    <div>
        <div className="main-box">
            <div className="image-division">
                <img src={Pic4} alt="" className="pic4"/>
            </div>
            <div className="text-box">
                <h1 className="choose-text">Why Choose Us</h1>
                <h1 className="expertise">Our Expertise</h1>
                <p className="whole-para">Expertise and Experience: With over 20 Years of experience in the industry, our team of financial experts brings a wealth of knowledge and expertise to the table</p>

                <p className="whole-para">Customer-Centric Approach: We put our clients at the heart of everything we do, offering personalized advice and support to help you make informed financial decisions.</p>

                <p className="whole-para">Innovative Solutions: We leverage the latest technology and financial products to provide innovative solutions that meet the evolving needs of our clients.</p>

                <p className="whole-para">Transparency and Integrity: We pride ourselves on our ethical approach, ensuring transparency and integrity in all our dealings.</p>
            </div>
        </div>
    </div>
  )
}
