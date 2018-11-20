import UserSiteAction from '../actionUtils/UserSiteAction';
import { site, source, survey, surveyResponse } from '../statementConstants/activityTypes';
import { completed } from '../statementConstants/verbs';
import createActivity from '../statementUtils/createActivity';
import createAgent from '../statementUtils/createAgent';
import createTimestamp from '../statementUtils/createTimestamp';
import { Extensions, Statement } from '../statementUtils/types';

export interface SurveyResponseAction extends UserSiteAction {
  /** Name of the survey. */
  readonly surveyName?: string;

  /** URL to access the survey. */
  readonly surveyUrl: string;

  /** Additional data about the survey. */
  readonly surveyExtensions?: Extensions;

  /** URL to identify the survey response. */
  readonly surveyResponseUrl: string;

  /** Additional data about the survey response. */
  readonly surveyResponseExtensions?: Extensions;
}

/**
 * Creates an xAPI Statement to represent a user's response to a survey.
 */
export default function completedSurvey(action: SurveyResponseAction): Statement {
  return {
    timestamp: createTimestamp(action.actionDate),
    actor: createAgent({
      displayName: action.userDisplayName,
      id: action.userId,
      idProviderUrl: action.userIdProviderUrl,
      email: action.userEmail,
    }),
    verb: completed,
    object: createActivity({
      type: survey,
      url: action.surveyUrl,
      name: action.surveyName,
      extensions: action.surveyExtensions,
    }),
    context: {
      platform: action.platformName,
      language: 'en',
      extensions: action.contextExtensions,
      contextActivities: {
        other: [createActivity({
          type: surveyResponse,
          url: action.surveyResponseUrl,
          extensions: action.surveyResponseExtensions,
        })],
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
