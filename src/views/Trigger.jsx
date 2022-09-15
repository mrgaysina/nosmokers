const React = require('react');
const Layout = require('./Layout');

module.exports = function Trigger({ session, triggers }) {
  return (
    <Layout session={session}>

      <div className="d-flex flex-column align-items-center mt-5">
        <div className="card border border-secondary shadow-0 mb-3 w-50">
          <div className="card-header">Что способствовало возникновению тяги?</div>
          <div className="card-body text-secondary">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Триггер"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                name="trigger"
                id="inputhelp"
              />
              <button className="btn btn-outline-primary" type="button" data-mdb-ripple-color="dark" id="buttonhelp">
                Чем отвлечься?
              </button>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control activity"
                placeholder="Предложение"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                name="help"
                id="inputsend"
              />
              <button className={`btn btn-outline-primary ${session.name}`} type="button" id="buttonsend" data-mdb-ripple-color="dark">
                Сохранить
              </button>
            </div>
          </div>
        </div>
        <table className="table w-50 table-striped table-bordered border-success">
          <thead>
            <tr>
              <th scope="col">Триггер</th>
              <th scope="col">Что помогло отвлечься?</th>
            </tr>
          </thead>
          <tbody>
            {triggers.map((trigger) => (
              <tr key={trigger.id}>
                <th scope="row">{trigger.trigger}</th>
                <td>{trigger.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <script src="/js/application.js" />
      </div>

    </Layout>
  );
};
