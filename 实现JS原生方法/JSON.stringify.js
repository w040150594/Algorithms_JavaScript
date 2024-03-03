function toJSON(obj) {
  if (obj === null) return 'null';
  if (['number', 'boolean', 'string'].includes(typeof obj)) return String(obj);

  if (Array.isArray(obj)) return `[${obj.map(item => toJSON(item)).join(',')}]`;
  if (typeof obj === 'object') {
    return `${Object.keys(obj)
      .map(key => `"${key}":${toJSON(obj[key])}`)
      .join(',')}`;
  }

  return undefined;
}

console.log(toJSON('')); // -> ""
console.log(toJSON('abc')); // -> "abc"
console.log(toJSON(123)); // -> 123
console.log(toJSON({ a: 1, b: 2 })); // -> {"a":1, "b":2}
console.log(toJSON(['1', 3, { name: 'monica', age: 18 }])); //-> ["1", 3, {"name":"monica", "age":18]
console.log(toJSON(null)); // -> null
