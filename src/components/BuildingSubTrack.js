import React from "react";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";

import { Rectangle } from "react-shapes";

export class BuildingSubTrack extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bucket: props.bucket };
  }

  render() {
    var height = this.state.bucket.range[1] - this.state.bucket.range[0];
    return (
      <div>
        <Rectangle
          width={2}
          height={height}
          fill={{ color: "#2409ba" }}
          stroke={{ color: "#E65243" }}
          strokeWidth={3}
        />
      </div>
    );
  }
}
