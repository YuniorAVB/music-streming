const fileUpload = document.getElementById("file_upload");


fileUpload.addEventListener("change", function () {
    console.log("Subiendo")
  let formData = new FormData();

  formData.append("file_upload", this.files[0]);
  formData.append("dir_user","yavb");
  fetch("/upload", {
      method:"POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
});
