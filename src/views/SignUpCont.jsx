const React = require('react');
const Layout = require('./Layout');

module.exports = function SignUpCont({ signupCont, session }) {
  return (
    <Layout session={session}>
      <div className="card w-50 align-self-lg-center mb-auto m-5">
        <form action={`/signup/cont/${session.name}`} method="POST" id="signup-cont-form">
          <label htmlFor="exampleInputPassword1" className="form-label col-sm-5" >Какой вид сигарет вы предпочитали?</label>
          <select className="form-select" aria-label="Disabled select example" name="kindOfSig">
            <option defaultValue>Выбери...</option>
            <option defaultValue="1">Сигареты</option>
            <option defaultValue="2">Электронные сигареты</option>
            <option defaultValue="3">Вейп</option>
            <option defaultValue="3">Сигары</option>
          </select>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label col-sm-5">Сколько пачек в неделю вы употребляли?</label>
            <input type="text" className="form-control" id="exampleInputPassword1" name="amount" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label col-sm-5">Стоимость пачки</label>
            <input type="text" className="form-control" id="exampleInputPassword1" name="cost" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label col-sm-5">Почему решили бросить курить?</label>
            <input type="text" className="form-control" id="exampleInputPassword1" name="reason" />
          </div>
          <div className="mb-3">
            <label htmlFor="date" className="col-sm-5 col-form-label">Дата отказа от курения</label>
            <div className="col-sm-4">
              <div className="input-group date" id="datepicker">
                <input type="date" className="form-control" name="quitDate" />
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">ОК</button>
        </form>
      </div>
    </Layout>
  );
};
