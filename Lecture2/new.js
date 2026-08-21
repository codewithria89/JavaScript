
let username = null;
let displayName = username ?? "Guest";
console.log(displayName);   // "Guest" → because username is null/undefined


let user = { profile: null };
console.log(user.profile?.name);   // undefined, no error
// without ?. this would CRASH: "Cannot read properties of null"