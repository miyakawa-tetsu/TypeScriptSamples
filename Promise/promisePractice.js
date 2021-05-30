//日付データを取得する
function getDate(callback) {
  callback(new Date);
}

//日付データを元に西暦を取得する
function getYear(data) {
  var year = data.getFullYear();
  console.log(year);
}

getDate(function(data) {
  getYear(data);
});