let count = 0;

let percent = document.getElementById("percent");
let text = document.getElementById("text");

let interval = setInterval(() => {
    count++;
    percent.innerText = count + "%";

    if (count < 80) {
        text.innerText = "Please wait...🙌🙏";
    } 
    else {
        text.innerText = "Almost done...";
    }

    if (count === 100) {
        clearInterval(interval);

        text.innerText = "Done!";

        setTimeout(() => {
            window.location.href = "index.html "; // change to your page
        }, 500);
    }
}, 50);
