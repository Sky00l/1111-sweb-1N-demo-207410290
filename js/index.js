function change(index) {
  const p = document.querySelector('.show-classdemo');
  console.log('p',p);
  switch(index) {
      case 1:
          p.innerHTML = `<iframe src="./demo_90.html" width="100%" height="100%" />`
          break;
      case 2:
          p.innerHTML = `<iframe src="./demo/works/work.html" width="100%" height="100%" />`
          break;
      case 3:
          p.innerHTML = `<iframe src="./demo/resume/resume.html" width="100%" height="100%" />`
          break;
      case 4:
          p.innerHTML = `<iframe src="./demo/learn/learn_90.html" width="100%" height="100%" />`
          break;
     
  }
}
