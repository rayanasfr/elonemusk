// Function to add a comment to the first post
function addComment() {
    let comment = document.getElementById("commentInput").value;
    if (comment) {
        let commentSection = document.getElementById("commentSection");
        let newComment = document.createElement("div");
        newComment.classList.add("comment");
        newComment.textContent = comment;
        commentSection.appendChild(newComment);
        document.getElementById("commentInput").value = "";  // Clear the input
    }
}

// Function to add a comment to the second post
function addComment2() {
    let comment = document.getElementById("commentInput2").value;
    if (comment) {
        let commentSection = document.getElementById("commentSection2");
        let newComment = document.createElement("div");
        newComment.classList.add("comment");
        newComment.textContent = comment;
        commentSection.appendChild(newComment);
        document.getElementById("commentInput2").value = "";  // Clear the input
    }
}
