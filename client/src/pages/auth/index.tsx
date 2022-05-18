import { useState } from 'react';
import { useCustomNavigation } from '../../hooks';
import { useDispatch } from 'react-redux';
import { login } from '../../store/auth/auth';
import { SignIn, SignUp } from '../../components';

import './index.scss';

export const Auth = () => {
  const { toLawashesPage } = useCustomNavigation();
  const dispatch = useDispatch();

  const [auth, setAuth] = useState({
    login: true,
    signUpForm: {
        name: "",
        email: "",
        password: ""
    },
    signInForm: {
        email: "",
        password: ""
    }
  })

  const signUp = () => {
    setAuth({...auth, signUpForm: {
      name: "",
      password: "",
      email: ""
    }})
  }

  const signIn = () => {
    setAuth({...auth, signInForm: {
      password: "",
      email: ""
    }});
    toLawashesPage()
    dispatch(login(auth.signInForm.email))
  }
  
  return (
    <div className="login">
      <SignIn auth={auth} setAuth={setAuth} signUp={signUp}/>
      <SignUp auth={auth} setAuth={setAuth} signIn={signIn}/>
    </div>
  );
}
