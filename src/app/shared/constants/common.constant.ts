export const IMG_PATH_DEFAULT_AVATAR = '/assets/images/avatar-default.svg';
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

export const ImageMimeTypes = {
  PNG: 'image/png',
  JPEG: 'image/jpeg',
  // WEBP: 'image/webp',
  // GIF: 'image/gif',
  // BMP: 'image/bmp',
  // AllTypes: ['image/gif', 'image/png', 'image/jpeg', 'image/bmp', 'image/bmp']
};

export const DocMimeTypes = {
  PDF: 'application/pdf',
  DOCX: ['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
  PPTX: ['application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation'],
  XLSX: ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'text/csv'],
};

export const FileTypes = {
  ZIP: ['application/zip', 'application/octet-stream', 'application/x-zip-compressed', 'multipart/x-zip'],
  RAR: ['application/x-rar-compressed', 'application/octet-stream'],
};
