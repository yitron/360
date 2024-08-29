import torch
import torch.nn as nn

class LogisticRegressionModel(nn.Module):
    def __init__(self, input_dim):
        super(LogisticRegressionModel, self).__init__()
        self.fc = nn.Linear(input_dim, 1)  # Output is a single value for binary classification

    def forward(self, x):
        return torch.sigmoid(self.fc(x))
