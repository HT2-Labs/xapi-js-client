import UserSiteAction from '../actionUtils/UserSiteAction';
import { salesOpportunity, site, source } from '../statementConstants/activityTypes';
import { closedSale } from '../statementConstants/verbs';
import createActivity from '../statementUtils/createActivity';
import createAgent from '../statementUtils/createAgent';
import createTimestamp from '../statementUtils/createTimestamp';
import { Extensions, Statement } from '../statementUtils/types';

export interface CompletedSaleAction extends UserSiteAction {
  /** The URL where the activity can be accessed. */
  readonly activityUrl: string;

  /** The human readable name for the activity. */
  readonly activityName?: string;

  /** Additional properties of the activity. */
  readonly activityExtensions?: Extensions;

  /** Determines if the sale was a success or failure. */
  readonly isWon?: boolean;

  /** The reason for which a sale or opportunity is closed, usually when lost */
  readonly closedReason?: string;

  /** The name of the account linked to the sale or opportunity. */
  readonly accountDisplayName?: string;

  /** The unique identifier for the account. */
  readonly accountId?: string;

  /** The URL of the identity provider (e.g. https://ht2labs.com). Use siteUrl as fallback. */
  readonly accountProviderUrl?: string;

  /** An email address for the account (e.g. user@example.org). */
  readonly accountEmail?: string;
}

/**
 * Creates an xAPI Statement to represent a user completing a face-to-face meeting.
 */
export default function completedSale(action: CompletedSaleAction): Statement {
  return {
    timestamp: createTimestamp(action.actionDate),
    actor: createAgent({
      displayName: action.userDisplayName,
      id: action.userId,
      idProviderUrl: action.userIdProviderUrl,
      email: action.userEmail,
    }),
    verb: closedSale,
    object: createActivity({
      type: salesOpportunity,
      url: action.activityUrl,
      name: action.activityName,
      extensions: action.activityExtensions,
    }),
    context: {
      platform: action.platformName,
      language: 'en',
      extensions: action.contextExtensions,
      contextActivities: {
        grouping: [
          createActivity({
            type: site,
            url: action.siteUrl,
            name: action.siteName,
          }),
          createAgent({
            displayName: action.accountDisplayName,
            id: action.accountId,
            idProviderUrl: action.accountProviderUrl,
            email: action.accountEmail,
          }),
        ],
        category: [createActivity({
          type: source,
          url: action.platformUrl,
          name: action.platformName,
        })],
      },
    },
    result: {
      success: action.isWon,
      response: action.closedReason,
    },
  };
}
