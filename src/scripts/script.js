// List of Python files to preview, relative to the root of your GitHub Pages site
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
  {
    path: "/src/SolvedPrograms/2.3.py",
    label: "4. Check Even or Odd in Python using Recursion",
  },
  {
    path: "/src/SolvedPrograms/2.4.py",
    label: "5. Check Even or Odd in Python using Lambda Function",
  },
];

// Get the container where the code previews will be inserted
const filePreviewsContainer = document.getElementById("filePreviews");

// Function to fetch and display the content of a Python file
// Function to fetch and display the content of a Python file
async function fetchAndDisplayFile(fileObj) {
  try {
    const response = await fetch(fileObj.path);
    const fileContent = await response.text();

    // Create a new section for each file preview
    const filePreview = document.createElement("div");

    // Add the custom label as a heading
    const fileTitle = document.createElement("h3");
    fileTitle.textContent = fileObj.label; // Use the custom label

    // Apply the font styles you want
    fileTitle.style.fontFamily = '"Noto Serif Oriya", serif';
    fileTitle.style.fontWeight = "700";
    fileTitle.style.fontStyle = "normal";

    filePreview.appendChild(fileTitle);

    // Create a <pre><code> block to display the Python code
    const codeBlock = document.createElement("pre");
    const codeElement = document.createElement("code");
    codeElement.classList.add("language-python");
    codeElement.textContent = fileContent; // Set the file content as text inside <code>

    // Append the <code> element to the <pre> block
    codeBlock.appendChild(codeElement);
    filePreview.appendChild(codeBlock);

    // Append the file preview to the container
    filePreviewsContainer.appendChild(filePreview);

    // Re-run Prism.js to apply syntax highlighting to the new content
    Prism.highlightAll();
  } catch (error) {
    console.error("Error fetching Python file:", error);
  }
}

// Function to fetch files one by one in order
async function loadFilesInOrder() {
  for (const fileObj of pythonFiles) {
    await fetchAndDisplayFile(fileObj); // Ensure each file is fetched and displayed before moving to the next
  }
}

// Call the function to load and display the files in order
loadFilesInOrder();
