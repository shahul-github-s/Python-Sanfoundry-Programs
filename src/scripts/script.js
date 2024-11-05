// List of Python files to preview
const pythonFiles = [
  { path: "./src/SolvedPrograms/1.py", label: "1. Output: Hello, World!" },
  {
    path: "./src/SolvedPrograms/2.1.py",
    label: "2. Check Even or Odd in Python using if-else and Modulus Operator",
  },
  {
    path: "./src/SolvedPrograms/2.2.py",
    label: "3. Check Even or Odd in Python using Bitwise Operator",
  },
  {
    path: "./src/SolvedPrograms/2.3.py",
    label: "4. Check Even or Odd in Python using Recursion",
  },
  {
    path: "./src/SolvedPrograms/2.4.py",
    label: "5. Check Even or Odd in Python using Lambda Function",
  },
  {
    path: "./src/SolvedPrograms/3.py",
    label: "6. Check whether a number is positive or negative",
  },
];

// Get the container to display code previews
const filePreviewsContainer = document.getElementById("filePreviews");

// Function to fetch and display the content of Python files
async function fetchAndDisplayFile(fileObj) {
  try {
    const response = await fetch(fileObj.path);
    if (!response.ok) {
      throw new Error(
        `Failed to load ${fileObj.path} (status: ${response.status})`
      );
    }

    const fileContent = await response.text();

    // Create a new section for each file preview
    const filePreview = document.createElement("div");
    filePreview.classList.add("file-preview");

    const fileTitle = document.createElement("h3");
    fileTitle.textContent = fileObj.label;
    filePreview.appendChild(fileTitle);

    // Create a <pre><code> block for displaying the code
    const codeBlock = document.createElement("pre");
    const codeElement = document.createElement("code");
    codeElement.classList.add("language-python");
    codeElement.textContent = fileContent;

    codeBlock.appendChild(codeElement);
    filePreview.appendChild(codeBlock);
    filePreviewsContainer.appendChild(filePreview);

    // Apply syntax highlighting to the specific code block
    Prism.highlightElement(codeElement);
  } catch (error) {
    // Display error message
    const errorMessage = document.createElement("p");
    errorMessage.style.color = "red";
    errorMessage.textContent = `Error loading file: ${fileObj.label}`;
    filePreviewsContainer.appendChild(errorMessage);
    console.error(`Error fetching Python file: ${fileObj.path}`, error);
  }
}

// Load and display files sequentially
async function loadFilesInOrder() {
  for (const fileObj of pythonFiles) {
    await fetchAndDisplayFile(fileObj);
  }
}

// Start the file loading process
loadFilesInOrder();
