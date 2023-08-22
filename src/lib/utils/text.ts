export function shortenId(id: string) {
  return `${ id.substring(0, 3) }...${ id.substring(id.length - 3) }`;
}

export function uppercaseFirst(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}
