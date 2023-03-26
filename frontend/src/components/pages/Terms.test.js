import ShallowRenderer from "react-test-renderer/shallow";
import {render, screen, fireEvent, getByText, getByRole} from '@testing-library/react';
import React from "react";
import Home from "./Home";
import {MemoryRouter} from "react-router-dom";
import Terms from "./Terms";

describe('Terms page tests', () => {



  test('Terms list', async () => {
    const terms = ['1A', '1B', '2A', '2B', '3A', '3B', '4A', '4B'];
    render(
      <MemoryRouter initialEntries={[`/terms/${terms[0]}`]}>
        <Terms />
      </MemoryRouter>
    );

    for (let term of terms) {
      expect(screen.getByText(term)).toBeInTheDocument();
    }
  })


})