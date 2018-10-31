import actionOnSiteActivity from '../actionCreators/actionOnSiteActivity';
import { course } from '../statementConstants/activityTypes';
import { completed } from '../statementConstants/verbs';

const statement = actionOnSiteActivity({
  verb: completed,
  activityType: course,
  activityName: 'Demo Course',
  activityUrl: 'https://demo.example.org/courses/demo-course',
  actionDate: new Date(),
  siteUrl: 'https://demo.example.org',
  siteName: 'Demo Example Site',
  platformUrl: 'https://example.org',
  platformName: 'Example Platform',
  userId: '123',
  userIdProviderUrl: 'https://demo.example.org',
  userEmail: 'demo@example.org',
  userDisplayName: 'Demo User',
});

export default statement;
