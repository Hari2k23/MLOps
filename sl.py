import streamlit as st  # type: ignore
import pickle
import numpy as np  

# Load the saved Linear Regression model
with open('Diabetes.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

# Function to predict the possibility of diabetes using the loaded model
def predict_diabetes(Pregnancies, Glucose, BloodPressure, SkinThickness, Insulin, BMI, DiabetesPedigreeFunction,	Age):
    features = np.array([Pregnancies, Glucose, BloodPressure, SkinThickness, Insulin, BMI, DiabetesPedigreeFunction,	Age])
    features = features.reshape(1,-1)
    predict_ = model.predict(features)
    return predict_[0]

# Streamlit UI
st.title('DIABETES PREDICTION')
st.write("""
## Input Features
Enter the values for the input features to predict the possibility of having Diabetes
""")

# Input fields for user
Pregnancies = st.number_input('Pregnancies')
Glucose = st.number_input('Glucose')
BloodPressure = st.number_input('BloodPressure')
SkinThickness = st.number_input('SkinThickness')
Insulin = st.number_input('Insulin')
BMI = st.number_input('BMI')
DiabetesPedigreeFunction = st.number_input('DiabetesPedigreeFunction')
Age = st.number_input('Age')

# Prediction button
if st.button('Predict'):
    # Predict EMISSION
    diabetes_prediction = predict_diabetes(Pregnancies, Glucose, BloodPressure, SkinThickness,	Insulin, BMI, DiabetesPedigreeFunction,	Age)
    if diabetes_prediction:
        diabetes_prediction = "High"
    else: 
        diabetes_prediction = "Low"
    st.write(f"Possibility of Diabetes: {diabetes_prediction}")