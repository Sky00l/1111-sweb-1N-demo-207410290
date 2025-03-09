const xhr = new XMLHttpRequest();

xhr.open('GET', './api/sample2.txt')

xhr.onreadystatechange = function () {
    console.log('xhr', xhr);
    if(xhr.readyState === 4 && xhr.status === 200) {
        const text = document.createElement('p');
        console.log('p', text);
        text.textContent = xhr.responseText;
        document.body.appendChild(text);
    } else {
        console.log({
            status: xhr.status,
            text: xhr.statusText,
            readyState: xhr.readyState
        });
    }
}

xhr.send();
