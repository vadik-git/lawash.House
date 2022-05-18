import logo from '../../assets/images/logo.svg';
import facebook from '../../assets/images/facebook.svg';
import google from '../../assets/images/google.svg';
import linkedin from '../../assets/images/linkedin.svg';

export const SignUp = ({auth, setAuth, signIn}: any) => {
  return (
    <>
      <div className={`login__login-container ${!auth.login ? 'login__login-container--active' : 'login__login-container--inactive'}`}>
          <div className="login__login-container__logo-container">
              <img className="login__login-container__logo-container--image" src={logo} alt="Budwriter" />
          </div>
          <div className="login__login-container__main-container">
              <div className="login__login-container__main-container__social-container">
                  <img className="login__login-container__main-container__social-container--facebook-icon" src={facebook} alt="" />
                  <img className="login__login-container__main-container__social-container--google-icon" src={google} alt="" />
                  <img className="login__login-container__main-container__social-container--linkedin-icon" src={linkedin} alt="" />
              </div>
              <span className="login__login-container__main-container--info-text">or use email for your login</span>
              <div className="login__login-container__main-container__form-container">
                  <form className="login__login-container__main-container__form-container__form" onSubmit={(e) => {
                      e.preventDefault();
                      signIn();
                  }}>
                      <input
                          className="login__login-container__main-container__form-container__form--email"
                          type="email"
                          placeholder="Email"
                          value={auth.signInForm.email}
                          onChange={(e) => setAuth({...auth, signInForm: {
                            email: e.target.value,
                            password: auth.signInForm.password
                          }})}
                          required />
                      <input
                          className="login__login-container__main-container__form-container__form--password"
                          type="password"
                          placeholder="Password"
                          value={auth.signInForm.password}
                          onChange={(e) => setAuth({...auth, signInForm: {
                            password: e.target.value,
                            email: auth.signInForm.email
                          }})}
                          required />
                      <button
                          className="login__login-container__main-container__form-container__form--submit">
                          Sign In
                  </button>
                  </form>
              </div>
          </div>
      </div>
      <div className={`login__hello-container ${!auth.login ? 'login__hello-container--active' : 'login__hello-container--inactive'}`}>
          <div className="login__welcome-back__main-container__text-container">
            <span className="login__welcome-back__main-container__text-container--title">
              Not already registered?
            </span>
          </div>
          <div onClick={() => setAuth({...auth, login: !auth.login})} className="login__welcome-back__main-container__button-container">
              Sign Up
          </div>
      </div>
    </>
  )
}