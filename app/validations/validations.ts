export const validations: { [key: string]: RegExp } = {
  "has-number": /\d/,
  "has-special-char": /[!@#$%^&*]/,
  "has-uppercase-letter": /[A-Z]/,
  "no-consecutive-letters": /^(?!.*([A-Za-z][A-Za-z])).*$/,
};
