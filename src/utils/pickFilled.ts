import { pickBy } from 'lodash';

export function pickFilled<V extends object>(obj: {
  readonly [key: string]: V;
}) {
  return pickBy(obj, function (value) {
    return Object.keys(value).length !== 0;
  });
}
