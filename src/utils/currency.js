// import axios from 'axios';

async function convertFetch(base, destination) {
  const result = await fetch(
    `https://api.exchangeratesapi.io/latest?base=${base}`
  );
  if (!result.ok) {
    throw new Error(`Request failed with status code ${result.status}`)
  }
  const data = await result.json();
  return data.rates[destination];
}

// export const convert = () => {
//   return 1.42;
// };

export { convertFetch as convert };
