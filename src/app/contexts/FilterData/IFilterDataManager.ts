/**
 * FilterDataManager
 */
export default interface IAuthManager {
  /**
   * Is Authenticated
   */
  year: number;
  month: number;
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
