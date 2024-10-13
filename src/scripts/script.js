fetch("../SolvedPrograms/1.1.py") // Fetching Python file one directory up
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.text();
  })
  .then((text) => {
    document.getElementById("pythonCode").textContent = text;
    Prism.highlightAll(); // Re-apply syntax highlighting after loading the code
  })
  .catch((error) => {
    console.error("Error fetching Python file:", error);
  });
