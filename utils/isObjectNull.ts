/* eslint-disable @typescript-eslint/no-explicit-any */
export default function allKeysHaveValues(obj: any) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] === undefined || obj[key] === null || obj[key] === '') {
        return false;
      }
    }
  }
  return true;
}
