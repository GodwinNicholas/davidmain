setTimeout(() => {
    alert("hello")
    const eBody = document.querySelector(".msg1");
    eBody.innerText = eBody.innerText.replace(/_/gi, " ");
});