import { pickBy } from 'lodash';

export function pickDefined<V extends object>(obj: V) {
  return pickBy(obj, function (value) {
    return value !== undefined;
  });
}
