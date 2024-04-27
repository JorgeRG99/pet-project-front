export const removeUndefinedKeys = (obj) => {
    const newObj = {};
    Object.keys(obj).forEach(key => {
        if (obj[key] !== undefined || null) {
            newObj[key] = obj[key];
        }
    });
    
    return newObj;
}