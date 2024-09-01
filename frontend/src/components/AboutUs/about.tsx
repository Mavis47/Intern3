import Header from "../layout/header-two";
import SecondHeader from "../layout/header";
import Section from "../AboutUs/section-one";
import SectionTwo from "../AboutUs/section-two";
import SectionThree from "../AboutUs/Section-three";
import Section6 from './../layout/section6';
import Footer from './../layout/footer';
import Quick_contact from "../layout/Quick_contact";

export default function about() {
  return (
    <div>
        <SecondHeader/>
        <Header/>
        <Section/>
        <SectionTwo/>
        <SectionThree/>
        <Section6/>
        <Quick_contact/>
        <Footer/>
    </div>
  )
}
