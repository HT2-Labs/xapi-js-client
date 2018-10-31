/**
 * Creates an ISO timestamp with a date, time, and timezone from the given JavaScript date.
 * https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#timestamps
 */
export default function createTimestamp(date: Date) {
  return date.toISOString();
}
