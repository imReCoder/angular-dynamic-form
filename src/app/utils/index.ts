export function convertNestedKeys(jsonObj: object) {
  function updateNestedKeys(data: any, keys: string[], value: any) {
    let current = data;
    for (let i = 0; i < keys.length - 1; i++) {
      if (!current[keys[i]]) {
        current[keys[i]] = {};
      }
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
  }

  function processObject(data: any) {
    const newData: any = {};
    for (const key in data) {
      if (key.includes('.')) {
        const keys = key.split('.');
        if (data[key] && data[key] != '') {
          updateNestedKeys(newData, keys, data[key]);
        }
      } else if (typeof data[key] === 'object' && !Array.isArray(data[key])) {
        newData[key] = processObject(data[key]);
      } else if (data[key] && data[key] != '') {
        newData[key] = data[key];
      }
    }
    return Object.keys(newData).length ? newData : null;
  }

  if (typeof jsonObj === 'object' && !Array.isArray(jsonObj)) {
    return processObject(jsonObj);
  }
  return jsonObj;
}
