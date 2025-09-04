function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter("count1", 0, 100, 3000);
    counter("count2", 100, 1200, 2500);
    counter("count3", 0, 1200, 3000);
    counter("count4", 0, 500, 3000);
});

/*let btn = document.getElementById("Toggle-button");

btn.addEventListener("click", function () {
    btn.classList.toggle("dark-mode");
    if (btn.classList.contains("a")) {
        btn.textContent = "ON";
    } else {
        btn.textContent = "OFF";
    }
});*/
let toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');

  // Change icon based on mode
  if (document.body.classList.contains('light-mode')) {
    toggleBtn.textContent = '☀️'; // Light mode icon
  } else {
    toggleBtn.textContent = '🌙'; // Dark mode icon
  }
});
