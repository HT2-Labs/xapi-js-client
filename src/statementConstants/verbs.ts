import { Verb } from '../statementUtils/types';

export const createVerb = (id: string, display: string): Verb => {
  return {
    id,
    display: {
      en: display,
    },
  };
};

export const accessed = createVerb('http://activitystrea.ms/schema/1.0/access', 'accessed');
export const answered = createVerb('http://adlnet.gov/expapi/verbs/answered', 'answered');
export const assigned = createVerb('https://w3id.org/xapi/acrossx/verbs/was-assigned', 'assigned');
export const attended = createVerb('http://activitystrea.ms/schema/1.0/attend', 'attended');
export const bookmarked = createVerb('http://id.tincanapi.com/verb/bookmarked', 'bookmarked');
export const called = createVerb('http://id.tincanapi.com/verb/called', 'called');
export const canceled = createVerb('https://w3id.org/xapi/dod-isd/verbs/canceled', 'canceled');
export const commentedOn = createVerb('http://adlnet.gov/expapi/verbs/commented', 'commented on');
export const completed = createVerb('http://adlnet.gov/expapi/verbs/completed', 'completed');
export const created = createVerb('http://activitystrea.ms/schema/1.0/create', 'created');
export const downloaded = createVerb('http://id.tincanapi.com/verb/downloaded', 'downloaded');
export const earned = createVerb('http://id.tincanapi.com/verb/earned', 'earned');
export const edited = createVerb('http://adlnet.gov/expapi/verbs/edited', 'edited');
export const evaluated = createVerb('http://www.tincanapi.co.uk/verbs/evaluated', 'evaluated');
export const exited = createVerb('http://adlnet.gov/expapi/verbs/exited', 'exited');
export const followed = createVerb('https://w3id.org/xapi/dod-isd/verbs/followed', 'followed');
export const joined = createVerb('http://activitystrea.ms/schema/1.0/join', 'joined');
export const launched = createVerb('http://adlnet.gov/expapi/verbs/launched', 'launched');
export const liked = createVerb('https://w3id.org/xapi/acrossx/verbs/liked', 'liked');
export const loggedIn = createVerb('https://w3id.org/xapi/adl/verbs/logged-in', 'logged into');
export const loggedOut = createVerb('https://w3id.org/xapi/adl/verbs/logged-out', 'logged out of');
export const opened = createVerb('http://activitystrea.ms/schema/1.0/open', 'opened');
export const planned = createVerb('https://w3id.org/xapi/dod-isd/verbs/planned', 'planned');
export const posted = createVerb('https://w3id.org/xapi/acrossx/verbs/posted', 'posted');
export const registered = createVerb('http://adlnet.gov/expapi/verbs/registered', 'registered to');
export const replied = createVerb('http://id.tincanapi.com/verb/replied', 'replied');
export const resolved = createVerb('https://w3id.org/xapi/dod-isd/verbs/resolved', 'resolved');
export const restored = createVerb('http://activitystrea.ms/schema/1.0/restore', 'restored');
export const reviewed = createVerb('http://id.tincanapi.com/verb/reviewed', 'reviewed');
export const searched = createVerb('http://activitystrea.ms/schema/1.0/search', 'searched');
export const shared = createVerb('http://adlnet.gov/expapi/verbs/shared', 'shared');
export const submitted = createVerb('http://activitystrea.ms/schema/1.0/submit', 'submitted');
export const viewed = createVerb('http://adlnet.gov/expapi/verbs/viewed', 'viewed');
