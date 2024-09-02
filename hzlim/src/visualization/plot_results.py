import matplotlib.pyplot as plt

def plot_accuracy(accuracy):
    # Assuming you want to plot some form of accuracy progression or just the final accuracy
    plt.figure()
    plt.plot([1], [accuracy], marker='o', markersize=8, color='red')  # Example plot
    plt.title('Model Accuracy')
    plt.xlabel('Epoch')
    plt.ylabel('Accuracy')
    plt.show()
