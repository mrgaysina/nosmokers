const React = require('react');
const Layout = require('./Layout');

module.exports = function Login({ session }) {
  return (
    <Layout session={session}>
      <div className="card text-center w-50 align-self-lg-center mb-auto m-5">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a className="nav-link" href="/signup">Register</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="true" href="/login">Login</a>
            </li>
          </ul>
        </div>
        <form action="/login" method="POST" id="loginform" className="w-70">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Почта</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            {' '}

          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary">ОК</button>
        </form>
      </div>
    </Layout>
  );
};
