import React from "react";

import Wrapper from "./Wrapper";
import Heading from "./Heading";
import H1 from "./H1";
import Links from "./Links";
import Logo from "./Logo";
import P from "./P";
import LinksContainer from "./LinksContainer";
import H4 from "./H4";
import Copyright from "./Copyright";

/**
 * 
 * Footer component containing data relevant to the project
 *
 * @author [Mark Foster](https://github.com/markfoster314)
 * 
 */
const Footer = () => (
  <Wrapper>
    <Heading>
      <H1>Thanks for checking this out!</H1>
    </Heading>

    <Links>
      <Logo>
        <h1 style={{ color: "#FFFFFF" }}>Empire State of Wallet</h1>
        <P>
          Mark Layton Foster, <br /> All Rights Reserved
        </P>
      </Logo>
      <LinksContainer>
        <H4>Links</H4>
        <P style={{ margin: "0.5rem 0", cursor: "pointer" }}>Overons</P>
        <P style={{ margin: "0.5rem 0", cursor: "pointer" }}>Social Media</P>
        <P style={{ margin: "0.5rem 0", cursor: "pointer" }}>Counters</P>
        <P style={{ margin: "0.5rem 0", cursor: "pointer" }}>Contact</P>
      </LinksContainer>
      <LinksContainer>
        <H4>Company</H4>
        <P style={{ margin: "0.5rem 0", cursor: "pointer" }}>
          Terms & Conditions{" "}
        </P>
        <P style={{ margin: "0.5rem 0", cursor: "pointer" }}>Privacy Policy</P>
        <P style={{ margin: "0.5rem 0", cursor: "pointer" }}>Contact</P>
      </LinksContainer>
      <LinksContainer>
        <H4>Get in touch</H4>
        <P style={{ margin: "0.5rem 0", cursor: "pointer" }}>
          2033 Melodie Lane, Cumming GA 30041
        </P>
        <P style={{ margin: "0.5rem 0", cursor: "pointer" }}>678-699-6447</P>
        <P style={{ margin: "0.5rem 0", cursor: "pointer" }}>
          markfoster314@yahoo.com
        </P>
      </LinksContainer>
    </Links>

    <Copyright>
      <P>@2021 Mark Foster. All rights reserved.</P>
    </Copyright>
  </Wrapper>
);

export default Footer;
