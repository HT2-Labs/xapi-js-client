import UserSiteAction from './UserSiteAction';

export default interface UserSiteActivityAction extends UserSiteAction {
  /** The xAPI activity type. */
  readonly activityType: string;

  /** The URL where the activity can be accessed. */
  readonly activityUrl: string;

  /** The human readable name for the activity. */
  readonly activityName?: string;
}
