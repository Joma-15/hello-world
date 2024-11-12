// Select elements
const dragItem = document.getElementById("dragItem");
const dropZone = document.getElementById("dropZone");

// Add event listeners for drag events
dragItem.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", dragItem.id);
    dragItem.style.opacity = "0.5";
});

dragItem.addEventListener("dragend", () => {
    dragItem.style.opacity = "1";
});

// Add event listeners for drop events on the drop zone
dropZone.addEventListener("dragover", (e) => {
    e.preventDefault(); // Prevent default to allow drop
    dropZone.style.backgroundColor = "#f0f0f0";
});

dropZone.addEventListener("dragleave", () => {
    dropZone.style.backgroundColor = "";
});

dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(data);
    dropZone.appendChild(draggedElement); // Move the element to the drop zone
    dropZone.style.backgroundColor = "";
});
