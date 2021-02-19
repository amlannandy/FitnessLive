import pandas as pd
import numpy as np

def run_diabetes_model(glucose, blood_pressure):
    # Url to the raw csv file in the github repository
    url = 'https://raw.githubusercontent.com/amlannandy/FitnessLive/master/prediction-models/data/diabetes.csv?token=AK2OSJ3OPFNS7IZC64IHH53AGYKME'

    # Read data from csv
    diabetes = pd.read_csv(url)

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

    # Create sample
    sample = np.array([6, glucose, blood_pressure, 35, 0, 33.6, 0.627, 50])
    sample = sample.reshape(1, -1)

    # Test sample
    res = knn.predict(sample)
    prob = knn.predict_proba(sample)
    
    return prob[0][1]

    # import pickle

    # # create .pkl file
    # pickle.dump(knn, open('model.pkl', 'wb'))