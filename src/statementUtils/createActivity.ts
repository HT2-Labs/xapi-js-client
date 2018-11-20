import { Activity, Extensions } from './types';

export interface CreateActivityOpts {
  /**
   * The xAPI activity type.
   * Use the string constants exported from `statementConstants/activityTypes`.
   */
  readonly type: string;

  /** The URL where the activity can be accessed. */
  readonly url: string;

  /** The human readable name for the activity in English. */
  readonly name?: string;

  /** Additional properties of the activity. */
  readonly extensions?: Extensions;
}

/**
 * Creates an xAPI Activity object from the given options using best practices.
 * https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#2441-when-the-objecttype-is-activity
 */
export default function createActivity(options: CreateActivityOpts): Activity {
  return {
    objectType: 'Activity',
    id: options.url,
    definition: {
      type: options.type,
      name: {
        en: options.name,
      },
      extensions: options.extensions,
    },
  };
}
