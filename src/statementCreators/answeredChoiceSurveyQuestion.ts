// tslint:disable:max-file-line-count
import UserSiteAction from '../actionUtils/UserSiteAction';
import {
  question,
  site,
  source,
  survey,
  surveyResponse,
} from '../statementConstants/activityTypes';
import { choiceResponseExtension } from '../statementConstants/extensions';
import { answered } from '../statementConstants/verbs';
import createActivity from '../statementUtils/createActivity';
import createAgent from '../statementUtils/createAgent';
import createTimestamp from '../statementUtils/createTimestamp';
import { Extensions, Statement } from '../statementUtils/types';

export interface Action extends UserSiteAction {
  /** Name of the survey. */
  readonly surveyName?: string;

  /** URL to access the survey. */
  readonly surveyUrl: string;

  /** Additional data about the survey. */
  readonly surveyExtensions?: Extensions;

  /** Question asked in the survey. */
  readonly questionText?: string;

  /** URL to identify the survey question. */
  readonly questionUrl: string;

  /** Additional data about the question. */
  readonly questionExtensions?: Extensions;

  /** URL to identify the survey response. */
  readonly surveyResponseUrl: string;

  /** Additional data about the survey response. */
  readonly surveyResponseExtensions?: Extensions;

  /** The choice provided to answer the question. */
  readonly answerChoice: string;

  /** Additional data about the answer. */
  readonly answerExtensions?: Extensions;
}

/**
 * Creates an xAPI Statement to represent a user's answering a survey question with a choice.
 */
export default function answeredChoiceSurveyQuestion(action: Action): Statement {
  return {
    timestamp: createTimestamp(action.actionDate),
    actor: createAgent({
      displayName: action.userDisplayName,
      id: action.userId,
      idProviderUrl: action.userIdProviderUrl,
      email: action.userEmail,
    }),
    verb: answered,
    object: createActivity({
      type: question,
      url: action.questionUrl,
      name: action.questionText,
      extensions: action.questionExtensions,
      interactionType: 'choice',
    }),
    result: {
      response: action.answerChoice,
      extensions: {
        [choiceResponseExtension]: action.answerChoice,
        ...(action.answerExtensions === undefined ? {} : action.answerExtensions),
      },
    },
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
        parent: [createActivity({
          type: survey,
          url: action.surveyUrl,
          name: action.surveyName,
          extensions: action.surveyExtensions,
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
