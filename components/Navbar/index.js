import React from "react";

import Wrapper from "./Wrapper";
import Links from "./Links";
import Logo from "./Logo";
import Buttons from "./Buttons";
import P from "./P";
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
      </Links>
      <Buttons>
        <P>
          <a href="#transactions">Transactions</a>
        </P>
        <P>
          <a href="#report">Report</a>
        </P>
      </Buttons>
    </Wrapper>
  );
};

export default Navbar;
