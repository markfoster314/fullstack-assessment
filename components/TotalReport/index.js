import React from "react";
import PropTypes from "prop-types";

import Wrapper from "./Wrapper";

/**
 *
 * Displays the total amount of money the user spent on Bezos-related businesses
 *
 * @author [Mark Foster](https://github.com/markfoster314)
 *
 */
function TotalReport({ total }) {
  return (
    <Wrapper>
      <h3 style={{ color: "#FFFFFF" }}>Bezos Transactions</h3>
      <h1>{"$" + total}</h1>
    </Wrapper>
  );
}

TotalReport.propTypes = {
  /**
   * Amount of money the user spent on Bezos-related businesses
   */
  total: PropTypes.any,
};

export default TotalReport;
