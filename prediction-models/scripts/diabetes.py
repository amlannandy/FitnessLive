import pandas as pd
import numpy as np

# Url to the raw csv file in the github repository
url = 'https://raw.githubusercontent.com/amlannandy/FitnessLive/master/prediction-models/data/diabetes.csv?token=AK2OSJ3OPFNS7IZC64IHH53AGYKME'

# Read data from csv
diabetes = pd.read_csv(url)
print(diabetes.columns)

# Show first 5 rows of data
diabetes.head(5)

from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(diabetes.loc[:, diabetes.columns != 'Outcome'], diabetes['Outcome'], stratify=diabetes['Outcome'], random_state=66)
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

# Create sample
sample = np.array([6, 128, 72, 35, 0, 33.6, 0.627, 50])
sample = sample.reshape(1, -1)
print(sample)

# Test sample
res = knn.predict(sample)
prob = knn.predict_proba(sample)
print(res, prob)