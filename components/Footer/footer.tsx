import logo from "../../public/logo/gf_logo_footer.png";
import Image from "next/image";
import Link from "next/link";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-2">
  <div className="container mx-auto px-4 mt-20">
    <div className="flex flex-wrap -mx-4">
      {/* Logo and Description Section */}
      <div className="w-full sm:w-1/2 lg:w-1/5 p-4">
        <ul className="list-none mb-0">
          <li className="flex flex-col items-center text-center mb-2">
            <Link href="/">
              {/* <Image height={120} width={120} src={logo} alt="Logo" /> */}
            </Link>
          </li>
          <li>
            <p className="text-lg text-center mb-4">
              Modern Steel Railing Services
            </p>
          </li>
          <li>
            <p className="text-sm text-center">
            Discover premium railing, window and Gate solutions for your home and business! Our custom designs, exceptional durability, and unmatched safety make all the difference.
            </p>
          </li>
        </ul>
      </div>

      {/* Company Links Section */}
      <div className="w-full sm:w-1/2 lg:w-1/5 p-4">
        <h4 className="text-lg font-bold mb-4 text-center sm:text-left ml-8">COMPANY</h4>
        <ul className="list-none mb-0 sm:text-left text-center ml-8">
          <li className="mb-2">
            <Link href="/" className="text-sm hover:text-textColor">
              Home
            </Link>
          </li>
          <li className="mb-2">
            <a href="/aboutus" className="text-sm hover:text-textColor">
              About Us
            </a>
          </li>
          <li className="mb-2">
            <Link href="/railingproject" className="text-sm hover:text-textColor">
              Our Latest Projects
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/contact-us" className="text-sm hover:text-textColor">
              Contact Us
            </Link>
          </li>
          {/* <li className="mb-2">
            <Link href="/blogs" className="text-sm hover:text-textColor">
              Blog
            </Link>
          </li> */}
        </ul>
      </div>

      {/* Support Links Section */}
      <div className="w-full sm:w-1/2 lg:w-1/5 p-4">
        <h4 className="text-lg font-bold mb-4 text-center sm:text-left">SERVICES</h4>
        <ul className="list-none mb-0 sm:text-left text-center">
          <li className="mb-2">
            <a href="/imagemodel/railing" className="text-sm hover:text-textColor">
              Railing Designs
            </a>
          </li>
          <li className="mb-2">
            <a href="/imagemodel/window" className="text-sm hover:text-textColor">
              Window Designs
            </a>
          </li>
          <li className="mb-2">
            <a href="/imagemodel/gate" className="text-sm hover:text-textColor">
              Gate Designs
            </a>
          </li>
          <li className="mb-2">
            <a href="/ourservices" className="text-sm hover:text-textColor">
              Service Details
            </a>
          </li>
          {/* <li className="mb-2">
            <Link href="/faqs" className="text-sm hover:text-textColor">
              FAQs
            </Link>
          </li> */}
        </ul>
      </div>

      {/* Social Links Section */}
      <div className="w-full sm:w-1/2 lg:w-1/5 p-4">
        <h4 className="text-lg font-bold mb-4 text-center sm:text-left">FOLLOW US</h4>
        <ul className="list-none mb-0 sm:text-left text-center">
          <li className="mb-2">
            <a href="https://wa.me/9172790843" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-textColor">
              <i className="fab fa-whatsapp mr-2"></i> Whatsapp
            </a>
          </li>
          <li className="mb-2">
            <a href="https://www.facebook.com/gadgetfixers2.0/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-textColor">
              <i className="fab fa-facebook-f mr-2"></i> Facebook
            </a>
          </li>
          <li className="mb-2">
            <a href="https://www.instagram.com/gadgetfixer2.0/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-textColor">
              <i className="fab fa-instagram mr-2"></i> Instagram
            </a>
          </li>
          <li className="mb-2">
            <a href="https://www.youtube.com/@gadgetfixer-x8w" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-textColor">
              <i className="fab fa-youtube mr-2"></i> Youtube
            </a>
          </li>
          <li className="mb-2">
            <a href="https://www.linkedin.com/in/gadget-fixers/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-textColor">
              <i className="fab fa-linkedin mr-2"></i> LinkedIn
            </a>
          </li>
          <li className="mb-2">
            <a href=" https://twitter.com/@gadget_fixers" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-textColor">
              <i className="fab fa-twitter mr-2"></i> Twitter
            </a>
          </li>
          <li className="mb-2">
            <a href="https://www.threads.net/@gadgetfixer2.0" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-textColor">
              <i className="fab fa-threads mr-2"></i> Threads
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Details Section */}
      <div className="w-full sm:w-1/2 lg:w-1/5 p-4">
        <h4 className="text-lg font-bold mb-4 text-center sm:text-left">CONNECT WITH US</h4>
        <ul className="list-none mb-0 sm:text-left text-center">
          <li className="mb-2">
            <p className="text-sm hover:text-textColor">Modern Steel Railing Services</p>
          </li>
          <li className="mb-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1915.3837087450468!2d79.15199985147932!3d21.124008080734185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4b90295682f89%3A0x53098a4bf8ff74a9!2sModern%20Steel%20Railing%20Services!5e0!3m2!1sen!2sin!4v1739107085779!5m2!1sen!2sin"
              width="190"
              height="80"
              allowFullScreen={true}
              loading="lazy"
              className="rounded-lg shadow-md"
            ></iframe>
          </li>
          <li className="mb-2">
            <p className="text-sm hover:text-textColor">
              Jay Jalaram Nagar,Kharbi Road,
              <br />
               Near Mata Mandir Bus Stop, Wathoda Lay Out
              <br />
              Nagpur, Maharashtra 440034
            </p>
          </li>
          <li className="mb-2">
            <a href="https://wa.me/9172790843" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-textColor">
              <i className="fas fa-phone mr-2"></i>+91 7972321411
            </a>
          </li>
          <li className="mb-2">
            <a href="mailto:contact.gadgetfixers@gmail.com?subject=Inquiry&body=Hello%20GadgetFixers!" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-textColor">
              <i className="fas fa-envelope mr-1"></i> contact.gadgetfixers@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="text-center mt-4 mb-4">
    <p className="text-sm">&copy; 2024 Modern Steel Railing. All rights reserved.</p>
  </div>
</footer>
  );
};



export default Footer;
