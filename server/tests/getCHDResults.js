const { spawn } = require('child_process');

const getCHDResult = healthData => {
  const pyprog = spawn('python', ['./../scripts/chd.py']);
  pyprog.stdout.on('data', data => {
    return data(healthData);
  });
  pyprog.stderr.on('data', data => {
    return null;
  });
};

module.exports = getCHDResult;
