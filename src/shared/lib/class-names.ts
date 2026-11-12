export const joinClassNames = (...classNames: (string | false | null | undefined)[]): string => classNames.filter(Boolean).join(" ");
