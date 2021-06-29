import React from "react";
import PropTypes from "prop-types";

function Season(props) {

  return (
    <React.Fragment>
      <h3>{props.month}</h3>
      <h3>{props.selection.map((produce) =>
        <li>{produce}</li>
      )}</h3>
      <hr />
    </React.Fragment>
  );
}

Season.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired,
};

export default Season;