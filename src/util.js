export function filter(obj, cb) {
  const output = {};
  Object.keys(obj)
    .filter((key) => cb(key, obj[key]))
    .forEach((key) => {
      output[key] = obj[key];
    });
  return output;
}
