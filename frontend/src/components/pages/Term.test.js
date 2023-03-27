import ShallowRenderer from "react-test-renderer/shallow";
import {render, screen, fireEvent, getByText, getByRole} from '@testing-library/react';
import React from "react";
import Home from "./Home";
import {BrowserRouter, MemoryRouter, Route, Routes} from "react-router-dom";
import Terms from "./Terms";
import Term from "./Term";
import all_courses from '../../terms-courses.json';
describe('Term page tests', () => {



  test('Term page render', async () => {
    const terms = ['1A', '1B', '2A', '2B', '3A', '3B', '4A', '4B'];
    render(
      <MemoryRouter initialEntries={[`/terms/${terms[0]}`]}>

          <Routes>
            <Route element={
              <Term />
            } path={'/terms/:term'}>

            </Route>
          </Routes>

      </MemoryRouter>
      ,
    );
    const courses = all_courses.find(item => item.term === terms[0]).courses;

    for (let course of courses) {

      //expect(screen.getByText(course.code)).toBeInTheDocument();
      expect(screen.getByText(course.name)).toBeInTheDocument();
    }
  });


})