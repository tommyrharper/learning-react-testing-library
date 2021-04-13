import React from "react";
import { render, screen } from "@testing-library/react";
import OtherApp from "./OtherApp";
import { SWRConfig, cache } from "swr";
import { server, rest } from "./testServer";

afterEach(() => cache.clear());

test("renders learn react link", async () => {
  render(
    <SWRConfig value={{ dedupingInterval: 0 }}>
      <OtherApp />
    </SWRConfig>
  );

  const element = await screen.findByText(/USD to CAD = 1.42/i);
  expect(element).toBeInTheDocument();
});

test("handles errors", async () => {
  server.use(
    rest.get("https://api.exchangeratesapi.io/latest", (req, res, ctx) => {
      return res(ctx.status(404));
    })
  );

  render(
    <SWRConfig value={{ dedupingInterval: 0 }}>
      <OtherApp />
    </SWRConfig>
  );
  const element = await screen.findByText(/Error!/i);
  expect(element).toBeInTheDocument();
});
