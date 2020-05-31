import React from "react";
import Grid from "@material-ui/core/Grid";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TwitterIcon from "@material-ui/icons/Twitter";

const Footer = () => {
  return (
    <footer className="site-footer">
      <Grid container>
        {/* <Grid item xs={4} style={{ margin: "0rem 15rem 0rem 6rem" }}>
          <h6>About</h6>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </Grid> */}

        <Grid item xs={1} style={{ margin: "0rem 2rem 0rem 2rem" }}>
          <h6>Shop</h6>
          <ul className="footer-links">
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Signup</a>
            </li>
            <li>
              <a href="#">Bulk orders</a>
            </li>
          </ul>
        </Grid>

        <Grid item xs={1} style={{ margin: "0rem 2rem 0rem 2rem" }}>
          <h6>Help</h6>
          <ul className="footer-links">
            <li>
              <a href="#">Delivery</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
            <li>
              <a href="#">Copyright</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </Grid>

        <Grid item xs={1} style={{ margin: "0rem 2rem 0rem 2rem" }}>
          <h6>Social</h6>
          <ul className="footer-links">
            <li>
              <a href="https://www.facebook.com/Lazga.prints/">
                <FacebookIcon /> Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/lazga_prints/">
                <InstagramIcon /> Instagram
              </a>
            </li>
            <li>
              <a href="#">
                <TwitterIcon /> Twitter
              </a>
            </li>
            <li>
              <a href="#">
                <WhatsAppIcon /> WhatsApp
              </a>
            </li>
          </ul>
        </Grid>

        <Grid container>
          <Grid item xs={12} style={{ textAlign: "center", marginTop: "1rem" }}>
            <p className="copyright-text">
              Copyright &copy; 2020 All Rights Reserved by
              <a href="#"> Lazga</a>.
            </p>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
