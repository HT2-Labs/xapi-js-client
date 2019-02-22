// tslint:disable:max-file-line-count

const customBaseUrl = 'https://learninglocker.net/xapi';

/**
 * Represents objects such as news articles, knowledge base entries, or other similar construct.
 * Such objects generally consist of paragraphs of text.
 * https://registry.tincanapi.com/#uri/activityType/55
 */
export const article = 'http://activitystrea.ms/schema/1.0/article';

/**
 * An activity type that determines a learner’s mastery of a particular subject area.
 * An assessment typically has one or more questions.
 */
export const assessment = 'http://adlnet.gov/expapi/activities/assessment';

/**
 * An attempt is a discrete set of learner experiences in an activity.
 * Uniquely identify experiences in different interactions with the same activity.
 */
export const attempt = 'http://adlnet.gov/expapi/activities/attempt';

/**
 * Regularly updated website or web page typically authored by an individual or small group.
 * Usually written in an informal or conversational style.
 */
export const blog = 'http://id.tincanapi.com/activitytype/blog';

/**
 * A book, generally paper, but could also be an ebook.
 * The Activity's ID will often include an ISBN though it is not required.
 * The Definition can likely leverage the ISBN extension (http://id.tincanapi.com/extension/isbn).
 */
export const book = 'http://id.tincanapi.com/activitytype/book';

/**
 * Represents a textual response to another object.
 * https://registry.tincanapi.com/#uri/activityType/59
 */
export const comment = 'http://activitystrea.ms/schema/1.0/comment';

/**
 * A course represents an entire “content package” worth of material.
 * The largest level of granularity. Unless flat, a course consists of multiple modules
 */
export const course = 'http://adlnet.gov/expapi/activities/course';

/**
 * Represents an ongoing conversation between persons, such as an email thread or a forum topic.
 */
export const discussion = 'http://id.tincanapi.com/activitytype/discussion';

/**
 * An electronic document of the type produced by office productivity software.
 */
export const document = 'http://id.tincanapi.com/activitytype/document';

/**
 * Represents an event that occurs at a certain location during a particular period of time.
 * https://registry.tincanapi.com/#uri/activityType/61
 */
export const event = 'http://activitystrea.ms/schema/1.0/event';

/**
 * Represents a face to face meeting or appointment
 */
export const faceToFace = 'https://w3id.org/xapi/acrossx/activities/face-to-face-discussion';

/**
 * Represents a graphical image.
 * https://registry.tincanapi.com/#uri/activityType/65
 */
export const image = 'http://activitystrea.ms/schema/1.0/image';

/**
 * Represents a report about a problem or situation that needs to be resolved.
 * https://registry.tincanapi.com/#uri/activityType/66
 */
export const issue = 'http://activitystrea.ms/schema/1.0/issue';

/**
 * Means of expressing a link to another resource within, or external to, an activity.
 * Not synonymous with launching another resource.
 * Should be considered external to the current resource.
 * Links are not learning content, nor SCOs.
 * If a link is intended for this purpose, it should be re-categorized.
 */
export const link = 'http://adlnet.gov/expapi/activities/link';

/**
 * Represents a record of an event.
 */
export const logEntry = `${customBaseUrl}/log-entry`;

/**
 * Information that is communicated by or to or between individual actors or groups of actors.
 */
export const message = 'https://w3id.org/xapi/acrossx/activities/message';

/**
 * Represents an organization of any kind.
 * https://registry.tincanapi.com/#uri/activityType/70
 */
export const organization = 'http://activitystrea.ms/schema/1.0/organization';

/**
 * Typically a web page.
 * https://registry.tincanapi.com/#uri/activityType/71
 */
export const page = 'http://activitystrea.ms/schema/1.0/page';

/**
 * A podcast (this was made by HT2 Labs).
 */
export const podcast = 'http://learninglocker.net/xapi/activity-type/podcast';

/**
 * A question is typically part of an assessment and requires a response from the learner.
 * The response is then evaluated for correctness.
 */
export const question = 'http://adlnet.gov/expapi/activities/question';

/**
 * Represents a primarily prose-based commentary on another object.
 * https://registry.tincanapi.com/#uri/activityType/76
 */
export const review = 'http://activitystrea.ms/schema/1.0/review';

/**
 * Represents an account given of a particular matter, usually in the form of a document.
 */
export const report = `${customBaseUrl}/report`;

/**
 * Represents the resource being assigned to an actor.
 */
export const resourceAssignment = `${customBaseUrl}/resource-assignment`;

/**
 * Represents a resource structure.
 */
export const resourceStructure = `${customBaseUrl}/resource-structure`;

/**
 * Represents a node in a resource structure.
 */
export const resourceStructureNode = `${customBaseUrl}/resource-structure-node`;

/**
 * Represents a feature to enable admins to manage access on a per-user or per-group basis.
 */
export const securityRole = 'http://id.tincanapi.com/activitytype/security-role';

/**
 * Represents a site. Usually provided in the grouping context activities.
 * Usually the URL for an instance of a platform (e.g. "https://moodle.org").
 * First used in Moodle https://github.com/xAPI-vle/moodle-logstore_xapi/issues/11.
 * Not found in any vocab registry.
 */
export const site = 'http://id.tincanapi.com/activitytype/site';

/**
 * Used with activities within the Context Activities category property of a Statement.
 * Indicates the authoring tool, template or framework used to create the activity provider.
 */
export const source = 'http://id.tincanapi.com/activitytype/source';

/**
 * A status update e.g. on a social platform.
 */
export const statusUpdate = 'http://id.tincanapi.com/activitytype/status-update';

/**
 * A survey where the respondent answers questions.
 * https://registry.tincanapi.com/#uri/activityType/500
 */
export const survey = 'http://id.tincanapi.com/activitytype/survey';

/**
 * A survey response (this was made by HT2 Labs).
 */
export const surveyResponse = 'http://learninglocker.net/xapi/activity-type/survey-response';

/**
 * Activity generally used in the grouping Context Activities.
 * Mark a statement as being related to a particular subject area.
 * Implemented as a one word identifier used for search filtering or tag cloud generation."
 */
export const tag = 'http://id.tincanapi.com/activitytype/tag';

/**
 * Represents an activity that has yet to be completed.
 * https://registry.tincanapi.com/#uri/activityType/78
 */
export const task = 'http://activitystrea.ms/schema/1.0/task';

/**
 * This represents a tutoring session.
 */
export const tutorSession = 'http://id.tincanapi.com/activitytype/tutor-session';

/**
 * A recording of both the visual and audible components made available on a display screen.
 */
export const video = 'https://w3id.org/xapi/video/activity-type/video';

/**
 * This represents a sequence of processes.
 */
export const workflow = `${customBaseUrl}/workflow`;
