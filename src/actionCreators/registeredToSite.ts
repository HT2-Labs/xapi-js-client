import UserSiteAction from '../actionUtils/UserSiteAction';
import { site, source } from '../statementConstants/activityTypes';
import { registered } from '../statementConstants/verbs';
import createActivity from '../statementUtils/createActivity';
import createAgent from '../statementUtils/createAgent';
import createTimestamp from '../statementUtils/createTimestamp';
import { Statement } from '../statementUtils/types';

/**
 * Creates an xAPI Statement to represent a user registering to a site.
 */
export default function registeredToSite(action: UserSiteAction): Statement {
  return {
    timestamp: createTimestamp(action.actionDate),
    actor: createAgent({
      displayName: action.userDisplayName,
      id: action.userId,
      idProviderUrl: action.userIdProviderUrl,
      email: action.userEmail,
    }),
    verb: registered,
    object: createActivity({
      type: site,
      url: action.siteUrl,
      name: action.siteName,
    }),
    context: {
      platform: action.platformName,
      language: 'en',
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
