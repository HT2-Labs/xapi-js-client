// tslint:disable:max-file-line-count

export type IRI = string;
export type UUID = string;
export type InteractionType = (
  'true-false' |
  'choice' |
  'fill-in' |
  'long-fill-in' |
  'matching' |
  'performance' |
  'sequencing' |
  'likert' |
  'numeric' |
  'other'
);

export interface Extensions {
  /**
   * Keys are IRIs describing the value. Values represent the extra relevant data.
   * E.g. in a flight simulator altitude, airspeed, etc might all be relevant.
   * https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#43-iris
   */
  readonly [extension: string]: unknown;
}

export interface LanguageMap {
  /**
   * Keys are RFC 5646 Language Tags. Values are strings for the specified language.
   * http://tools.ietf.org/html/rfc5646
   */
  readonly [language: string]: string | undefined;
}

export interface Verb {
  /**
   * IRI that corresponds to a verb definition.
   * https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#43-iris
   */
  readonly id: IRI;

  /**
   * Human readable representation of the verb in one or more languages.
   * https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#lang-maps
   */
  readonly display?: LanguageMap;
}

export interface Activity {
  readonly objectType: 'Activity';

  /**
   * IRI that corresponds to an activity definition.
   * https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#43-iris
   */
  readonly id: IRI;

  /** Activity metadata */
  readonly definition?: {
    /**
     * IRI representing the type of activity (e.g. "http://adlnet.gov/expapi/activities/course").
     * Use string constants expored from `statementConstants/activityTypes`.
     * https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#43-iris
     */
    readonly type?: IRI;

    /**
     * Human readable representation of the activity in one or more languages.
     * https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#lang-maps
     */
    readonly name: LanguageMap;

    /**
     * Additional relevant data about the activity.
     * https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#miscext
     */
    readonly extensions?: Extensions;

    /**
     * Human readable description of the Activity in one or more languages
     * We recommend that you do not use this to reduce data storage. The name is usually enough.
     * https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#lang-maps
     */
    readonly description?: LanguageMap;

    /**
     * IRI that resolves to a document with human-readable information about the Activity.
     * Can include a way to launch the activity, but isn't usually provided.
     * https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#43-iris
     */
    readonly moreInfo?: IRI;

    /**
     * The type of interaction
     * https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#interactionacts
     */
    readonly interactionType?: InteractionType;
  };
}

export interface UnidentifiedAgent {
  readonly objectType: 'Agent';
  readonly name?: string;
}

export interface MboxAgent extends UnidentifiedAgent {
  readonly mbox: string;
}

export interface AccountAgent extends UnidentifiedAgent {
  readonly account: {
    readonly homePage: string;
    readonly name: string;
  };
}

export type Agent = MboxAgent | AccountAgent;

export interface Context {
  /** Name of the platform used in the experience. */
  readonly platform?: string;

  /**
   * RFC 5656 Language Tag representing the primary language.
   * http://tools.ietf.org/html/rfc5646
   */
  readonly language?: string;

  /**
   * Additional contextually relevant data about the experience.
   * https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#miscext
   */
  readonly extensions?: Extensions;

  /**
   * Related activities.
   * https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#details-15
   */
  readonly contextActivities?: {
    /**
     * Activity used to categorize the Statement (synonymous with tags).
     * Usually contains the platform as an activity amongst other things.
     */
    readonly category?: Activity[];

    /**
     * Activity with an indirect relation to the Activity which is the Object of the Statement.
     * Usually contains the site as an activity amongst other things.
     */
    readonly grouping?: Activity[];

    /**
     * Activity that doesn't fit one of the other properties.
     * Commonly used for comments where the object might be the course that was commented on.
     */
    readonly other?: Activity[];

    /**
     * Activity with a direct relation to the Activity which is the Object of the Statement.
     * For example: a Statement about a quiz question would have the quiz as its parent Activity.
     */
    readonly parent?: Activity[];
  };
}

export interface Result {
  /**
   * Additional data relevant to the result of the experience.
   * https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#miscext
   */
  readonly extensions?: Extensions;

  /** Response appropriately formatted for the given Activity (e.g. comment text). */
  readonly response?: string;

  /**
   * Score of the Agent in relation to the success or quality of the experience.
   * https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#Score
   */
  readonly score?: {
    /** Lowest possible score for the experience as a decimal number. */
    readonly min?: number;

    /** Highest possible score for the experience as a decimal number. */
    readonly max?: number;

    /** Unmodified score achieved by the Actor in the experience as a decimal number. */
    readonly raw?: number;

    /** Scaled score as a decimal number between -1 and 1 (inclusive). */
    readonly scaled?: number;
  };

  /** Indicates whether or not the attempt on the Activity was successful. */
  readonly success?: boolean;

  /** Indicates whether or not the Activity was completed. */
  readonly completion?: boolean;

  /**
   * ISO 8601 duration representing the period of time over which the experience occurred.
   * https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#durations
   */
  readonly duration?: string;
}

/**
 * Data sctructure showing evidence for any sort of experience.
 * https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#statement-properties
 */
export interface Statement {
  /**
   * https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#44-uuids
   */
  readonly id?: UUID;

  /**
   * Whom the Statement is about, as an Agent or Group Object.
   * Use function exported from `statementUtils/createAgent`.
   * https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#actor
   */
  readonly actor: Agent;

  /**
   * Action taken by the Actor.
   * Use constants exported from `statementConstants/verbs`.
   * https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#verb
   */
  readonly verb: Verb;

  /**
   * Activity, Agent, or another Statement that is the Object of the Statement.
   * Use function exported from `statementUtils/createActivity`.
   * https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#object
   */
  readonly object: Activity | Agent;

  /**
   * Context that gives the Statement more meaning.
   * Use other statement creators as an example.
   * https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#context
   */
  readonly context?: Context;

  /**
   * Further details representing a measured outcome.
   * Use other statement creators as an example.
   * https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#result
   */
  readonly result?: Result;

  /**
   * Timestamp of when the events described within this Statement occurred.
   * Use function exported from `statementUtils/createTimestamp`.
   * https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#timestamp
   */
  readonly timestamp?: string;
}
