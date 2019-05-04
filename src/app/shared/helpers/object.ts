export const mapProperties = (to: Object, from: Object, forceSet: boolean) => {
  if (!from) {
    return;
  }

  if (!to) {
    if (forceSet) {
      to = {};
    } else {
      return;
    }
  }

  for (const key of Object.keys(from)) {
    const needUpdate = forceSet ?
      from.hasOwnProperty(key) :
      from.hasOwnProperty(key) && to.hasOwnProperty(key);

    if (needUpdate) {
      to[key] = from[key];
    }
  }
};

export const deepCopy = (objectToCopy: Object) => {
  // should not use this method if the object has Date property,
  // if the object has Date prop, consider to use the above mapProperties method insted
  if (!objectToCopy) {
    return;
  }

  const json = JSON.stringify(objectToCopy);
  return JSON.parse(json);
};
