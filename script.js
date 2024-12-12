document.getElementById("submit").addEventListener("click", function() {
    const answers = {
        q1: "1",
        q2: "1",
        q3: "1",
        q4: "1",
        q5: "1"
    };

    let score = 0;
    for (let key in answers) {
        const selected = document.querySelector(`input[name="${key}"]:checked`);
        if (selected && selected.value === answers[key]) {
            score++;
        }
    }

    const result = document.getElementById("result");
    result.textContent = `Sonuç: ${score} / 5 doğru!`;
});
