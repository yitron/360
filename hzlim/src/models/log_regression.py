import torch
import torch.nn as nn

class LogisticRegressionModel(nn.Module):
    def __init__(self, input_size, hidden_size1, hidden_size2, hidden_size3):
        super(LogisticRegressionModel, self).__init__()
        self.hidden_layer1 = nn.Linear(input_size, hidden_size1)  # First hidden layer
        self.hidden_layer2 = nn.Linear(hidden_size1, hidden_size2)  # Second hidden layer
        self.hidden_layer3 = nn.Linear(hidden_size3, hidden_size3)
        self.output_layer = nn.Linear(hidden_size2, 1)  # Output layer
        self.activation = nn.ReLU()  # Activation function for hidden layers

    def forward(self, x):
        x = self.activation(self.hidden_layer1(x))  # Apply activation after first hidden layer
        x = self.activation(self.hidden_layer2(x))  # Apply activation after second hidden layer
        x = self.activation(self.hidden_layer3(x))
        h = torch.sigmoid(self.output_layer(x))  # Sigmoid activation for binary classification
        return h
