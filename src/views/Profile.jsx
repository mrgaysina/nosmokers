const React = require('react');
const Layout = require('./Layout');

module.exports = function Profile({ session, time, sec, start, habit }) {
  return (
    <Layout session={session}>
      <div className="container">
        <h1>
          Привет,
          {' '}
          {session.name}
          !
        </h1>
        <div className="row">
          <div className="col-9">
            <label className="form-label">Вы сэкономили:</label>
          </div>
        </div>
        <div className="ticktock">
          <a
            data-type="countup"
            data-name="Вы не курите:"
            data-units="ymdmhs"
            data-bg_color="#97B8FF"
            data-name_color="#008922"
            data-border_color="#888888"
            data-dt={`${time}`}
            data-timezone="Europe/Moscow"
            className="tickcounter d-block w-100 pb-2"
            href="//www.tickcounter.com"
          >
            Countdown

          </a>
        </div>
        <h3>{habit[0].reason}</h3>
        <div className="tickerbudg">
          <a
            data-type="ticker"
            data-thousand_separator=" "
            data-name="Вы сэкономили"
            data-bg_color="#97B8FF"
            data-name_color="#008922"
            data-border_color="#888888"
            data-dt={`${time}`}
            data-timezone="Europe/Moscow"
            data-equation={`${start}+${sec}`}
            data-unit_name="руб"
            className="tickcounter d-block w-100 pb-2"
            href="//www.tickcounter.com/ticker"
          >
            Countdown

          </a>
        </div>
        <a href={`your-trigger/${session.name}`}>TRIGGER</a>
      </div>
    </Layout>
  );
};
