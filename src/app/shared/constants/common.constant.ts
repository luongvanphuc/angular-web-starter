export const DATE_FORMAT = 'MMM dd, y';
export const TIME_FORMAT = 'h:mm a';
export const DATE_TIME_FORMAT = `${DATE_FORMAT} ${TIME_FORMAT}`;

export const EMAIL_VALIDATION_REGEX = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
export const WEBSITE_URL_VALIDATION_REGEX = /^(?:http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
export const EMAIL_SEPARATORS_REGEX = /,|;| /; // comma, semicolon, or space

export const EventKeys = {
  AUTH_SUCCESS: 'AUTH_SUCCESS',
  AUTH_SIGNED_OUT: 'AUTH_SIGNED_OUT',
};
