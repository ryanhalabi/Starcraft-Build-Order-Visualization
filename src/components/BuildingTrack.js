import React from "react";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { BuildingSubTrack } from "./BuildingSubTrack";
// import { images } from "./Images";
import { Circle } from "react-shapes";
import Slider from "@material-ui/core/Slider";

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
    var buckets = this.buildBuckets(buildTimes, maxTime);

    this.state = {
      buildingName: props.buildingName,
      buckets: buckets,
    };
  }

  buildBuckets(buildTimes, maxTime) {
    if (buildTimes.length === 0) {
      return buildTimes;
    }

    buildTimes = buildTimes.concat([maxTime]);
    var timeCounts = buildTimes.reduce((acc, cur) => {
      if (!acc[cur]) {
        acc[cur] = 1;
      } else {
        acc[cur] = +1;
      }
      return acc;
    }, {});

    var sortedTimes = Object.keys(timeCounts).sort();
    var buckets = [];
    for (var i = 0; i < sortedTimes.length; i = i + 2) {
      var bucket = {
        range: [sortedTimes[i], sortedTimes[i + 1]],
        count: sortedTimes[i],
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
        <div>{buildingName}</div>
        <img src={`/${buildingName}.png`} alt="image" width={80} />
        {/* {images.hasOwnProperty(buildingName) ? (
          images[buildingName]
        ) : (
          <Circle
            radius={1}
            fill={{ color: "#2409ba" }}
            stroke={{ color: "#E65243" }}
            strokeWidth={3}
          />
        )} */}
        {this.state.buckets.map((value, index) => {
          return <BuildingSubTrack key={value.range[0]} bucket={value} />;
        })}
      </Col>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { globalState: state };
}

export default connect(mapStateToProps)(BuildingTrack);
