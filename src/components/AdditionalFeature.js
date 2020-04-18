import React from "react";
import { buyItem } from "../actions/index";
import { connect } from "react-redux";

const AdditionalFeature = (props) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        onClick={() => {
          props.buyItem(props.feature);
        }}
        className="button"
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.car,
  };
};

export default connect(mapStateToProps, { buyItem })(AdditionalFeature);
