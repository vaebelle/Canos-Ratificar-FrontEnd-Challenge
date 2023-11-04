const getAdvice = async() => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    document.getElementById("advice-count").innerHTML = `${data.slip.id}`;
    document.getElementById("advice-text").innerHTML = `"${data.slip.advice}"`;
};

const generateBtn = document.getElementById("genBtn");
generateBtn.addEventListener('click', function() {
    getAdvice();
});
