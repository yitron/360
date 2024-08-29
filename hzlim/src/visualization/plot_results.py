import matplotlib.pyplot as plt

def plot_loss_history(loss_history):
    plt.figure()
    plt.plot(range(len(loss_history)), loss_history, label='Training Loss')
    plt.xlabel('Epoch')
    plt.ylabel('Loss')
    plt.title('Training Loss Over Epochs')
    plt.legend()
    plt.show()

def plot_accuracy(accuracy):
    plt.figure()
    plt.bar(['Accuracy'], [accuracy])
    plt.ylabel('Accuracy')
    plt.title('Model Accuracy')
    plt.show()
