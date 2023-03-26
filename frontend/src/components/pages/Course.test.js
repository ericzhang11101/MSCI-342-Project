import ShallowRenderer from "react-test-renderer/shallow";
import {render, screen, fireEvent, getByText, getByRole} from '@testing-library/react';
import React from "react";
import Home from "./Home";
import Course from "./Course";

describe('Course page tests', () => {



  test('Course page render', async () => {
    render(<Course />);
    expect(screen.getByText("Course Title")).toBeInTheDocument();
    expect(screen.getByText("Course Note")).toBeInTheDocument();
    expect(screen.getByText("Course Grade")).toBeInTheDocument();
  })


})