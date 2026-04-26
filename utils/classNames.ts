export const classNames = (...classNameValues: Array<string | false | null | undefined>) => {
  return classNameValues.filter(Boolean).join(" ");
};
