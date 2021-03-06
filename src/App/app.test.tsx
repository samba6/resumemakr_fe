import React from "react";
import { render, wait } from "react-testing-library";

import App from "./app-x";
import { renderWithApollo } from "../test_utils";
import { Props } from "./app";

const AppP = App as React.FunctionComponent<Partial<Props>>;

/**
 * Mock out the Login component because for some odd reasons it is throwing
 * error
 */

jest.mock("../Login", () => {
  return () => "login";
});

it("renders without crashing", async () => {
  const { Ui } = renderWithApollo(AppP);
  const persistCache = jest.fn();
  const { unmount } = render(<Ui persistCache={persistCache} />);
  await wait(() => expect(persistCache).toBeCalled());
  await wait(() => expect(unmount()).toBe(true));
});
