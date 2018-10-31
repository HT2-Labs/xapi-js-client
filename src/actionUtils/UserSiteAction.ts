import SiteAction from './SiteAction';

export default interface UserSiteAction extends SiteAction {
  /** The name of the user that performed the action. */
  readonly userDisplayName?: string;

  /** The unique identifier for the person. */
  readonly userId?: string;

  /** An email address for the person (e.g. user@example.org). */
  readonly userEmail?: string;

  /** The URL of the identity provider (e.g. https://ht2labs.com). Use siteUrl as fallback. */
  readonly userIdProviderUrl?: string;
}
