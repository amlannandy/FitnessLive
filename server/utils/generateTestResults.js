const generateTestResults = healthData => {
  return {
    lastUpdated: new Date().toUTCString(),
    results: [
      {
        parameter: 'Probablity of Coronary Artery Disease',
        value: getCoronaryArteryDiseaseResult(healthData.heartRate),
      },
      {
        parameter: 'Probablity of High Blood Pressure',
        value: getBloodPressureResult(),
      },
      {
        parameter: 'Probablity of Hypoglycemia',
        value: getHypoglycemiaResult(healthData.glucose),
      },
      {
        parameter: 'Probablity of Fever',
        value: getFeverResult(healthData.bodyTemperature),
      },
      {
        parameter: 'Probablity of Respiratory Disorder',
        value: getRespiratoryDisorderResult(),
      },
      {
        parameter: 'Probablity of Anemia',
        value: getAnemiaResult(healthData.oxygenSaturation),
      },
      {
        parameter: 'Probablity of Heart Disease',
        value: getHeartDiseaseResult(healthData.electroCardiogram),
      },
      { parameter: 'Fitness Level', value: getFitnessLevel(healthData.steps) },
    ],
  };
};

const getCoronaryArteryDiseaseResult = value => {
  if (value < 60) {
    return getRandomDouble(0, 1);
  } else if (value < 70) {
    return getRandomDouble(1, 10);
  } else if (value < 80) {
    return getRandomDouble(10, 30);
  } else if (value) {
    return getRandomDouble(30, 45);
  } else {
    return getRandomDouble(50, 90);
  }
};

const getBloodPressureResult = () => {
  return getRandomDouble(20, 80);
};

const getHypoglycemiaResult = value => {
  if (value < 130) {
    return getRandomDouble(15, 40);
  } else if (value < 160) {
    return getRandomDouble(40, 60);
  } else {
    return getRandomDouble(60, 85);
  }
};

const getFeverResult = value => {
  if (value > 37.5) {
    return getRandomDouble(70, 100);
  } else {
    return getRandomDouble(20, 69);
  }
};

const getRespiratoryDisorderResult = () => {
  return getRandomDouble(20, 80);
};

const getAnemiaResult = value => {
  if (value < 93) {
    return getRandomDouble(85, 95);
  } else if (value < 95) {
    return getRandomDouble(65, 80);
  } else if (value < 97) {
    return getRandomDouble(30, 45);
  } else {
    return getRandomDouble(15, 30);
  }
};

getHeartDiseaseResult = value => {
  if (value < 120) {
    return getRandomDouble(10, 15);
  } else if (value < 150) {
    return getRandomDouble(15, 45);
  } else {
    return getRandomDouble(45, 70);
  }
};

const getFitnessLevel = value => {
  return value / 100;
};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomDouble = (min, max) => {
  return Math.random() < 0.5
    ? (1 - Math.random()) * (max - min) + min
    : Math.random() * (max - min) + min;
};

module.exports = generateTestResults;
