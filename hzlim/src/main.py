import torch
import torch.nn as nn
import torch.optim as optim
from data_preprocessing.preprocess_data import load_titanic_data
from models.log_regression import LogisticRegressionModel
from training.hyperparameters import Hyperparameters
from training.train_model import train_model, evaluate_model
from visualization.plot_results import plot_accuracy

def main():
    input_dim = 4  # Number of features
    X_train, y_train, X_test, y_test = load_titanic_data()
    
    # Initialize the model, loss function, optimizer, and hyperparameters
    model = LogisticRegressionModel(input_dim)
    criterion = nn.BCELoss()
    hyperparams = Hyperparameters(learning_rate=0.01, epochs=100000)
    optimizer = optim.SGD(model.parameters(), lr=hyperparams.learning_rate)
    
    # Train the model
    train_model(model, criterion, optimizer, X_train, y_train, hyperparams)
    
    # Evaluate the model
    accuracy = evaluate_model(model, X_test, y_test)
    print(f'Accuracy: {accuracy:.4f}')
    
    # Plot the results
    plot_accuracy(accuracy)

if __name__ == "__main__":
    main()
