export function publicAsset(path) {
  return encodeURI(path).replace(/#/g, '%23');
}
