import React from "react";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { BuildingSubTrack } from "./BuildingSubTrack";
import { TrackDivider } from "./TrackDivider";
// import { images } from "./Images";
import { Circle } from "react-shapes";
import Slider from "@material-ui/core/Slider";
import "../Component.css";

// responsible for visualizing the buildings
// each track will be a single vertical line, option to add +1, and drag and drop
class BuildingTrack extends React.Component {
  constructor(props) {
    super(props);

    var buildTimes =
      props.globalState.buildOrderState.buildTimes.buildings[
        props.buildingName
      ];
    var maxTime = props.globalState.metaState.maxTime;
    var buckets = this.makeSubTrackData(buildTimes, maxTime);

    this.state = {
      buildingName: props.buildingName,
      buckets: buckets,
    };
  }

  makeSubTrackData(buildTimes, maxTime) {
    if (buildTimes.length === 0) {
      return buildTimes;
    }

    buildTimes = buildTimes.concat([maxTime]);
    var accumulator = 1;
    var timeCounts = buildTimes.reduce((acc, cur) => {
      if (!acc[cur]) {
        acc[cur] = accumulator;
      } else {
        acc[cur] = +1;
      }
      accumulator++;
      return acc;
    }, {});

    var sortedTimes = Object.keys(timeCounts).sort((a, b) => a - b);
    var buckets = [];
    for (var i = 0; i < sortedTimes.length - 1; i++) {
      var bucket = {
        range: [sortedTimes[i], sortedTimes[i + 1]],
        count: timeCounts[sortedTimes[i]],
      };
      buckets.push(bucket);
    }

    return buckets;
  }

  render() {
    let buildingName = this.state.buildingName;

    console.log(this.state.buckets);

    return (
      <Col>
        <div className="BuildingTrack">
          {buildingName}
          <img
            src={`/${buildingName}.png`}
            alt={`${buildingName}`}
            width={80}
          />

          <Container>
            <Row>
              {this.state.buckets.map((value, index) => {
                return (
                  <Col className="BuildingSubTrackCol" key={value.range}>
                    <BuildingSubTrack key={value.range[0]} bucket={value} />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      </Col>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { globalState: state };
}

export default connect(mapStateToProps)(BuildingTrack);
