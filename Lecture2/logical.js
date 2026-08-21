let isLoggedIn = true;
let hasPaid = false;

console.log(isLoggedIn && hasPaid);   // false → AND: both must be true
console.log(isLoggedIn || hasPaid);   // true  → OR: at least one must be true
console.log(!isLoggedIn);             // false → NOT: flips the boolean