import * as activityTypes from './statementConstants/activityTypes';
import * as extensions from './statementConstants/extensions';
import * as verbs from './statementConstants/verbs';
import actionOnSite from './statementCreators/actionOnSiteActivity';
import assignedSiteActivity from './statementCreators/assignedSiteActivity';
import commentOnSiteActivity from './statementCreators/commentOnSiteActivity';
import followSiteUser from './statementCreators/followSiteUser';
import loggedIntoSite from './statementCreators/loggedIntoSite';
import loggedOutOfSite from './statementCreators/loggedOutOfSite';
import registeredToSite from './statementCreators/registeredToSite';
import createActivity from './statementUtils/createActivity';
import createAgent from './statementUtils/createAgent';
import createBasicAuthToken from './statementUtils/createBasicAuthToken';
import createTimestamp from './statementUtils/createTimestamp';
import insertStatements from './statementUtils/insertStatements';
import * as types from './statementUtils/types';

export const statementCreators = {
  actionOnSite,
  assignedSiteActivity,
  commentOnSiteActivity,
  followSiteUser,
  loggedIntoSite,
  loggedOutOfSite,
  registeredToSite,
};

export const statementUtils = {
  createActivity,
  createAgent,
  createBasicAuthToken,
  createTimestamp,
  insertStatements,
  types,
};

export const statementConstants = {
  activityTypes,
  extensions,
  verbs,
};
