import { course } from '../statementConstants/activityTypes';
import { liked } from '../statementConstants/verbs';
import createActivity from '../statementUtils/createActivity';
import createAgent from '../statementUtils/createAgent';
import createTimestamp from '../statementUtils/createTimestamp';
import { Statement } from '../statementUtils/types';

const statement: Statement = {
  timestamp: createTimestamp(new Date()),
  actor: createAgent({
    id: '123',
    idProviderUrl: 'https://demo.example.org',
    email: 'demo@example.org',
    displayName: 'Demo User',
  }),
  verb: liked,
  object: createActivity({
    type: course,
    url: 'https://demo.example.org/courses/demo-course',
    name: 'Demo Course',
  }),
};

export default statement;
