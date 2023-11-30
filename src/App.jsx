import React from 'react'
import Heading from './Component/Heading.jsx'
import PasswordGenerator from './Component/PasswordGenerator.jsx'
import Footer from './Component/Footer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import app from './app.css'
import AboutUs from './Pages/AboutUs.jsx';
import ContactUs from './Pages/ContactUs.jsx';
import Terms from './Pages/Terms.jsx';
import PrivacyPolicy from './Pages/PrivacyPolicy.jsx';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path : "/",
    element :  <Layout/>,
    children : [
      {
        path : "/",
        element :  <PasswordGenerator/>,
      },
      {
        path : "/about-us",
        element :  <AboutUs/>,
      },
      {
        path : "/contact-us",
        element :  <ContactUs/>,
      },
      {
        path : "/terms",
        element :  <Terms/>,
      },
      {
        path : "/privacy-policy",
        element :  <PrivacyPolicy/>,
      }
    ]
   }
])
function Layout (){
  return (
    <div>
     <Heading/>
     <Outlet className="outlet"/>
     <Footer/>
    </div>
  )
}

function App() {

  return (
    
    <div className='main-contaner'>
  <RouterProvider router={router}/>
    </div>
  )
}

export default App