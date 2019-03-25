import { Duration } from 'moment';
import UserSiteActivityAction from '../actionUtils/UserSiteActivityAction';
import { site, source } from '../statementConstants/activityTypes';
import createActivity from '../statementUtils/createActivity';
import createAgent from '../statementUtils/createAgent';
import createTimestamp from '../statementUtils/createTimestamp';
import { Statement, Verb } from '../statementUtils/types';
import { pickDefined } from '../utils/pickDefined';
import { pickFilled } from '../utils/pickFilled';

export interface SiteActivityAction extends UserSiteActivityAction {
  /** The xAPI verb that describes the activity. */
  readonly verb: Verb;

  /** Determines if the activity was completed. */
  readonly completed?: boolean;

  /** Determines if the activity was passed or failed. */
  readonly passed?: boolean;

  /** Determines how long the activity took. */
  readonly duration?: Duration;
}

/**
 * Creates an xAPI Statement to represent a user's action on a site activity.
 */
export default function actionOnSiteActivity(action: SiteActivityAction): Statement {
  return {
    timestamp: createTimestamp(action.actionDate),
    actor: createAgent({
      displayName: action.userDisplayName,
      id: action.userId,
      idProviderUrl: action.userIdProviderUrl,
      email: action.userEmail,
    }),
    verb: action.verb,
    object: createActivity({
      type: action.activityType,
      url: action.activityUrl,
      name: action.activityName,
      extensions: action.activityExtensions,
    }),
    ...pickFilled({
      result: pickDefined({
        completion: action.completed,
        success: action.passed,
        duration: action.duration === undefined ? undefined : (
          action.duration.toISOString()
        ),
      }),
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
