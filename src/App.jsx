import {Routes, Route} from 'react-router-dom'
// components
import Header from "./components/Header"
import LeftSideBar from "./components/LeftSideBar"
import RightSideBar from "./components/RightSideBar"
// pages
import Home from "./pages/Home"
const App = () => {
  return (
    <div className="w-screen h-screen overflow-hidden flex">
      {/* left side bar */}
      <LeftSideBar />
      {/* content */}
      <div className='flex-1 flex flex-col bg-neutral-100'>
        <Header /> 
        {/* pages */}
        <div className='flex-1 flex'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
          </Routes>
          {/* right side bar */}
          <RightSideBar />
        </div>
      </div>
    </div>
  )
}

export default App