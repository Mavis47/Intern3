import "../styles/section2.css";

export default function section2() {
  return (
    <div className="section2-container">
        <div className="card-one">
            <h1 className="Story">Our Story</h1>
            <div id="text">
                Alpha Financial Solutions provides bespoke mortgage and finance services. We believe that financial freedom is not just a goal but a journey, and we are here to guide you every step of the way.
            </div>
            <button className="more">Know More</button>
        </div>
        <div className="card-two">
            <h1 className="Story">Our Mission</h1>
            <div id="text">
                At Alpha Financial Solutions, our mission is to empower individuals and businesses to achieve their financial aspirations through tailored solutions, expert advice, and exceptional service. We strive to build lasting relationships based on trust, integrity, and mutual success.
            </div>
        </div>
    </div>
  )
}
