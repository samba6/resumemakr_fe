import React from "react";
import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import { render } from "react-testing-library";

import { NotFound } from "./not-found-x";
import { renderWithRouter, renderWithApollo } from "../test_utils";

it("renders ", () => {
  const { Ui: ui } = renderWithRouter(NotFound);
  const { Ui } = renderWithApollo(ui);
  const { getByText } = render(<Ui />);

  expect(
    getByText(/The page you requested does not exist/)
  ).toBeInTheDocument();
});

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
////////////////////////// HELPER FUNCTIONS ///////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
