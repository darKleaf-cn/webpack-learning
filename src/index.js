import _ from 'lodash';
import numRef from './ref.json';

export function numToWorld(num) {
  return _.reduce(
    numRef,
    (accum, ref) => {
      return ref.num === num ? ref.world : accum;
    },
    ''
  );
}

export function worldToNum(world) {
  return _.reduce(
    numRef,
    (accum, ref) => {
      return ref.world === world && world.toLowerCase() ? ref.num : accum;
    },
    -1
  );
}
