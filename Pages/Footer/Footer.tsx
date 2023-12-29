import { siFacebook, siInstagram, siLinkedin } from "simple-icons/icons";

const Footer = () => {
  const whiteIconStyle = { fill: "white" };
  return (
    <footer className="bg-red-900 text-white">
      <div className="max-w-6xl mx-auto px-12 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm space-x-4 flex items-center font-army mb-4 md:mb-0">
            <div className="flex space-x-4 ">
              <a
                href="https://www.linkedin.com/in/shain-davis-981a3b93/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`data:image/svg+xml;utf8,${siLinkedin.svg}`}
                  className="h-6 w-6"
                  alt="LinkedIn text-white"
                  style={whiteIconStyle}
                />
              </a>
              <a
                href="https://www.instagram.com/shoesforsoldiers/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`data:image/svg+xml;utf8,${siInstagram.svg}`}
                  className="h-6 w-6 text-white"
                  alt="Instagram"
                />
              </a>
              <a
                href="https://www.facebook.com/shoesforsoldiers"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`data:image/svg+xml;utf8,${siFacebook.svg}`}
                  className="h-6 w-6 text-white"
                  alt="Facebook"
                  style={whiteIconStyle}
                />
              </a>
            </div>
          </div>

          {/* Copyright Notice */}
          <div className="text-xs md:text-sm text-center md:text-left">
            <p>
              &copy; {new Date().getFullYear()} Shoes For Soldiers. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
