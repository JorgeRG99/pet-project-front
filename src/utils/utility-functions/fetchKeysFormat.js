function camelToSnakeCase(str) {
    return str.replace(/([a-z0-9])([A-Z])/g, '$1_$2').toLowerCase();
}

export function convertKeysToSnakeCase(obj) {
    const newObj = {};
    Object.keys(obj).forEach(key => {
        const kebabKey = camelToSnakeCase(key);
        newObj[kebabKey] = obj[key];
    });
    return newObj;
}