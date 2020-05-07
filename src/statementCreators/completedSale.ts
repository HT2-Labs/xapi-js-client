import UserSiteAction from '../actionUtils/UserSiteAction';
import { organization, salesOpportunity, site, source } from '../statementConstants/activityTypes';
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

  /** The URL or identifier of the account that owns the sale or opportunity. */
  readonly accountUrl: string;

  /** The name of the account that owns the sale or opportunity. */
  readonly accountDisplayName?: string;
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
          createActivity({
            type: organization,
            url: action.accountUrl,
            name: action.accountDisplayName,
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
