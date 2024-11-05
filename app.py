# app.py - Flask backend for skin disease classification
from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from PIL import Image
import numpy as np
from flask_cors import CORS
import io

app = Flask(__name__)

CORS(app)

# Load the pre-trained model
model = load_model('model/skin_disease_classifier.h5')

# Define class labels based on the dataset
class_labels = ['kurap', 'kudis']  # Replace with actual labels in order

# Endpoint for prediction
@app.route('/api/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({'error': 'No image provided'}), 400

    # Load and preprocess the image
    image_file = request.files['image']
    image = Image.open(image_file).convert('RGB')
    image = image.resize((128, 128))  # Resize to match model input shape
    image = np.array(image) / 255.0  # Normalize the image
    image = np.expand_dims(image, axis=0)  # Expand dimensions to fit model input

    # Make a prediction
    predictions = model.predict(image)
    predicted_class = class_labels[np.argmax(predictions)]

    # Send response
    return jsonify({'disease': predicted_class})

if __name__ == '__main__':
    app.run(debug=True)
