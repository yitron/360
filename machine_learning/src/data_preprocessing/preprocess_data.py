import pandas as pd
import seaborn as sns
import os
import torch
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

# Define directory and file path
DATA_DIR = 'datasets'
DATA_FILE = 'titanic_dataset.csv'
DATA_PATH = os.path.join(DATA_DIR, DATA_FILE)

def create_data_dir():
    """Create the datasets directory if it doesn't exist."""
    if not os.path.exists(DATA_DIR):
        os.makedirs(DATA_DIR)
        print(f"Directory {DATA_DIR} created.")

def download_and_save_data():
    """Download the Titanic dataset and save it to a CSV file in the datasets directory."""
    create_data_dir()
    df = sns.load_dataset('titanic')
    df.to_csv(DATA_PATH, index=False)
    print(f"Dataset downloaded and saved to {DATA_PATH}")

def load_titanic_data():
    """Load the Titanic dataset from a CSV file and preprocess it."""
    if not os.path.isfile(DATA_PATH):
        print(f"{DATA_PATH} not found. Downloading the dataset...")
        download_and_save_data()
    
    df = pd.read_csv(DATA_PATH)
    df = df.dropna(subset=['age', 'fare', 'embarked'])
    df['sex'] = df['sex'].map({'male': 0, 'female': 1})
    df['embarked'] = df['embarked'].map({'C': 0, 'Q': 1, 'S': 2})
    df = df[['age', 'fare', 'sex', 'embarked', 'survived']]
    
    X = df[['age', 'fare', 'sex', 'embarked']].values
    y = df['survived'].values

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)
    
    scaler = StandardScaler()
    X_train = scaler.fit_transform(X_train)
    X_test = scaler.transform(X_test)
    
    return torch.tensor(X_train, dtype=torch.float32), torch.tensor(y_train, dtype=torch.float32), \
           torch.tensor(X_test, dtype=torch.float32), torch.tensor(y_test, dtype=torch.float32)
