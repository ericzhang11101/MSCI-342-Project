import ShallowRenderer from "react-test-renderer/shallow";
import {render, screen, fireEvent, getByText, getByRole} from '@testing-library/react';
import React from "react";


import {MemoryRouter} from "react-router-dom";
import Notes from "./Notes";
import Grade from "./Grade";
describe('Course Grade component tests', () => {



  test('Course Grade add button', async () => {
    render(
      <MemoryRouter initialEntries={[`/terms/1A/course/CHE 20102`]}>
        <Grade />
      </MemoryRouter>
    );
    expect(screen.getByText('Add')).toBeInTheDocument();
  });

  test('Add grade', async () => {
    render(
      <MemoryRouter initialEntries={[`/terms/1A/course/CHE 20102`]}>
        <Grade />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByText('Add'));
    expect(screen.getByText('Add Grade')).toBeInTheDocument();
  });


})