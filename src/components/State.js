export function buildTimeStates(buildTimes, startTime = 0) {
  var timeStates = {};
  var cumulativeState = {};

  for (var i = startTime; i < 10; i++) {
    cumulativeState = updateCumulativeState(i, buildTimes, cumulativeState);
    timeStates[i] = cumulativeState;
  }
  return timeStates;
}

function updateCumulativeState(time, buildTimes, cumulativeState) {
  // update buildlings
  for (var building in buildTimes["buildings"]) {
    let values = buildTimes["buildings"][building];

    cumulativeState[building] = cumulativeState.hasOwnProperty(building)
      ? cumulativeState[building]
      : 0 + values.filter((x) => x === time).length;
  }

  // update units
  for (var unit in buildTimes["units"]) {
    let values = buildTimes["units"][unit];
    cumulativeState[unit] = cumulativeState.hasOwnProperty(unit)
      ? cumulativeState[unit]
      : 0 + values.filter((x) => x === time).length;
  }

  return cumulativeState;
}

const buildTimes = {
  buildings: {
    command_center: [0, 30, 60, 90],
    refinery: [],
    supply_depot: [],
    barracks: [],
    academy: [],
    engineering_bay: [],
    missile_turret: [],
    comstat_station: [],
    factory: [],
    armory: [],
    starport: [],
    science_facility: [],
  },
  units: { scv: [0, 0, 0, 0] },
};

export const initialState = {
  buildOrderState: {
    buildTimes: buildTimes,
    timeStates: buildTimeStates(buildTimes),
  },
  metaState: { maxTime: 200 },
};

// lets have 2 versions
// one contains all the information for game state at current second
// 0: {buildings: {command_center:1}, units: {scv: 4}, resources: {mineral:50, gas:0, supply: 10}}
// 1: {buildings: {command_center:1}, units: {scv: 4}, resources: {mineral:56, gas:0, supply: 10}}
// 2: {buildings: {command_center:1}, units: {scv: 4}, resources: {mineral:62, gas:0, supply: 10}}
// 3: {buildings: {command_center:1}, units: {scv: 5}, resources: {mineral:18, gas:0, supply: 10}}

// this will be derived from a baser list, made up of build times
// {command_center: [0], scvs: [0,0,0,0,3]}
