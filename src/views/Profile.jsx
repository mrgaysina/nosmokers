const React = require('react');
const Layout = require('./Layout');

module.exports = function Profile({ session }) {
  return (
    <Layout session={session}>
<div class="container">
    <h1>Привет, {session.name}!</h1>
  <div class="row">
    <div class="col-9">
    <label className="form-label">Вы сэкономили:</label>
    </div>
    <div class="col-4">.col-4<br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>
    <div class="col-6">.col-6<br>Subsequent columns continue along the new line.</div>
  </div>
</div>
    </Layout>
  );
};
