import "../styles/Quick_contact.css";

export default function Quick_contact() {
  return (
    <div className="container-contact">
        <div className="header_and_text">
            <h1 className="Quick-header">Quick Contact</h1>
            <p className="quick-text">At Alphaa Financial Solutions, we believe in empowering your property dreams with our premium financial services. </p>
            <ul className="Quick-ul">
                <li>Sydney, Austrailia</li>
                <li>0468328227</li>
                <li>Message</li>
            </ul>
        </div>
        <div className="card">
            <h1 className="hours">Opening Hours</h1>
            <div className="spans">
                <span>MON TO FRI</span>
                <span>9:00AM | 5:00PM</span>
            </div>
            <div className="spans">
                <span>Sat to Sun:</span>
                <span>
                Appointments Only</span>
            </div>
            <button className="schedule">SCHEDULE A VISIT</button>
        </div>
    </div>
  )
}
