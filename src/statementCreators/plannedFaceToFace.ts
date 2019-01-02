import UserSiteActivityAction from '../actionUtils/UserSiteActivityAction';
import { faceToFace, source } from '../statementConstants/activityTypes';
import { planned } from '../statementConstants/verbs';
import createActivity from '../statementUtils/createActivity';
import createAgent from '../statementUtils/createAgent';
import { Statement } from '../statementUtils/types';


export interface FaceToFaceAction extends UserSiteActivityAction {
  /** URL to access the survey. */
  readonly existingDate: string;
}

/**
 * Creates an xAPI Statement to represent a user planning a face-to-face meeting.
 */
export default function plannedFaceToFace(action: FaceToFaceAction): Statement {
  return {
    timestamp: action.existingDate,
    actor: createAgent({
      displayName: action.userDisplayName,
      id: action.userId,
      idProviderUrl: action.userIdProviderUrl,
      email: action.userEmail,
    }),
    verb: planned,
    object: createActivity({
      type: faceToFace,
      url: action.activityUrl,
      name: 'appointment',
    }),
    context: {
      platform: action.platformName,
      language: 'en',
    },
  };
}
