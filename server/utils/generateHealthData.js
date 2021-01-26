const generateHealthData = () => {
  return {
    lastUpdated: new Date().toUTCString(),
    data: {
      heartRate: getRandomInt(50, 110),
      bloodPressure: `${getRandomInt(80, 150)}/${getRandomInt(60, 90)} mmHg`,
      glucose: getRandomInt(100, 210),
      bodyTemperature: getRandomInt(30, 40),
      respiration: getRandomInt(10, 17),
      oxygenSaturation: getRandomInt(90, 100),
      electroCardiogram: getRandomInt(100, 200),
      steps: getRandomInt(1000, 5000),
    },
  };
};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = generateHealthData;
