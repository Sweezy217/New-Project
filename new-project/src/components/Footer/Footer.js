import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="follow">
          <h1>Follow Us</h1>
          <div className="icons">
            <InstagramIcon style={{ color: "#fff", fontSize: '40px' }} />
            <LinkedInIcon style={{ color: "#fff", fontSize: '40px' }} />
            <FacebookIcon style={{ color: "#fff", fontSize: '40px' }} />
            <PinterestIcon style={{ color: "#fff", fontSize: '40px' }} />
          </div>
        </div>
        <div className="reserve">
          <a href="https://en.wikipedia.org/wiki/All_rights_reserved">
            2023 St Mary's Children's Home, Npo. All Rights Reserved
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
