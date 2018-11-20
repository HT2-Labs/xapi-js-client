import UserSiteActivityAction from '../actionUtils/UserSiteActivityAction';
import { comment, site, source } from '../statementConstants/activityTypes';
import { commentedOn } from '../statementConstants/verbs';
import createActivity from '../statementUtils/createActivity';
import createAgent from '../statementUtils/createAgent';
import createTimestamp from '../statementUtils/createTimestamp';
import { Statement } from '../statementUtils/types';

export interface CommentAction extends UserSiteActivityAction {
  /** The URL where the activity can be accessed. */
  readonly commentUrl: string;

  /** The text of the comment. */
  readonly commentText?: string;
}

/**
 * Creates an xAPI Statement to represent a user commenting on a site activity.
 */
export default function commentedOnSiteActivity(action: CommentAction): Statement {
  return {
    timestamp: createTimestamp(action.actionDate),
    actor: createAgent({
      displayName: action.userDisplayName,
      id: action.userId,
      idProviderUrl: action.userIdProviderUrl,
      email: action.userEmail,
    }),
    verb: commentedOn,
    object: createActivity({
      type: action.activityType,
      url: action.activityUrl,
      name: action.activityName,
      extensions: action.activityExtensions,
    }),
    result: {
      response: action.commentText,
    },
    context: {
      platform: action.platformName,
      language: 'en',
      extensions: action.contextExtensions,
      contextActivities: {
        other: [createActivity({
          type: comment,
          url: action.commentUrl,
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
