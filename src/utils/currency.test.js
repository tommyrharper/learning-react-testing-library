import { convert } from './currency.js'
import {server, rest} from '../testServer';

test('converts correctly', async () => {
  const rate = await convert('USD', 'CAD');
  expect(rate).toBe(1.42);
});

test('handles failure', async () => {
  server.use(
    rest.get('https://api.exchangeratesapi.io/latest', (req, res, ctx) => {
      return res(
        ctx.status(404)
      );
    })
  )
  // const rate = await convert('USD', 'CAD');
  await expect(convert('USD', 'CAD')).rejects.toThrow("Request failed with status code 404");
});
