import logo from '../../assets/images/logo.svg';
import facebook from '../../assets/images/facebook.svg';
import google from '../../assets/images/google.svg';
import linkedin from '../../assets/images/linkedin.svg';

export const SignIn = ({auth, setAuth, signUp}: any) => {
  return (
    <>
      <div className={`login__colored-container ${auth.login ? 'login__colored-container--left' : 'login__colored-container--right'}`}></div>
      <div className={`login__welcome-back ${auth.login ? 'login__welcome-back--active' : 'login__welcome-back--inactive'}`}>
          <div className="login__welcome-back__logo-container">
              <img className="login__welcome-back__logo-container--image" src={logo} alt="Budwriter" />
          </div>
          <div className="login__welcome-back__main-container">
              <div className="login__welcome-back__main-container__text-container">
                  <span className="login__welcome-back__main-container__text-container--title">
                    Already have an account?
                  </span>
              </div>
              <div onClick={() => setAuth({...auth, login: !auth.login})} className="login__welcome-back__main-container__button-container">
                  Sign In
              </div>
          </div>
      </div>
      <div className={`login__create-container ${auth.login ? 'login__create-container--active' : 'login__create-container--inactive'}`}>
          Create Account
          <div className="login__create-container__social-container">
              <img className="login__create-container__social-container--facebook-icon" src={facebook} alt="" />
              <img className="login__create-container__social-container--google-icon" src={google} alt="" />
              <img className="login__create-container__social-container--linkedin-icon" src={linkedin} alt="" />
          </div>
          <span className="login__create-container--info-text">or use email for your registration</span>
          <div className="login__create-container__form-container">
              <form className="login__create-container__form-container__form" onSubmit={(e) => {
                  e.preventDefault();
                  signUp();
              }}>
                  <input
                      className="login__create-container__form-container__form--name"
                      type="text"
                      placeholder="Name"
                      value={auth.signUpForm.name}
                      onChange={(e) => setAuth({...auth, signUpForm: {
                        name: e.target.value,
                        email: auth.signUpForm.password,
                        password: auth.signUpForm.password,
                      }})}
                      required />
                  <input
                      className="login__create-container__form-container__form--email"
                      type="email"
                      placeholder="Email"
                      value={auth.signUpForm.email}
                      onChange={(e) => setAuth({...auth, signUpForm: {
                        email:  e.target.value,
                        password: auth.signUpForm.password,
                        name: auth.signUpForm.name,
                      }})}
                      required />
                  <input
                      className="login__create-container__form-container__form--password"
                      type="password"
                      placeholder="Password"
                      value={auth.signUpForm.password}
                      onChange={(e) => setAuth({...auth, signUpForm: {
                        password: e.target.value,
                        name: auth.signUpForm.name,
                        email: auth.signUpForm.email
                      }})}
                      required />
                  <button
                      className="login__create-container__form-container__form--submit">
                      Sign Up
                  </button>
              </form>
          </div>
      </div>
    </>
  )
}