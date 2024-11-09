# Online HTML, CSS, and JavaScript Compiler

This project is a web-based compiler that allows users to write and run HTML, CSS, and JavaScript code directly in the browser. It's designed to make it easy to experiment with web development concepts and see instant results.

## Features

- **Tabbed Editor**: Separate tabs for HTML, CSS, and JavaScript code with boilerplate code provided for each language.
- **Real-Time Preview**: A "Run Code" button to compile and display the code's output in an iframe.
- **Boilerplate Code**: Automatically adds boilerplate code to empty tabs to help users get started quickly.
- **Responsive Design**: Adjusts well to different screen sizes.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [File Structure](#file-structure)
- [License](#license)

## Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/online-html-css-js-compiler.git
cd online-html-css-js-compiler
```

Open `index.html` in your browser to start using the compiler.

## Usage

1. **Select a Tab**: Choose between HTML, CSS, and JavaScript by clicking on the respective tabs on the sidebar.
2. **Write Code**: Type your code in the editor for the selected language.
3. **Run Code**: Click on the "Run Code" button to compile and view the output in the iframe on the right side.
4. **Switch Tabs**: You can freely switch between tabs, and each one will retain its code until the page is refreshed.

## How It Works

1. **Tab Switching**: JavaScript enables tab switching, showing only the active editor. Each tab loads boilerplate code if it's empty.
2. **Run Code**: When the "Run Code" button is clicked, the content from each editor is gathered, combined into a single HTML document, and loaded into an iframe to display the results.
3. **Output Display**: The output iframe uses `srcdoc` to render the compiled HTML, CSS, and JavaScript code in real-time.

## File Structure

- `index.html`: Contains the HTML structure for the compiler interface.
- `styles.css`: Provides styling for the editor layout, sidebar, buttons, and iframe.
- `script.js`: Contains JavaScript logic for handling tab switching, loading boilerplate code, and compiling the code into the iframe.

## Example Boilerplate

The following boilerplate code is provided for each language:

- **HTML**: Basic HTML document structure with a header.
- **CSS**: Basic styling for `body` with Arial font-family.
- **JavaScript**: Simple `console.log` statement.

## License

This project is licensed under the MIT License.

