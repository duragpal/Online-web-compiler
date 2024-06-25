// Default boilerplate code for each language
const boilerplate = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello, world!</h1>
</body>
</html>`,
  css: `/* Add your CSS here */
body {
    font-family: Arial, sans-serif;
}`,
  js: `// Add your JavaScript here
console.log('Hello, world!');`,
};

// Tab switching logic
document.getElementById("html-tab").addEventListener("click", function () {
  switchTab("html");
});
document.getElementById("css-tab").addEventListener("click", function () {
  switchTab("css");
});
document.getElementById("js-tab").addEventListener("click", function () {
  switchTab("js");
});

function switchTab(tab) {
  document.querySelectorAll(".tab").forEach((button) => {
    button.classList.remove("active");
  });
  document.querySelectorAll(".code-editor").forEach((editor) => {
    editor.classList.remove("active");
  });

  document.getElementById(`${tab}-tab`).classList.add("active");
  const editor = document.getElementById(`${tab}-code`);
  editor.classList.add("active");

  // Add boilerplate code if the editor is empty
  if (!editor.value.trim()) {
    editor.value = boilerplate[tab];
  }
}

// Run code logic
document.getElementById("run-code").addEventListener("click", function () {
  // Get the code from the textareas
  const htmlCode = document.getElementById("html-code").value;
  const cssCode = document.getElementById("css-code").value;
  const jsCode = document.getElementById("js-code").value;

  // Combine the code into a single HTML document
  const output = `
        <html>
        <head>
            <style>${cssCode}</style>
        </head>
        <body>
            ${htmlCode}
            <script>${jsCode}<\/script>
        </body>
        </html>
    `;

  // Display the output in the iframe
  const iframe = document.getElementById("output");
  iframe.srcdoc = output;
});

// Initialize by displaying the HTML tab
switchTab("html");
