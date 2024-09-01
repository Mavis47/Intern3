import pic5 from "/image2.jpg"
import "../FAQStyles/faqStyles.css";
import SectionThree from "../AboutUs/Section-three";
import Quick_contact from "../layout/Quick_contact";
import Footer from './../layout/footer';

export default function Section() {
  return (
    <div>
        <div className="container-near-footer">
            <h1 className='mortage'>Your mortgage down payment</h1>
            <p className='navigate'>How to navigate our Mortgage rates</p>
            <div className="container">
                <div className="box-one">
                    <h1 className="faqhead">You use your property</h1>
                    <h1 className="faqhead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                </div>
                <div className="box-one">
                    <h1 className="faqhead">The type of mortgage</h1>
                    <h1 className="faqhead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                </div>
                <div className="box-one">
                    <h1 className="faqhead">With fixed mortgages</h1>
                    <h1 className="faqhead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                </div>
                
            </div>
            <div className="box-container">
                <div className="image-and-text-container">
                        <img src={pic5} alt="" className="pic5"/>
                 </div>
                 <div className="second-body">
                    <h1 className="booking">Online Booking</h1>
                    <h1 className="contact-text">Contact us to start saving time and money</h1>
                    <form action="">
                        <div className="form">
                            <input type="text" name="" id="" placeholder="NAME" className="background"/>
                            <input type="text" placeholder="SUBJECT" className="background"/>
                        </div>
                       <div className="form2">
                       <input type="email" placeholder="EMAIL" className="background"/>
                       <button>MAKE AN APPOINTMENT</button>
                       </div>
                    </form>
                 </div>
                 
            </div>
            <SectionThree/>
            <Quick_contact/>
            <Footer/>
        </div>
    </div>
  )
}
