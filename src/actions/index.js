export const UPDATE_BUILDING_BUILD_TIMES = "UPDATE_BUILD_TIMES";

export function UPDATE_BUILD_TIMES(building_name, time, amount) {
  return {
    type: UPDATE_BUILDING_BUILD_TIMES,
    buildingName: building_name,
    time: time,
    amount: amount,
  };
}
