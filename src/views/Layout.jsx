const React = require('react');

module.exports = function Layout({ children, session }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Bootstrap CSS */}

        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/#[[latestVersion]]#/mdb.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        {/* Bootstrap Scripts */}
        <title>Nosmokers</title>
        <script
          defer
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossOrigin="anonymous"
        />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
          crossOrigin="anonymous"
        />
        <script
          defer
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
          integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
          crossOrigin="anonymous"
        />
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/#[[latestVersion]]#/mdb.min.js"
        />
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" />
        <script defer src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.min.js" />
        <script defer src="/js/client.js" />
        <title>Document</title>
      </head>
      { session.name ? (
        <nav
          className="navbar navbar-expand-lg navbar-dark"
          style={{
            backgroundColor: '#4dac83',
            color: '#e9ecef',
          }}
        >
          <div className="container-fluid">
            <img src="/img/logo.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
            <a className="navbar-brand" href={`/profile/${session.name}`}>Nosmokers</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row ">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href={`/profile/${session.name}`} id="trytofind">Ваш профиль, {session.name}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/chart">Рейтинг</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/logout">Выход</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      ) : (
        <nav
          className="navbar navbar-expand-lg navbar-dark"
          style={{
            backgroundColor: '#4dac83',
            color: '#e9ecef',
          }}
        >
          <div className="container-fluid justify-content-start">
            <img src="/img/logo.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
            <a className="navbar-brand" href="/login">Nosmokers</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
          </div>
        </nav>
      )}
      <body className="d-flex flex-column mb-3">
        {children}
      </body>
    </html>

  );
};
