import React from "react";

import Wrapper from "./Wrapper";
import Links from "./Links";
import Logo from "./Logo";
import LinksContainer from "./LinksContainer";
import Buttons from "./Buttons";
import P from "./P";
import Button from "./Button";
import H1 from "./H1";

/**
 *
 * Navigation bar for our application
 *
 * @author [Mark Foster](https://github.com/markfoster314)
 *
 */
const Navbar = () => {
  return (
    <Wrapper>
      <Links>
        <Logo>
          <H1>Empire State of Wallet</H1>
        </Logo>
        <LinksContainer>
          <P>
            <a href="#transactions">Transactions</a>
          </P>
          <P>
            <a href="#report">Report</a>
          </P>
        </LinksContainer>
      </Links>
      <Buttons>
        <P>Sign in</P>
        <Button type="button">Sign up</Button>
      </Buttons>
    </Wrapper>
  );
};

export default Navbar;
