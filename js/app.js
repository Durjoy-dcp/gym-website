function switchTab(id) {
    const contents = document.getElementsByClassName('body-contents');
    for (content of contents) {
        content.style.display = "none";
    }
    document.getElementById(id).style.display = "block";
}