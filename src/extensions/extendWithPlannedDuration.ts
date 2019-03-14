import moment from 'moment';
import { plannedDuration, plannedDurationBreakdown } from '../statementConstants/extensions';

export function extendWithPlannedDuration(isoDuration?: string) {
  if (isoDuration === undefined) {
    return {};
  }
  const momentDuration = moment.duration(isoDuration);
  return {
    [plannedDuration]: isoDuration,
    [plannedDurationBreakdown]: {
      days: momentDuration.as('days'),
      hours: momentDuration.as('hours'),
      minutes: momentDuration.as('minutes'),
    },
  };
}
