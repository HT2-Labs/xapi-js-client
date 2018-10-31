import followSiteUser from '../statementCreators/followSiteUser';

const statement = followSiteUser({
  actionDate: new Date(),
  siteUrl: 'https://demo.example.org',
  siteName: 'Demo Example Site',
  platformUrl: 'https://example.org',
  platformName: 'Example Platform',
  followerId: '1',
  followerEmail: 'demo1@example.org',
  followerDisplayName: 'Demo User 1',
  followeeId: '2',
  followeeEmail: 'demo2@example.org',
  followeeDisplayName: 'Demo User 2',
  userIdProviderUrl: 'https://demo.example.org',
});

export default statement;
