const radioBtns = document.querySelectorAll("input[type='radio']");
const submitBtn = document.querySelector("button");
const notSelected = document.querySelector(".not-selected");
let ratingValue = 0;

radioBtns.forEach((btn) =>
    btn.addEventListener("click", (e) => {
        ratingValue = e.target.value;
        notSelected.style.display = "none";
    })
);

const checkSelected = (e) => {
    if (ratingValue === 0) {
        e.preventDefault();
        notSelected.style.display = "block";
    }
};

submitBtn.addEventListener("click", checkSelected);