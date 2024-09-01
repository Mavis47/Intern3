import "../styles/founder.css";
import punjabi from "/Pawan panjabi.jpg";

export default function founder() {
  return (
    <div className="container">
        
        <div className="card-one" id="profile-pic">
          <p className="text-founder">Meet Our Founder</p>
            <img src={punjabi} alt="" className="profile"/>
            <h1 className="founder-name">Mr Pawan Punjabi</h1>
            <p className="para">Founder</p>
        </div>
    </div>
  )
}
