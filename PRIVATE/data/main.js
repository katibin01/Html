const typed = new typed('.multiple-text', {
    strings: ['I\'m a Web Developer', 'I\'m a Student', 'I\'m a gamer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
const circularProgress = document.querySelectorAll('[data-all]');
const progressValue = document.querySelectorAll('[data-value]');
const progress = [
    {
        id: 0,
        progressStartValue: 0,
        progressEndValue: 70,
        speed: 100,
        language: "html and css"
    },
    {
        id: 1,
        progressStartValue: 0,
        progressEndValue: 60,
        speed: 100,
        language: "javascript"
    },
    {
        id: 2,
        progressStartValue: 0,
        progressEndValue: 50,
        speed: 100,
        language: "java"
    },   
]
const newProgress = [...new Set(progress.map((item) => item))];
console.log(newProgress);

document.getElementById('skills').innerHTML = newProgress.map(item => {
    let {progressStartValue, progressEndValue, speed, language} = item;
    let progressRun = setInterval(() => {
        progressStartValue++;
        progressValue.forEach(value => {
            value.textContent = '${progressStartValue}%';
        });
        circularProgress.forEach(box => {
            box.computedStyleMap.background = `conic-gradient(#dd2a7b ${progressStartValue = 3.6}deg, #ededed 0deg)`
        });
        if(progressStartValue == progressEndValue) {
            clearInterval(progressRun);
        };
        
    })
})