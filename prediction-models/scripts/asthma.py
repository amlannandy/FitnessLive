# -*- coding: utf-8 -*-
"""Asthma Prediction.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1ETosAI9huPdZ5DDK4KSf05jarNodgaL5
"""

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Commented out IPython magic to ensure Python compatibility.
# %matplotlib inline

# Url to the raw csv file in the github repository
url = 'https://raw.githubusercontent.com/amlannandy/FitnessLive/master/prediction-models/data/asthma.csv'

# Read data from csv
asthma = pd.read_csv(url)
print(asthma.columns)

asthma = asthma.iloc[3:]

asthma = asthma[asthma.columns[:-3]]

# Show first 5 rows of data
asthma.head(5)

asthma.info()

asthma.drop('ID', inplace=True, axis=1)
asthma['Diagnosis'].fillna('COPD', inplace=True)
asthma.fillna(0, inplace=True)

asthma.head(20)

from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(asthma.loc[:, asthma.columns != 'Gender'], asthma['Gender'], stratify=asthma['Gender'], random_state=66)
from sklearn.neighbors import KNeighborsClassifier
training_accuracy = []
test_accuracy = []
# try n_neighbors from 1 to 10
neighbors_settings = range(1, 11)
for n_neighbors in neighbors_settings:
    # build the model
    knn = KNeighborsClassifier(n_neighbors=n_neighbors)
    knn.fit(X_train, y_train)
    # record training set accuracy
    training_accuracy.append(knn.score(X_train, y_train))
    # record test set accuracy
    test_accuracy.append(knn.score(X_test, y_test))

knn = KNeighborsClassifier(n_neighbors=9)
knn.fit(X_train, y_train)
print('Accuracy of K-NN classifier on training set: {:.2f}'.format(knn.score(X_train, y_train)))
print('Accuracy of K-NN classifier on test set: {:.2f}'.format(knn.score(X_test, y_test)))

sample = np.array([6, 128, 72, 35, 0, 33.6, 0.627, 50])
sample = sample.reshape(1, -1)
print(sample)

res = knn.predict(sample)
prob = knn.predict_proba(sample)
print(res, prob)

import pickle

pickle.dump(knn, open('model.pkl', 'wb'))