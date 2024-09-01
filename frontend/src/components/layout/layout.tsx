import Header from './header';
import Header_two from './header-two';
import Main from './main';
import Section2 from './section2';
import Services from './services';
import Section4 from './section4';
import Section5 from './section5';
import Founder from './founder';
import ContactUs from './contactUs';
import Section6 from './section6';
import Quick_contact from './Quick_contact';
import Footer from './footer';

export default function layout() {
  return (
    <div>
        <Header/>
        <Header_two/>
        <Main/>
        <Section2/>
        <Services/>
        <Section4/>
        <Section5/>
        <Founder/>
        <ContactUs/>
        <Section6/>
        <Quick_contact/>
        <Footer/>
    </div>
  )
}
