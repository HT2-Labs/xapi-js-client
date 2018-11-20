import UserSiteActivityAction from '../actionUtils/UserSiteActivityAction';
import { site, source } from '../statementConstants/activityTypes';
import { assigned } from '../statementConstants/verbs';
import createActivity from '../statementUtils/createActivity';
import createAgent from '../statementUtils/createAgent';
import createTimestamp from '../statementUtils/createTimestamp';
import { Statement } from '../statementUtils/types';

export interface AssignedAction extends UserSiteActivityAction {
  /** The date when the user is due to complete the site activity */
  readonly dueDate?: Date;
}

/**
 * Creates an xAPI Statement to represent a user being assigned a site activity.
 */
export default function assignedSiteActivity(action: AssignedAction): Statement {
  return {
    timestamp: createTimestamp(action.actionDate),
    actor: createAgent({
      displayName: action.userDisplayName,
      id: action.userId,
      idProviderUrl: action.userIdProviderUrl,
      email: action.userEmail,
    }),
    verb: assigned,
    object: createActivity({
      type: action.activityType,
      url: action.activityUrl,
      name: action.activityName,
      extensions: action.activityExtensions,
    }),
    context: {
      platform: action.platformName,
      language: 'en',
      extensions: {
        dueDate: action.dueDate,
        ...action.contextExtensions === undefined ? {} : action.contextExtensions,
      },
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
