export default interface SiteAction {
  /**
   * A JavaScript Date representing the date and time that the action occurred.
   * You can use `actionDate = new Date()` to get the current date time with the current timezone.
   * Ensure that the timezone is correct because it's important for analysis.
   * Check the timezone is correct with `actionDate.getTimezoneOffset()`.
   */
  readonly actionDate: Date;

  /**
   * The URL of the site (e.g. https://mymoodle.org).
   * Use `window.location.origin` as a fallback in the Browser.
   * Useful when analysing data from multiple sites.
   */
  readonly siteUrl: string;

  /**
   * The name of the site (e.g. My Moodle Site).
   * Makes it easier to identify the site in the LRS.
   */
  readonly siteName?: string;

  /**
   * The URL of the platform (e.g. https://moodle.org).
   * Use siteUrl as a fallback.
   * Useful when analysing data across different sites on the same platform.
   * Useful when analysing data from multiple platforms.
   */
  readonly platformUrl: string;

  /**
   * The name of the platform (e.g. Moodle).
   * Makes it easier to identify the platform in the LRS.
   */
  readonly platformName?: string;
}
