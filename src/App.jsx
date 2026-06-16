import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import EmployeeComponent from './components/EmployeeComponent'
import DashboardComponent from './components/DashboardComponent'
import AnalyticsComponent from './components/AnalyticsComponent'
import EmployeeDetailsComponent from './components/EmployeeDetailsComponent'
import LoginComponent from './components/LoginComponent'
import AttendanceComponent from './components/AttendanceComponent'
import ForgotPasswordComponent from './components/ForgotPasswordComponent'
import VerifyOtpComponent from './components/VerifyOtpComponent'
import ResetPasswordComponent from './components/ResetPasswordComponent'
import ResumeScanner from "./components/ResumeScanner";






import { Routes, Route } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'



function App() {

  console.log("APP LOADED");

  return (
    <>

      <HeaderComponent />

      <div className='container mt-4'>

        <Routes>

          <Route
            path='/'
            element={<LoginComponent />}
          />

          <Route
            path='/employees'
            element={
              localStorage.getItem("isLoggedIn")
                ? <ListEmployeeComponent />
                : <LoginComponent />
            }
          />

          <Route
            path="/forgot-password"
            element={<ForgotPasswordComponent />}
          />

          <Route
            path='/reset-password'
            element={<ResetPasswordComponent />}
          />
          <Route
            path='/verify-otp'
            element={<VerifyOtpComponent />}
          />

          <Route
            path='/add-employee'
            element={<EmployeeComponent />}
          />

          <Route
            path='/update-employee/:id'
            element={<EmployeeComponent />}
          />

          <Route
            path='/dashboard'
            element={<DashboardComponent employees={[]} />}
          />

          <Route
            path='/analytics'
            element={<AnalyticsComponent />}
          />

          <Route
            path='/employee/:id'
            element={<EmployeeDetailsComponent />}
          />

          <Route
            path='/login'
            element={<LoginComponent />}
          />

          <Route
            path="/resume-scanner"
            element={<ResumeScanner />}
          />

        

          <Route
            path='/attendance'
            element={<AttendanceComponent />}
          />

        </Routes>

      </div>


      <FooterComponent />

    </>
  )
}

export default App
/*import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import EmployeeComponent from './components/EmployeeComponent'

import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <HeaderComponent/>

      <Routes>
        {//http://localhost:3000/*/
//<Route path='/' element={<ListEmployeeComponent/>}></Route>
//{/*//http://localhost:3000/employees*/}
//<Route path='/employees' element={<ListEmployeeComponent/>}></Route>
//{/*//http://localhost:3000/add-employee*/}
//<Route path='/add-employee' element={<EmployeeComponent/>}></Route>
//{/*//http://localhost:3000/update-employee/:id*/}
//<Route path='/update-employee/:id' element={<EmployeeComponent/>}></Route>
// </Routes>

// <FooterComponent/>
//  </>
//)
//}

//export default App;*/