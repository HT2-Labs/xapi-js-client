import loggedOutOfSite from '../statementCreators/loggedOutOfSite';

const statement = loggedOutOfSite({
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
