

const Footer = () => {
  return (
    <div className="footer py-8">
      <div className=" px-6 lg:px-[10rem]">
        <hr />
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div>
            <h3 className="footer-title">Quick Find</h3>

            <ul className="footer-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Our Focus</a>
              </li>
              <li>
                <a href="#">Programs</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Join Us</a>
              </li>
              <li>
                <a href="#">Event</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">Partner With Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="footer-title">Our Address</h3>
            <p>Mission House, 1 Otunba Jobi Fele Way, Ikeja, Lagos Nigeria.</p>
          </div>
          <div>
            <h3 className="footer-title">Our Contact</h3>
            <ul className="footer-links">
              <li>+234 803 712 0640</li>
              <li>+234 809 987 3245 </li>
              <li>+234 802 792 3975</li>
            </ul>
          </div>
        </div>
      </div>
      <h1 className="overlay">SWAT</h1>
    </div>
  );
};

export default Footer;
