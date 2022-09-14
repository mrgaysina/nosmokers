const React = require('react');
const Layout = require('./Layout');

module.exports = function SignUp({ session }) {
  return (
    <Layout session={session}>
      <div className="card text-center w-50 align-self-lg-center mb-auto m-5">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a className="nav-link active" aria-current="true" href="/signup">Регистрация</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">Вход</a>
            </li>
          </ul>
        </div>
        <form action="/signup" method="POST" id="signup-form">
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Имя</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="name" />           
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Почта</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" />           
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name="password" />
          </div>
          <button type="submit" className="btn btn-primary">Продолжить</button>
        </form>
      </div>
    </Layout>
  );
};
