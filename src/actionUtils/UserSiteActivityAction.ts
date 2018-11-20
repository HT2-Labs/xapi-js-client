import { Extensions } from '../statementUtils/types';
import UserSiteAction from './UserSiteAction';

export default interface UserSiteActivityAction extends UserSiteAction {
  /**
   * The xAPI activity type.
   * Use the string constants exported from `statementConstants/activityTypes`.
   */
  readonly activityType: string;

  /** The URL where the activity can be accessed. */
  readonly activityUrl: string;

  /** The human readable name for the activity. */
  readonly activityName?: string;

  /** Additional properties of the activity. */
  readonly activityExtensions?: Extensions;
}
