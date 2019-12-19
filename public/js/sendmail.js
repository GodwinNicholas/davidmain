const para = document.querySelectorAll(".message p");
const sendbtn = document.querySelector(".sendBtn");
const desc = document.querySelector(".description");

let counter = 0;

setInterval(() => {
    if (counter < 3) {
        para[counter].classList.toggle("show");
        setTimeout(() => {
            para[counter].classList.toggle("show");
            counter++;
        }, 1500)
    }
    else if (counter >= 3) {
        counter = 0;
        para[counter].classList.toggle("show");
        setTimeout(() => {
            para[counter].classList.toggle("show");
            counter++;
        }, 1500)
    }
}, 3000);



// after clicking send btn
sendbtn.addEventListener('click', e => {
    // e.preventDefault();
    e.target.classList.add("removed");
    desc.style.height = 'auto';
});


