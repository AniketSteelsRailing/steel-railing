import logo from "../../public/logo/gf_logo_footer.png";
import Image from "next/image";
import Link from "next/link";

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
            <p className="text-sm text-center">
              Gadget Fixers ensures your devices are restored to peak performance. <br />
              Trust us to bring your devices back to life.
            </p>
          </li>
        </ul>
      </div>

      {/* Company Links Section */}
      <div className="w-full sm:w-1/2 lg:w-1/5 p-4">
        <h4 className="text-lg font-bold mb-4 text-center sm:text-left">COMPANY</h4>
        <ul className="list-none mb-0 sm:text-left text-center">
          <li className="mb-2">
            <Link href="/" className="text-sm hover:text-textColor">
              Home
            </Link>
          </li>
          <li className="mb-2">
            <a href="#" className="text-sm hover:text-textColor">
              About Us
            </a>
          </li>
          <li className="mb-2">
            <Link href="/services" className="text-sm hover:text-textColor">
              Services
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/contact-us" className="text-sm hover:text-textColor">
              Contact Us
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/blogs" className="text-sm hover:text-textColor">
              Blog
            </Link>
          </li>
        </ul>
      </div>

      {/* Support Links Section */}
      <div className="w-full sm:w-1/2 lg:w-1/5 p-4">
        <h4 className="text-lg font-bold mb-4 text-center sm:text-left">SUPPORT</h4>
        <ul className="list-none mb-0 sm:text-left text-center">
          <li className="mb-2">
            <a href="/warranty" className="text-sm hover:text-textColor">
              Gadget Fixers Warranty
            </a>
          </li>
          <li className="mb-2">
            <a href="/shipping" className="text-sm hover:text-textColor">
              Shipping Policy
            </a>
          </li>
          <li className="mb-2">
            <a href="/privacy" className="text-sm hover:text-textColor">
              Privacy Policy
            </a>
          </li>
          <li className="mb-2">
            <a href="/termsandcondition" className="text-sm hover:text-textColor">
              Terms & Conditions
            </a>
          </li>
          <li className="mb-2">
            <Link href="/faqs" className="text-sm hover:text-textColor">
              FAQs
            </Link>
          </li>
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
            <p className="text-sm hover:text-textColor">Gadget Fixers Location</p>
          </li>
          <li className="mb-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.945408653561!2d79.0766478!3d21.1943275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c10025054983%3A0x8f9344d8b694a018!2sGadget%20Fixer!5e0!3m2!1sen!2sin!4v1730658381086!5m2!1sen!2sin"
              width="190"
              height="80"
              allowFullScreen={true}
              loading="lazy"
              className="rounded-lg shadow-md"
            ></iframe>
          </li>
          <li className="mb-2">
            <p className="text-sm hover:text-textColor">
              Near Nagoba Sai Mandir,
              <br />
              Faras, Baba Farid Nagar,
              <br />
              Nagpur, Maharashtra 440030
            </p>
          </li>
          <li className="mb-2">
            <a href="https://wa.me/9172790843" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-textColor">
              <i className="fas fa-phone mr-2"></i>+91 9172790843
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
    <p className="text-sm">&copy; 2024 Gadget Fixers. All rights reserved.</p>
  </div>
</footer>

  );
};



export default Footer;
