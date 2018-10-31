import createBasicAuthToken from '../statementUtils/createBasicAuthToken';
import insertStatements from '../statementUtils/insertStatements';
import actionOnSiteActivity from './actionOnSiteActivity';

const main = async () => {
  try {
    await insertStatements({
      statements: [actionOnSiteActivity],
      endpoint: 'https://example.org/lrs/xAPI',
      authToken: createBasicAuthToken({
        key: 'demo-key',
        secret: 'demo-secret',
      }),
    });
    // tslint:disable-next-line:no-console
    console.log('Successfully inserted statements');
  } catch {
    // tslint:disable-next-line:no-console
    console.log('Failed inserting statements');
  }
};

main();
