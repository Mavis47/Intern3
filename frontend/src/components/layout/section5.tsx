import "../styles/section5.css";
import pic2 from  "/family.jpg";

export default function section5() {
  return (
    <div className='section-five-container'>
        <div className="sidebar"></div>
        <div className="main-body">
          <div className="text-area">
            <span className="text-inside">We believe you're bright</span>
          </div>
          <div className="image">
            <img src={pic2} alt="" className="pic2" />
            <div className="cards-container">
              <div className="card-one" id="card-in-image">
                  <h1 className="count">320+</h1>
                  <h1 className="lender">Leaders</h1>
              </div>
              <div className="card-two" id="card-in-image-2">
                <h1 className="count">20+</h1>
                <h1 className="lender">Experience</h1>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
