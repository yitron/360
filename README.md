# Setup & Running

This project uses [mdBook](https://github.com/rust-lang/mdBook), a tool to create books using Markdown files. Follow this guide to set up the project and run `mdBook` locally.

---

## Prerequisites

Before you begin, ensure the following tools are installed:

### Install Rust and Cargo

1. **Install Rust**:  
   Download and install Rust using the official installation script:

   ```bash
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   ```

   Follow the on-screen instructions to complete the setup.

2. **Verify Installation**:  
   Restart your terminal (or source your shell configuration) and verify Rust and Cargo are installed:

   ```bash
   rustc --version
   cargo --version
   ```

   These commands should display the installed versions of Rust and Cargo.

### Install `mdBook`

Once Rust and Cargo are installed, install `mdBook` by running:

```bash
cargo install mdbook
```

---

## Setting Up the Project

1. **Clone the Repository**

   Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yitron/360.git
   cd 360
   ```

2. **Run the Setup Script**

   Execute the `setup.sh` script to configure the documentation structure:

   ```bash
   ./setup.sh
   ```

   This script initializes the necessary files and directories for the project.

3. **Check the Book Files**

   Ensure all required Markdown files are present in the `src` directory. The main entry point for the book is typically the `SUMMARY.md` file, which outlines the structure of the book.

---

## Building the Book

After setting up the project, build the book using the following command:

```bash
mdbook build
```

This generates a static version of the book in the `book/` directory.

---

## Serving the Book Locally

To preview the book in your web browser, serve it locally by running:

```bash
mdbook serve
```

This starts a local server at `http://localhost:3000`. The server reloads automatically when you make changes to the Markdown files.

---

## Customizing the Book

You can customize the book's configuration by editing the `book.toml` file. For example, to change the book's title, modify the file as follows:

```toml
[book]
title = "My Custom Book Title"
```

---

## Troubleshooting

- If `mdBook` is not found, ensure that Rust and Cargo paths are set correctly in your environment.
- For issues building or serving the book, refer to the [mdBook documentation](https://rust-lang.github.io/mdBook/).

---

## Additional Resources

- [mdBook Documentation](https://rust-lang.github.io/mdBook/)
- [Rust Documentation](https://www.rust-lang.org/learn)
