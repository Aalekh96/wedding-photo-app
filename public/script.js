const fileInput = document.getElementById("photos");
const previewContainer = document.getElementById("preview");


document.getElementById("uploadForm").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const form = e.target;
    const formData = new FormData(form);
  
    const res = await fetch("/upload", {
      method: "POST",
      body: formData
    });
  
    const result = await res.text();
    document.getElementById("message").textContent = result;
    form.reset();
  });
  
  fileInput.addEventListener("change", function () {
    previewContainer.innerHTML = ""; // clear previous previews
    const files = fileInput.files;
  
    if (files.length === 0) return;
  
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
  
      if (!file.type.startsWith("image/")) continue;
  
      const reader = new FileReader();
  
      reader.onload = function (e) {
        const img = document.createElement("img");
        img.src = e.target.result;
        previewContainer.appendChild(img);
      };
  
      reader.readAsDataURL(file);
    }
  });