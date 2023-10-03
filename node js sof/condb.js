const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'username',
  password: 'password',
  database: 'managment',
});

connection.connect((err) => {
  if (err) {
    console.error('שגיאה ביבוא נתונים' + err.stack);
    return;
  }

  console.log('נתונים הובאו בהצלחה');
});

module.exports = connection;
