let phonefirst = null;

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".Box").forEach(box => {
    const img = box.querySelector(".phonefirst");

    box.addEventListener("click", () => {
      // If this box is already selected → deselect it
      if (phonefirst === box) {
        img.classList.remove("selected");
        phonefirst = null;
        return;
      }

      // If no phone selected → select this one
      if (!phonefirst) {
        phonefirst = box;
        img.classList.add("selected");
        return;
      }

      // If another phone already selected → go to compare page
      const phone1 = phonefirst.dataset.phone;
      const phone2 = box.dataset.phone;
      window.location.href = `compare.html?p1=${phone1}&p2=${phone2}`;
    });
  });
});
