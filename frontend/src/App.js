import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { createContext, useState } from 'react';
import ResponsiveAppBar from './components/ResponsiveAppBar'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import MyCourses from'./components/pages/MyCourses'
import PlanCourses from'./components/pages/planCourses/PlanCourses'
import CourseNotes from'./components/pages/CourseNotes'
import GradeCalculator from'./components/pages/GradeCalculator'
import CourseInfo from './components/pages/CourseInfo';
import Terms from "./components/pages/Terms";
import Term from "./components/pages/Term";
import Course from "./components/pages/Course";
import OptionsMainPage from './components/pages/OptionsMainPage';
import ArtificialIntelligenceOption from './components/pages/optionsPages/ArtificialIntelligenceOption';
import BiomechanicsOption from './components/pages/optionsPages/BiomechanicsOption';
import ComputerEngineeringOption from './components/pages/optionsPages/ComputerEngineeringOption';
import EntrepreneurshipOption from './components/pages/optionsPages/EntrepreneurshipOption';
import EnvironmentalEngineeringOption from './components/pages/optionsPages/EnvironmentalEngineeringOption';
import MechatronicsOption from './components/pages/optionsPages/MechatronicsOptions';
import PhysiclSciencesOption from './components/pages/optionsPages/PhysicalSciencesOption';
import SatisticsOption from './components/pages/optionsPages/StatisticsOption';
import StatisticsOption from './components/pages/optionsPages/StatisticsOption';
import SoftwareEngineeringOption from './components/pages/optionsPages/SoftwareEngineeringOption';
import PhysicalSciencesOption from './components/pages/optionsPages/PhysicalSciencesOption';
import LifeSciencesOption from './components/pages/optionsPages/LifeSciencesOption';
import ComputingOption from './components/pages/optionsPages/ComputingOption';
import InternationalStudiesOption from './components/pages/optionsPages/InternationStudiesOption';

export const UserContext = createContext(undefined)

function App() {
  const [user, setUser] = useState(undefined)

  return (
    <BrowserRouter>
    <UserContext.Provider value={{user, setUser}}>
      <div className="App">
          <ResponsiveAppBar />
          <div className='layout-main'>
            <Routes>
                <Route element={<Home />} path="*" >

                </Route>
                <Route element={<Login />} path="/login">

                </Route>
                <Route element={<MyCourses />} path="/my-courses">

                </Route>
                <Route element={<CourseInfo />} path={`/courses/:course`}>

                </Route>
                <Route element={<PlanCourses />} path="/plan-courses">

                </Route>
                <Route element={<CourseNotes />} path="/course-notes">

                </Route>
                <Route element={<GradeCalculator />} path="/grade-calculator">
                </Route>

                <Route>
                <Route element={<OptionsMainPage/>} path="/options-page"></Route>
                </Route>

                <Route>
                <Route element={<ArtificialIntelligenceOption/>} path="/ai-option"></Route>
                </Route>
                
                <Route>
                <Route element={<BiomechanicsOption/>} path="/biomech-option"></Route>
                </Route>

                <Route>
                <Route element={<ComputerEngineeringOption/>} path="/comp-eng-option"></Route>
                </Route>

                <Route>
                <Route element={<ComputingOption/>} path="/computing-option"></Route>
                </Route>

                <Route>
                <Route element={<EntrepreneurshipOption/>} path="/entrep-option"></Route>
                </Route>

                <Route>
                <Route element={<EnvironmentalEngineeringOption/>} path="/env-eng-option"></Route>
                </Route>

                <Route>
                <Route element={<InternationalStudiesOption/>} path="/int-studies-option"></Route>
                </Route>

                <Route>
                <Route element={<LifeSciencesOption/>} path="/computing-option"></Route>
                </Route>

                <Route>
                <Route element={<MechatronicsOption/>} path="/tron-option"></Route>
                </Route>

                <Route>
                <Route element={<PhysicalSciencesOption/>} path="/phys-sci-option"></Route>
                </Route>

                <Route>
                <Route element={<SoftwareEngineeringOption/>} path="/soft-eng-option"></Route>
                </Route>

                <Route>
                <Route element={<StatisticsOption/>} path="/stats-option"></Route>
                </Route>
               
                <Route element={<Terms />} path={'/terms'}>
                  <Route path={':term'} element={<Term />}/>
                  <Route path={':term/course/:courseId'} element={<Course />}/>
                </Route>
            </Routes>
          </div>
        </div>
    </UserContext.Provider>
      
    </BrowserRouter>
    
  );
}

export default App;
