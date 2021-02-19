const getCHDResult = require('../tests/getCHDResults');
const getDiabetesResult = require('../tests/getDiabetesResult');

const generateTestResults = healthData => {
  return {
    lastUpdated: new Date().toUTCString(),
    results: [
      {
        parameter: 'Probablity of Coronary Artery Disease',
        value: getCHDResult(healthData),
        link:
          'https://www.mayoclinic.org/diseases-conditions/coronary-artery-disease/symptoms-causes/syc-20350613',
      },
      {
        parameter: 'Probablity of Diabetes',
        value: getDiabetesResult(healthData),
        link:
          'https://www.healthline.com/health/diabetes#:~:text=Diabetes%20mellitus%2C%20commonly%20known%20as,the%20insulin%20it%20does%20make.',
      },
      {
        parameter: 'Probablity of Hypoglycemia',
        value: getHypoglycemiaResult(healthData.glucose),
        link: 'https://www.healthline.com/health/hypoglycemia',
      },
      {
        parameter: 'Probablity of Prediabetes',
        value: getFeverResult(healthData.bodyTemperature),
        link:
          "https://www.webmd.com/diabetes/what-is-prediabetes#:~:text=Prediabetes%20is%20when%20your%20blood,doesn't%20usually%20cause%20symptoms.",
      },
      {
        parameter: 'Probablity of Bronchiectasis',
        value: getRespiratoryDisorderResult(),
        link:
          'https://www.healthline.com/health/bronchiectasis#:~:text=Bronchiectasis%20is%20a%20condition%20where,and%20blockages%20of%20the%20airways.',
      },
      {
        parameter: 'Probablity of Hypoxemia',
        value: getAnemiaResult(healthData.oxygenSaturation),
        link:
          'https://www.healthline.com/health/hypoxemia#hypoxia-vs-hypoxemia',
      },
      {
        parameter: 'Probablity of Asthma',
        value: getHeartDiseaseResult(healthData.electroCardiogram),
        link:
          'https://www.mayoclinic.org/diseases-conditions/asthma/symptoms-causes/syc-20369653#:~:text=Asthma%20is%20a%20condition%20in,asthma%20is%20a%20minor%20nuisance.',
      },
      {
        parameter: 'Fitness Level',
        value: getFitnessLevel(healthData.steps),
        link:
          'https://www.active.com/fitness/articles/5-simple-tips-for-fitness-success',
      },
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
