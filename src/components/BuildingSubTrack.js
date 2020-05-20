import React from "react";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import "../Component.css";
import Slider from "@material-ui/core/Slider";
import { Rectangle } from "react-shapes";

export class BuildingSubTrack extends React.Component {
  constructor(props) {
    super(props);
    this.state = { buildTime: props.buildTime, maxTime: props.maxTime };
  }

  render() {
    console.log(this.state.buildTime);

    return (
      <div className="BuildingSubTrack">
        <Slider
          orientation="vertical"
          height={this.state.maxTime}
          defaultValue={this.state.buildTime}
        />

        {/* <Rectangle
          width={2}
          height={this.state.buildTime}
          fill={{ color: "grey" }}
          stroke={{ color: "#E65243" }}
          strokeWidth={3}
        />
        <Rectangle
          width={2}
          height={height}
          fill={{ color: "#2409ba" }}
          stroke={{ color: "#E65243" }}
          strokeWidth={3}
        /> */}
      </div>
    );
  }
}
