import React from 'react'
import { Link } from 'react-router-dom'
import SignIn from './sign-in/SignIn'

const LoginPage = () => {
  return (
    <div className='page'>
      <div className='form_container'>
        <h1>로그인</h1>
        <p>계정이 없습니까? <Link to={"/register"}>회원가입</Link></p>
        <SignIn />
      </div>
    </div>
  )
}

export default LoginPage