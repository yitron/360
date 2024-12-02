import torch

def verify_device():
    if torch.cuda.is_available():
        device = torch.device("cuda")
        print("PyTorch is using CUDA.")
    elif torch.backends.mps.is_available():
        device = torch.device("mps")
        print("PyTorch is using MPS.")
    else:
        device = torch.device("cpu")
        print("PyTorch is using CPU.")
    
    # Create a random tensor on the detected device
    tensor = torch.rand(3, 3, device=device)
    print(f"\nInitiating Tensor on {device}:\n")
    print(tensor)

if __name__ == "__main__":
    verify_device()
