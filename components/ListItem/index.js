import React from "react";
import PropTypes from "prop-types";

import Item from "./Item";
import Wrapper from "./Wrapper";

/**
 *
 * Items displayed in our List component
 *
 * @author [Mark Foster](https://github.com/markfoster314)
 *
 */
function ListItem({ item }) {
  return (
    <Wrapper>
      <Item>{item}</Item>
    </Wrapper>
  );
}

ListItem.propTypes = {
  /**
   * Component to be rendered in our list
   */
  item: PropTypes.any,
};

export default ListItem;
