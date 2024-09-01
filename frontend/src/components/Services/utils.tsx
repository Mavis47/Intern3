import "../services Styles/services.css";
import ServiceImage from "/image3.jpg";
import Image4 from "/image4.jpg";
import Card1 from "/card1.jpg"
import Card2 from "/card2.jpg"
import Card3 from "/card3.jpg"
import Quick_contact from "../layout/Quick_contact";
import Footer from './../layout/footer';

export default function utils() {
  return (
    <div>
      <img src={ServiceImage} alt="" className="image3" />
      <div className="whole-container">
        <div className="two-divison">
          <img src={Image4} alt="" className="image4" />
        </div>
        <div className="one-more-division">
          <h1 className="tailor">Tailored Mortgage Solutions</h1>
          <h1 className="simplify">
            Simplify Your Mortgage Journey with Alphaa Financial Solutions
          </h1>
          <p className="finance">
            At Alphaa Financial Solutions, we understand that finding the right
            mortgage can be a daunting task. That’s why we offer personalized
            mortgage solutions designed to meet your unique needs and financial
            goals. Whether you’re buying your first home, refinancing, or
            looking for ways to reduce your mortgage payments, we make the
            process easy and stress-free.
          </p>

          <div className="summary">
            <div className="container-one">
              <h1 className="extends">
                Extending Your Mortgage Term for Financial Flexibility
              </h1>
              <p className="p1">
                Need more time to manage your mortgage payments? We offer
                options to extend your mortgage term, giving you the flexibility
                to pay at your own pace and ensuring your financial stability.
              </p>

              <h1 className="downsize">Downsize and Save</h1>
              <p className="p2">
                Thinking about moving to a smaller, more affordable home? We
                provide mortgage options that make downsizing simple and
                financially rewarding, helping you save on costs and reduce your
                financial burden.
              </p>
            </div>
            <div className="container-one">
              <h1 className="extends">
                Offset Mortgage Costs by Renting Out Your Property
              </h1>
              <p className="p1">
                Need more time to manage your mortgage payments? We offer
                options to extend your mortgage term, giving you the flexibility
                to pay at your own pace and ensuring your financial stability.
              </p>

              <h1 className="downsize">
                Refinance for Better Rates and Lower Payments
              </h1>
              <p className="p2">
                Thinking about moving to a smaller, more affordable home? We
                provide mortgage options that make downsizing simple and
                financially rewarding, helping you save on costs and reduce your
                financial burden.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-One">
        <div className="heading">
          <h1 className="estimate">How to estimate mortgage payments</h1>
        </div>
        <div className="paragraph-two">
          <p className="lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="button">
          <button className="interest-btn">INTEREST RATE</button>
        </div>
      </div>

      <div className="section-downwards">
        <p className="lendevi">Lendevi Services</p>
        <h1 className="heading-resource">
          Many resources can help you make informed decisions during homebuying
        </h1>
        <p className="paragraph-text">
          Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>

      <div className="container-card">
        <div className="card1">
            <img src={Card1} alt="" className="card-image"/>
          <div className="card-container-one">
            <h1 className="house">House Payment</h1>
            <p className="para-ut">
              Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
              leo.
            </p>
          </div>
        </div>
        <div className="card1">
            <img src={Card2} alt="" className="card-image"/>
          <div className="card-container-one">
            <h1 className="house">Industrial payment</h1>
            <p className="para-ut">
              Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
              leo.
            </p>
          </div>
        </div>
        <div className="card1">
            <img src={Card3} alt="" className="card-image"/>
          <div className="card-container-one">
            <h1 className="house">Corporate payment</h1>
            <p className="para-ut">
              Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
              leo.
            </p>
          </div>
        </div>
      </div>
      <Quick_contact/>
      <Footer/>
    </div>
  );
}
