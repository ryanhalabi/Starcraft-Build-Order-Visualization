import React from "react";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";

import { Rectangle } from "react-shapes";

export class TrackDivider extends React.Component {
  constructor(props) {
    super(props);
    this.time = props.time;
  }

  render() {
    return (
      <div className="TrackDivider">
        <Rectangle
          width={2}
          height={2}
          fill={{ color: "green" }}
          stroke={{ color: "green" }}
          strokeWidth={3}
        />
      </div>
    );
  }
}
