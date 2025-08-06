const fs = require('fs');

function getGreeting() {
  const hrs = new Date().getHours();
  if (hrs < 12) return 'Good Morning';
  else if (hrs < 18) return 'Good Afternoon';
  else return 'Good Evening';
}

function isUrl(url) {
  return /https?:\/\/[^\s]+/.test(url);
}

function saveData(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

function loadData(file) {
  return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file)) : {};
}

module.exports = {
  getGreeting,
  isUrl,
  saveData,
  loadData
};
