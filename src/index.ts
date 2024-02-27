/**
 * Escape special characters in a string to use in a regular expression
 * @param string
 * @returns string with escaped characters
 */
export function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/gi, "\\$&");
}

export enum DelimiterEnum {
  wildcards = "\.\*",
  whitespace = "[\\s\\n]+",
  or = "|",
}

/**
 * Generate a regex from an array of strings to match all of the strings, in order, separated by a delimiter
 * @param array
 * @param delimiter - the delimiter to use between the strings. Defaults to whitespace
 * @returns regex
 */
export function generateRegexFromArray(
  array: string[],
  delimiter: DelimiterEnum = DelimiterEnum.whitespace
) {
  return new RegExp(
    array
      .map((item) => escapeRegExp(item.trim()))
      .join(delimiter)
      .trim(),
    "si"
  );
}