import { UPDATE_BUILDING_BUILD_TIMES } from "../actions/index";
import { buildTimeStates } from "../components/State";

export const buildOrderState = (state = {}, action) => {
  var currentCount = state[action.buildingName];

  switch (action.type) {
    case UPDATE_BUILDING_BUILD_TIMES:
      var update = {};
      update[action.buildingName] = currentCount + action.amount;
      var newBuildTimes = Object.assign({}, state, update);

      return {
        buildTimes: newBuildTimes,
        timeStates: buildTimeStates(newBuildTimes),
      };

    default:
      return state;
  }
};

export const metaState = (state = {}, action) => {

  switch (action.type) {
    default:
      return state;
  }
};
