// List of Python files to preview
const pythonFiles = [
  { path: "/src/SolvedPrograms/1.py", label: "1. Output: Hello, World!" },
  {
    path: "/src/SolvedPrograms/2.1.py",
    label: "2. Take input from the user and convert it to an integer",
  },
  {
    path: "/src/SolvedPrograms/2.2.py",
    label: "3. Take input from the user and convert it to an integer",
  },
];

// Get the container to display code previews
const filePreviewsContainer = document.getElementById("filePreviews");

// Function to fetch and display the content of Python files
async function fetchAndDisplayFile(fileObj) {
  try {
    console.log(`Fetching file: ${fileObj.path}`);
    const response = await fetch(fileObj.path);

    if (!response.ok) {
      throw new Error(
        `Failed to load ${fileObj.path} (status: ${response.status})`
      );
    }

    const fileContent = await response.text();

    // Create a new section for each file preview
    const filePreview = document.createElement("div");
    const fileTitle = document.createElement("h3");
    fileTitle.textContent = fileObj.label;

    // Apply custom styling to the heading
    fileTitle.style.fontFamily = '"Noto Serif Oriya", serif';
    fileTitle.style.fontWeight = "700";
    fileTitle.style.fontStyle = "normal";

    filePreview.appendChild(fileTitle);

    // Create a <pre><code> block for displaying the code
    const codeBlock = document.createElement("pre");
    const codeElement = document.createElement("code");
    codeElement.classList.add("language-python");
    codeElement.textContent = fileContent;

    codeBlock.appendChild(codeElement);
    filePreview.appendChild(codeBlock);

    filePreviewsContainer.appendChild(filePreview);

    // Apply syntax highlighting to the new content
    Prism.highlightAll();
  } catch (error) {
    console.error("Error fetching Python file:", error);
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
