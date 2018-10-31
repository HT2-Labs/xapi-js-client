import assignedSiteActivity from '../actionCreators/assignedSiteActivity';
import { course } from '../statementConstants/activityTypes';

const statement = assignedSiteActivity({
  activityType: course,
  activityName: 'Demo Course',
  activityUrl: 'https://demo.example.org/courses/demo-course',
  actionDate: new Date(),
  dueDate: new Date(),
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
