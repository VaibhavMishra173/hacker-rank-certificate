function stripProperty(obj, prop) {
    const newObj = Object.keys(obj).filter(el => el !== prop)
    const values = newObj.map(el => [el, obj[el]])
    return Object.fromEntries(values)
}
