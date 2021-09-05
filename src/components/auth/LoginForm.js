import React, {useState} from 'react'
import useAuth from '../../hooks/useAuth'

function LoginForm(props) {
  const [form, setForm] = useState({email: '', password: ''});
  const auth = useAuth()
  function submitHandler(e) {
    e.preventDefault();
    auth.login(form.email, form.password)
  }
  return (
    <div className="page-login">
      <div className="container">
        <h2 className="text-center mg-t-10 mg-b-5">LOGIN</h2>
        <form onSubmit={submitHandler}>
          <div className="form-group mg-b-6">
            <label htmlFor="email" className="mg-b-3">Email:</label>
            <input type="text" className="form-control" onChange={e => setForm({...form, email: e.target.value})} value={form.email}/>
          </div>
          <div className="form-group mg-b-6">
            <label htmlFor="password" className="mg-b-3">Password:</label>
            <input type="password" className="form-control" onChange={e => setForm({...form, password: e.target.value})} value={form.password}/>
          </div>
          <button type="submit" className="btn btn-primary mg-b-6">Login</button>
        </form>
      </div>
    </div>
  );
}
export default LoginForm;
