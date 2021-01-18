export const defaultOnUndefinedOrNull = (value, _default) => {
  if (value === undefined || value === null) {
    return _default;
  }
  return value;
};
