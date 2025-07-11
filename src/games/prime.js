const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

export default isPrime;