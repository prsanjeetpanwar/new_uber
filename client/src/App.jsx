import { useState } from 'react'
import Start from './pages/start'
import { Route, Routes } from 'react-router-dom'
import UserLogin from './pages/user/UserLogin'
import UserSignUp from './pages/user/UserSignUp'
import CaptainLogin from './pages/captain/CaptainLogin'
import CaptainSignUp from './pages/captain/captainSignUp'
import UserProtectedWrapper from './pages/user/UserProtectedWrapper'
import UserHome from './pages/user/UserHome'
import UserLogout from './pages/user/userLogout'
import CaptainProtectedWrapper from './pages/captain/CaptainProtectedWrapper'
import CaptainHome from './pages/captain/CaptainHome'
import CaptainLogout from './pages/captain/CaptainLogout'


function App() {

  return (
    <>
  <Routes>
    <Route path='/' element={<Start/>}/>
    <Route path='/user-login' element={<UserLogin/>} />
    <Route path='/user-signUp' element={<UserSignUp/>}/>
    <Route path='/captain-login' element={<CaptainLogin/>} />
    <Route path='/captain-signUp' element={<CaptainSignUp/>}/>
    <Route path='/user-home'
    element={
      <UserProtectedWrapper>
<UserHome/>
      </UserProtectedWrapper>
    }
    />
    
    <Route
path='/user-logout'
element={
  <UserProtectedWrapper>
    <UserLogout/>
  </UserProtectedWrapper>
}
    />
    <Route path='/captain-home'
    element={
      <CaptainProtectedWrapper>
        <CaptainHome/>
      </CaptainProtectedWrapper>
    }
    
    />
    <Route
    path='/captain-logout'
    element={
      <CaptainProtectedWrapper>
        <CaptainLogout/>
      </CaptainProtectedWrapper>
    }
    />
  </Routes>
    </>
  )
}

export default App
