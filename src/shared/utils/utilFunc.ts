/**
 * Conditionally returns a value or null based on a boolean condition.
 *
 * @template T - The type of the value to be returned
 * @param {boolean} condition - The condition to evaluate
 * @param {T} value - The value to return if condition is true
 * @returns {T | null} The value if condition is true, otherwise null
 */
export const earlyReturn = <T>(condition: boolean, value: T): T | null => {
  return condition ? value : null;
};

/**
 * Checks if value is null or undefined (nullish).
 *
 * @param {unknown} value - The value to check
 * @returns {boolean} True if value is null or undefined
 */
export const isNullish = (value: unknown): value is null | undefined => {
  return value === null || value === undefined;
};

/**
 * Early return for nullish values.
 *
 * @param {unknown} value - The value to check
 * @returns {boolean} True if value is nullish (should early return)
 */
export const shouldSkip = (value: unknown): boolean => {
  return value === null || value === undefined;
};
