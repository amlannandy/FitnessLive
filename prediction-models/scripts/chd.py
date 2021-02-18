import pandas as pd
import numpy as np

# Url to the raw csv file in the github repository
url = 'https://raw.githubusercontent.com/amlannandy/FitnessLive/master/prediction-models/data/coronary-heart-disease.csv?token=AK2OSJZUFDLW7ZLJFFAUSALAG4XZ2'

# Read data from csv
chd = pd.read_csv(url)

from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(chd.loc[:, chd.columns != 'target'], chd['target'], stratify=chd['target'], random_state=66)
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

sample = np.array([63, 1,	3,	145,	233,	1,	0,	150,	0,	2.3,	0,	0, 1])
sample = sample.reshape(1, -1)
print(sample)

res = knn.predict(sample)
prob = knn.predict_proba(sample)
print(res, prob)

import pickle

pickle.dump(knn, open('chd.pkl', 'wb'))

