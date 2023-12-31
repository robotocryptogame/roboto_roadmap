/**
 * FilterDataManager
 */
export default interface IAuthManager {
  /**
   * Is Authenticated
   */
  year: string;
  month: string;
  /**
   * AuthenticateUser
   * @param {number} year year filter
   */
  /**
   * AuthenticateUser
   * @param {number} month month filter
   */

  updateYear: (payload: any) => void;
  updateMonth: (payload: any) => void;
}
