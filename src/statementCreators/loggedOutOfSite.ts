import UserSiteAction from '../actionUtils/UserSiteAction';
import { site, source } from '../statementConstants/activityTypes';
import { loggedOut } from '../statementConstants/verbs';
import createActivity from '../statementUtils/createActivity';
import createAgent from '../statementUtils/createAgent';
import createTimestamp from '../statementUtils/createTimestamp';
import { Statement } from '../statementUtils/types';

/**
 * Creates an xAPI Statement to represent a user logging out of a site.
 */
export default function loggedOutOfSite(action: UserSiteAction): Statement {
  return {
    timestamp: createTimestamp(action.actionDate),
    actor: createAgent({
      displayName: action.userDisplayName,
      id: action.userId,
      idProviderUrl: action.userIdProviderUrl,
      email: action.userEmail,
    }),
    verb: loggedOut,
    object: createActivity({
      type: site,
      url: action.siteUrl,
      name: action.siteName,
    }),
    context: {
      platform: action.platformName,
      language: 'en',
      extensions: action.contextExtensions,
      contextActivities: {
        category: [createActivity({
          type: source,
          url: action.platformUrl,
          name: action.platformName,
        })],
      },
    },
  };
}
