import Call from "/call.jpg";
import '../styles/ContactUs.css';

export default function contactUs() {
  return (
    <div className="contact-container">
        <div className="contact-us">
            <div className="header-para">
                <h1 className="contact-header">Contact Us</h1>
                <p className="paragraph">Please feel free to ask if you have any further questions.</p>
                <ul className="underline">
                    <li>Sydney, Australia</li>
                    <li>0468328227</li>
                    <li>Mon - Fri: 9:00am - 5:00pm</li>
                    <li>Weekend Appointments Only</li>
                </ul>
                <ul className="underlined-2">
                    <li><button className="btn"></button></li>
                    <li><button className="btn"></button></li>
                    <li><button className="btn"></button></li>
                    <li><button className="btn"></button></li>
                    <li><button className="btn"></button></li>
                </ul>
            </div>
        </div>
        <div className="image">
            <img src={Call} alt="" className="pic_image"/>
        </div>
    </div>
  )
}
