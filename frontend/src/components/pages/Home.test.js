import ShallowRenderer from "react-test-renderer/shallow";
import {render, screen, fireEvent, getByText, getByRole} from '@testing-library/react';
import React from "react";
import Home from "./Home";

describe('Home page tests', () => {



  test('Home page render', async () => {
    render(<Home />);
    expect(screen.getByText("FOREWORD")).toBeInTheDocument();
    expect(screen.getByText("WHAT'S MANAGEMENT ENGINEERING?")).toBeInTheDocument();
  })


})