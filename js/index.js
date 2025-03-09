const showClassDemo = index => {
    const showDemo = document.querySelector('.show-classdemo')
    console.log('showDemo', showDemo)
    switch (index) {
        case 1:
            showDemo.innerHTML = `<iframe src="./demo_90.html" width="100%" height="100%" />`
            break
        case 2:
            showDemo.innerHTML = `<iframe src="./demo/works/work.html" width="100%" height="100%" />`
            break
        case 3:
            showDemo.innerHTML = `<iframe src="./demo/resume/resume.html" width="100%" height="100%" />`
            break
        case 4:
            showDemo.innerHTML = `<iframe src="./demo/learn/learn_90.html" width="100%" height="100%" />`
            break
        case 5:
            showDemo.innerHTML = `<iframe src="./demo/w01_90/index.html" width="100%" height="100%" />`
            break
        case 6:
            showDemo.innerHTML = `<iframe src="./demo/w02_90/card_90.html" width="100%" height="100%" />`
            break
        case 7:
            showDemo.innerHTML = `<iframe src="./demo/w04_90/blog_90.html" width="100%" height="100%" />`
            break
        case 8:
            showDemo.innerHTML = `<iframe src="./demo/w06_90/blog_90.html" width="100%" height="100%" />`
            break
        case 9:
            showDemo.innerHTML = `<iframe src="./demo/w10_90/multipage_90.html" width="100%" height="100%" />`
            break
        case 10:
            showDemo.innerHTML = `<iframe src="./demo/w02-imgGallery/imgGallery.html" width="100%" height="100%" />`
            break
        case 11:
            showDemo.innerHTML = `<iframe src="./demo/w12_90_portfolio/portfolio/index.html" width="100%" height="100%" />`
            break
        case 12:
            showDemo.innerHTML = `<iframe src="./demo/w13_90_portfolio/portfolio/index.html" width="100%" height="100%" />`
            break
        case 13:
            showDemo.innerHTML = `<iframe src="./demo/w14_90_portfolio/portfolio/index.html" width="100%" height="100%" />`
            break
        case 14:
            showDemo.innerHTML = `<iframe src="./demo/w11_90_midterm/p4_90/p4_90.html" width="100%" height="100%" />`
            break
        case 16:
            showDemo.innerHTML = `<iframe src="./demo/w16_90_portfolio/portfolio/index.html" width="100%" height="100%" />`
            break
        case 15:
            showDemo.innerHTML = `<iframe src="./demo/w07-ms-clone/index.html" width="100%" height="100%" />`
            break
        case 17:
            showDemo.innerHTML = `<iframe src="./classdemo_90.pdf" width="100%" height="100%" />`
            break

    }
}