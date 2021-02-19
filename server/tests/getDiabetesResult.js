const { spawn } = require('child_process');

const getDiabetesResult = healthData => {
  const pyprog = spawn('python', ['./../scripts/diabetes.py']);
  pyprog.stdout.on('data', data => {
    return data(healthData);
  });
  pyprog.stderr.on('data', data => {
    return null;
  });
};

module.exports = getDiabetesResult;
