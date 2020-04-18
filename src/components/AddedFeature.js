import React from "react";
import { removeFeature } from "../actions/index";
import { connect } from "react-redux";

const AddedFeature = (props) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        onClick={() => {
          props.removeFeature(props.feature);
        }}
        className="button"
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = (state) => {
  return { ...state.car.features };
};

export default connect(mapStateToProps, { removeFeature })(AddedFeature);
