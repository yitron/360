import subprocess
import sys
import platform
import os

def install_pytorch(package):
    try:
        subprocess.check_call(
            [sys.executable, "-m", "pip", "install", package]
        )
    except subprocess.CalledProcessError as e:
        print(f"An error occurred while installing {package}: {e}")
        sys.exit(1)

def create_directories(base_path):
    # Define the directories for the AI project
    directories = {
        "data_preprocessing": [
            "preprocess_data.py",
            "augment_data.py",
            "clean_data.py"
        ],
        "pipeline": [
            "data_pipeline.py",
            "feature_engineering.py",
            "pipeline_utils.py"
        ],
        "training": [
            "train_model.py",
            "hyperparameters.py",
            "training_utils.py"
        ],
        "inference": [
            "inference.py",
            "evaluate_model.py",
            "inference_utils.py"
        ],
        "visualization": [
            "plot_results.py"
        ],
        "datasets": [
        ],
        
        "utils": [
            "config.py",
            "logger.py",
            "helpers.py"
        ],
        "models": []  # No placeholder files in models directory
    }

    # Create directories and placeholder files
    for folder, files in directories.items():
        path = os.path.join(base_path, "src", folder)
        if not os.path.exists(path):
            os.makedirs(path)
            print(f"Created directory: {path}")
        
        for file in files:
            file_path = os.path.join(path, file)
            if not os.path.exists(file_path):
                with open(file_path, 'w') as f:
                    pass
                print(f"Created file: {file_path}")

def detect_platform():
    system = platform.system()

    if system == "Darwin":
        if platform.machine() == "arm64":
            print("System detected macOS with Apple Silicon. Installing PyTorch with MPS support...")
            install_pytorch("torch")
        else:
            print("System detected macOS with Intel. Installing PyTorch for CPU...")
            install_pytorch("torch")

    elif system == "Linux":
        try:
            output = subprocess.check_output(['nvidia-smi'], stderr=subprocess.STDOUT, shell=True)
            if b'NVIDIA' in output:
                print("System detected Linux with NVIDIA GPU. Installing PyTorch for GPU...")
                install_pytorch("torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118")
            else:
                print("System detected Linux with CPU. Installing PyTorch for CPU...")
                install_pytorch("torch")
        
        except subprocess.CalledProcessError:
            print("No NVIDIA GPU detected or 'nvidia-smi' drivers not found... Installing PyTorch for CPU...")
            install_pytorch("torch")

    else:
        print(f"Unsupported system: {system}. If you use Windows, please reconsider.")
        sys.exit(1)

def main():
    detect_platform()
    
    # Define base path for the directories (can be customized)
    base_path = os.getcwd()
    
    # Create essential directories for the AI project
    create_directories(base_path)
    
    print("PyTorch installation complete. Essential directories and placeholder files created. Please run 'verify_installation.py' to verify your setup.")

if __name__ == "__main__":
    main()
