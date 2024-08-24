# ai360 Academy Machine Learning Practice Repo

As we embark on the journey to become craftsmen in Machine Learning, which encapsulates deep learning, this repository serves as a playground for experimenting with various data, models, and deep learning techniques. Our goal is to practice and refine our skills as we learn.

## Guiding Principles

With the Bible as our guide:

**Ecclesiastes 9:10**  
*"Whatsoever thy hand findeth to do, do it with thy might; for there is no work, nor device, nor knowledge, nor wisdom, in the grave, whither thou goest."*  
This verse advises giving full effort to whatever task is at hand. It serves as a reminder that life is finite, and we should make the most of our time and opportunities.

**2 Timothy 2:15**  
*"Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth."*  
Rightly dividing and manipulating data is paramount to good machine learning practices.

## Framework

### Data
- **Extract:** Obtain data from various sources.
- **Transform:** Clean, preprocess, and prepare the data for analysis.
- **Load:** Load the data into the model for training and evaluation.

### Deep Learning Workflow

1. **Data Preparation**
   - **Collecting Data:** Gather a large and diverse dataset relevant to the problem.
   - **Preprocessing:** Clean and preprocess the data. This may involve normalization, standardization, augmentation, and handling missing values.
   - **Splitting Data:** Divide the data into training, validation, and test sets to ensure robust model evaluation and to prevent overfitting.

2. **Choosing the Model Architecture**
   - **Model Type:** Select the appropriate model type based on the problem (e.g., Convolutional Neural Networks for image processing, Recurrent Neural Networks for sequential data).
   - **Layer Design:** Design the architecture by choosing the number and type of layers (e.g., convolutional layers, fully connected layers, dropout layers).
   - **Activation Functions:** Choose activation functions (e.g., ReLU, sigmoid, tanh) to introduce non-linearities into the model.

3. **Setting the Objective Function**
   - **Loss Function:** Choose a suitable loss function that measures the difference between the predicted and actual outputs (e.g., Mean Squared Error for regression, Cross-Entropy Loss for classification).
   - **Regularization:** Apply regularization techniques (e.g., L1/L2 regularization, dropout) to prevent overfitting and improve generalization.

4. **Optimization Algorithm**
   - **Optimizer:** Select an optimization algorithm (e.g., Stochastic Gradient Descent, Adam, RMSprop) to minimize the loss function and update model parameters.
   - **Learning Rate:** Set an appropriate learning rate, which controls how much to adjust the model parameters with respect to the loss gradient.

5. **Training the Model**
   - **Batch Size:** Determine the batch size, which affects the speed and stability of training.
   - **Epochs:** Choose the number of epochs, or how many times the entire training dataset will be passed through the model.
   - **Monitoring and Tuning:** Monitor training and validation metrics (e.g., accuracy, loss) to detect overfitting, underfitting, or other training issues.

6. **Evaluating the Model**
   - **Performance Metrics:** Evaluate the model using appropriate performance metrics (e.g., accuracy, precision, recall, F1 score, AUC) on the validation and test sets.
   - **Cross-Validation:** Optionally, perform cross-validation to ensure the model’s performance is robust across different data splits.

7. **Hyperparameter Tuning**
   - **Hyperparameter Search:** Experiment with different hyperparameter settings (e.g., learning rates, batch sizes, number of layers) to find the optimal configuration.
   - **Automated Tuning:** Use automated hyperparameter tuning methods like grid search, random search, or Bayesian optimization.

8. **Model Deployment**
   - **Exporting the Model:** Save the trained model architecture and weights for deployment.
   - **Inference:** Deploy the model in a production environment for inference on new data.
   - **Monitoring:** Continuously monitor the deployed model’s performance and retrain as needed to maintain accuracy over time.

9. **Iterative Refinement**
   - **Analyze Errors:** Analyze model errors to identify patterns or areas for improvement.
   - **Data Augmentation and Enrichment:** Augment or enrich the training data based on error analysis to improve model performance.
   - **Model Updates:** Regularly update and refine the model based on new data, feedback, or changes in the problem domain.

## Models

### Logistic Regression

Logistic Regression is a statistical model that in its basic form uses a logistic function to model a binary dependent variable. It is one of the simplest and most commonly used models for classification tasks. Despite its simplicity, logistic regression is effective and widely used for a variety of applications in fields such as finance, healthcare, marketing, and more. In the real world, it can be used to predict outcomes such as customer churn, credit scoring, and spam detection.

## How to Run

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd <repository-folder>

2. **Setup the virtual environment**

```bash
python -m venv venv
```

```bash
source venv/bin/activate
```

3. **Run setup**

```bash
python setup.py
```

This should setup the necessary directories and packages used for deep learning