import React from "react";
import PropTypes from "prop-types";

import Wrapper from "./Wrapper";

/**
 *
 * Displays the percentage of user's money that went toward Bezos-related
 * businesses
 *
 * @author [Mark Foster](https://github.com/markfoster314)
 *
 */
function PercentageReport({ percentage }) {
  return (
    <Wrapper>
      <h3 style={{ color: "#FFFFFF" }}>Bezos Percentage</h3>
      <h1>{percentage + "%"}</h1>
    </Wrapper>
  );
}

PercentageReport.propTypes = {
  /**
   * Percentage of user's money that went toward Bezos-related businesses
   */
  percentage: PropTypes.any,
};

export default PercentageReport;
