/*
 * Firstname, Lastname input requirements: must start with a lowercase or uppercase letter followed by 3 to 23 characters that may letters only
 */
export const REGEX_Username = /^[A-z]{2,20}$/

/*
 * Input (email) requirements:
 */
export const REGEX_EmailAddress =
  /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const regexEmailValidation =
  /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

/*
 * Street input requirements: must start with a lowercase or uppercase letter followed by 3 to 23 characters that may letters, numbers, underscores, or hyphens
 */
export const REGEX_Street = /^\d+\s[A-z]+\s[A-z]{3,25}$/

/*
 * City input requirements: must start with a lowercase or uppercase letter followed by 3 to 23 characters that may letters only
 */
export const REGEX_City = /^[A-z]{3,30}$/

/*
 * Country input requirements: from api
 */
