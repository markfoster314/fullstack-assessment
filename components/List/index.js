import React from "react";
import PropTypes from "prop-types";

import Ul from "./Ul";
import Td from "./Td";
import Table from "./Table";
import Wrapper from "./Wrapper";
import H3 from "./H3";

/**
 *
 * Creates a list of items
 *
 * @author [Mark Foster](https://github.com/markfoster314)
 *
 */
function List({ component, items }) {
  const ComponentToRender = component;
  let content = <div />;

  // If we have items, render them
  if (items) {
    content = items.map((item) => (
      <ComponentToRender key={`item-${item.id}`} item={item} />
    ));
  } else {
    // Otherwise render a single component
    content = <ComponentToRender />;
  }

  let ColumnHeaders = (
    <Table>
      <tbody>
        <tr>
          <Td>
            <H3>Company</H3>
          </Td>
          <Td>
            <H3>Amount</H3>
          </Td>
          <Td>
            <H3>Date</H3>
          </Td>
        </tr>
      </tbody>
    </Table>
  );

  return (
    <div>
      {items && ColumnHeaders}
      <Wrapper>
        <Ul>{content}</Ul>
      </Wrapper>
    </div>
  );
}

List.propTypes = {
  /**
   * React Component to generate a list of
   */
  component: PropTypes.elementType.isRequired,
  /**
   * Data for generating components
   */
  items: PropTypes.array,
};

export default List;
