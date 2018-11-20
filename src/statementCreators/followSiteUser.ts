import SiteAction from '../actionUtils/SiteAction';
import { site, source } from '../statementConstants/activityTypes';
import { followed } from '../statementConstants/verbs';
import createActivity from '../statementUtils/createActivity';
import createAgent from '../statementUtils/createAgent';
import createTimestamp from '../statementUtils/createTimestamp';
import { Statement } from '../statementUtils/types';

export interface FollowAction extends SiteAction {
  /** The name of the user that followed the other. */
  readonly followerDisplayName?: string;

  /** The unique identifier for the follower. */
  readonly followerId?: string;

  /** An email address for the follower (e.g. user@example.org). */
  readonly followerEmail?: string;

  /** The name of the user that was followed. */
  readonly followeeDisplayName?: string;

  /** The unique identifier for the person that was followed. */
  readonly followeeId?: string;

  /** An email address for the person that was followed (e.g. user@example.org). */
  readonly followeeEmail?: string;

  /** The URL of the identity provider (e.g. https://ht2labs.com). Falls back to the siteUrl. */
  readonly userIdProviderUrl?: string;
}

/**
 * Creates an xAPI Statement to represent a user following another user.
 */
export default function followSiteUser(action: FollowAction): Statement {
  return {
    timestamp: createTimestamp(action.actionDate),
    actor: createAgent({
      displayName: action.followerDisplayName,
      id: action.followerId,
      idProviderUrl: action.userIdProviderUrl,
      email: action.followerEmail,
    }),
    verb: followed,
    object: createAgent({
      displayName: action.followeeDisplayName,
      id: action.followeeId,
      idProviderUrl: action.userIdProviderUrl,
      email: action.followeeEmail,
    }),
    context: {
      platform: action.platformName,
      language: 'en',
      extensions: action.contextExtensions,
      contextActivities: {
        grouping: [createActivity({
          type: site,
          url: action.siteUrl,
          name: action.siteName,
        })],
        category: [createActivity({
          type: source,
          url: action.platformUrl,
          name: action.platformName,
        })],
      },
    },
  };
}
