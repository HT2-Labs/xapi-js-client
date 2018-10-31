import actionOnSite from './actionCreators/actionOnSiteActivity';
import assignedSiteActivity from './actionCreators/assignedSiteActivity';
import commentOnSiteActivity from './actionCreators/commentOnSiteActivity';
import followSiteUser from './actionCreators/followSiteUser';
import loggedIntoSite from './actionCreators/loggedIntoSite';
import loggedOutOfSite from './actionCreators/loggedOutOfSite';
import registeredToSite from './actionCreators/registeredToSite';
import * as activityTypes from './statementConstants/activityTypes';
import * as extensions from './statementConstants/extensions';
import * as verbs from './statementConstants/verbs';
import createActivity from './statementUtils/createActivity';
import createAgent from './statementUtils/createAgent';
import createTimestamp from './statementUtils/createTimestamp';
import * as types from './statementUtils/types';

export const actionCreators = {
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
  createTimestamp,
  types,
};

export const statementConstants = {
  activityTypes,
  extensions,
  verbs,
};
