import answeredNumericSurveyQuestion from '../statementCreators/answeredNumericSurveyQuestion';

const statement = answeredNumericSurveyQuestion({
  surveyName: 'Demo Survey',
  surveyUrl: 'https://demo.example.org/surveys/demo-survey',
  surveyExtensions: {},
  questionText: 'Demo question',
  questionUrl: 'https://demo.example.org/questions/demo-question',
  questionExtensions: {},
  surveyResponseUrl: 'https://demo.example.org/survey-responses/demo-response',
  surveyResponseExtensions: {},
  answer: 1,
  answerExtensions: {},
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
