import completedSale from '../statementCreators/completedSale';

const statement = completedSale({
  actionDate: new Date(),
  activityUrl: 'https://demo.example.org/courses/demo-course',
  siteUrl: 'https://demo.example.org',
  siteName: 'Demo Example Site',
  platformUrl: 'https://example.org',
  platformName: 'Example Platform',
  userId: '123',
  userIdProviderUrl: 'https://demo.example.org',
  userEmail: 'demo@example.org',
  userDisplayName: 'Demo User',
  isWon: true,
  closedReason: 'Too expensive',
  accountDisplayName: 'Example Account',
  accountUrl: 'https://demo.example.org',
});

export default statement;
