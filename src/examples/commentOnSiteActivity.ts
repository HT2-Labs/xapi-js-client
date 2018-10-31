import commentOnSiteActivity from '../actionCreators/commentOnSiteActivity';
import { course } from '../statementConstants/activityTypes';

const statement = commentOnSiteActivity({
  activityType: course,
  activityName: 'Demo Course',
  activityUrl: 'https://demo.example.org/courses/demo-course',
  actionDate: new Date(),
  commentText: 'Demo comment',
  commentUrl: 'https://demo.example.org/comments/1',
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
