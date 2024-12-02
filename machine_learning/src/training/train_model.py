import torch
import torch.optim as optim
from sklearn.metrics import accuracy_score


def train_model(model, criterion, optimizer, X_train, y_train, hyperparams):
    for epoch in range(hyperparams.epochs):
        model.train()
        
        # Forward pass
        outputs = model(X_train).squeeze()  # Remove the extra dimension if needed
        loss = criterion(outputs, y_train)
        
        # Backward pass and optimization
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()
        
        if (epoch + 1) % 100 == 0:  # Adjust logging frequency for better readability
            print(f'Epoch [{epoch + 1}/{hyperparams.epochs}], Loss: {loss.item():.4f}')

def evaluate_model(model, X_test, y_test):
    model.eval()
    with torch.no_grad():
        outputs = model(X_test).squeeze()
        predicted = (outputs > 0.5).float()
        accuracy = accuracy_score(y_test.numpy(), predicted.numpy())
        return accuracy
