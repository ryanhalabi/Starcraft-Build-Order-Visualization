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

    this.state = {
      buildingName: props.buildingName,
      buildTimes: buildTimes,
      maxTime: maxTime,
    };
  }

  render() {
    let buildingName = this.state.buildingName;

    return (
      <td>
        <div className="BuildingTrack">
          {buildingName}
          <div text-align="center">
            <img
              src={`/${buildingName}.png`}
              alt={`${buildingName}`}
              width={80}
            />
          </div>
          <table align-self="center">
            <tbody>
              <tr style={{ verticalAlign: "top" }}>
                {this.state.buildTimes.map((buildTime) => {
                  return (
                    <td className="BuildingSubTrackCol" key={buildTime}>
                      <BuildingSubTrack
                        key={buildTime}
                        buildTime={buildTime}
                        maxTime={this.state.maxTime}
                      />
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { globalState: state };
}

export default connect(mapStateToProps)(BuildingTrack);
