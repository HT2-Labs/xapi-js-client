import UserSiteAction from '../actionUtils/UserSiteAction';
import { faceToFace, site, source } from '../statementConstants/activityTypes';
import { completed } from '../statementConstants/verbs';
import createActivity from '../statementUtils/createActivity';
import createAgent from '../statementUtils/createAgent';
import createTimestamp from '../statementUtils/createTimestamp';
import { Extensions, Statement } from '../statementUtils/types';

export interface CompletedFaceToFaceAction extends UserSiteAction {
  /** The URL where the activity can be accessed. */
  readonly activityUrl: string;

  /** The human readable name for the activity. */
  readonly activityName?: string;

  /** Additional properties of the activity. */
  readonly activityExtensions?: Extensions;
}

/**
 * Creates an xAPI Statement to represent a user completing a face-to-face meeting.
 */
export default function completedFaceToFace(action: CompletedFaceToFaceAction): Statement {
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
      type: faceToFace,
      url: action.activityUrl,
      name: action.activityName,
      extensions: action.activityExtensions,
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
