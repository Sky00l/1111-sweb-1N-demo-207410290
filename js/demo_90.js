function change(index) {
    const p = document.querySelector('.show-classdemo');
    console.log('p',p);
    switch(index) {
        case 1:
            p.innerHTML = `<iframe src="./demo/w01_90/index.html" width="100%" height="100%" />`
            break;
        case 2:
            p.innerHTML = `<iframe src="./demo/w02_90/card_90.html" width="100%" height="100%" />`
            break;
        case 3:
            p.innerHTML = `<iframe src="./demo/w04_90/blog_90.html" width="100%" height="100%" />`
            break;
        case 4:
            p.innerHTML = `<iframe src="./demo/w06_90/blog_90.html" width="100%" height="100%" />`
            break;
        case 5:
            p.innerHTML = `<iframe src="./demo/w08_90/quiz1_90.html" width="100%" height="100%" />`
            break; 
        case 6:
            p.innerHTML = `<iframe src="./demo/w10_90/resume_90.html" width="100%" height="100%" />`
            break; 
    }
}
