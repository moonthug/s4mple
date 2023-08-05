export function shortenId(id: string) {
  return `${ id.substring(0, 3) }...${ id.substring(id.length - 3) }`;
}
