const btn = document.querySelector('.btn');
const url = './api/people.json';

btn.addEventListener('click', async () => {
    const data = await getData(url);
    await displayData(data);
});

const getData = async (url) => {
    try{
        const response = await fetch(url);
        const data = response.json();
        console.log('response',response);
        console.log('getData',data);
        return data;
    } catch(error){
        console.log(error);
    }
    
};

const displayData = async (data) => {
    console.log('data',data);
    const displayContent = data.map((item) => {
        return `<p> ${item.name} </p>`
    }).join('');
    const divElement = document.createElement('div');
    divElement.innerHTML = displayContent;
    document.body.appendChild(divElement);
}


// btn.addEventListener('click', () => {
//     getData(url);
// });

// const getData = (url) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', url)
//     xhr.onreadystatechange = function () {
//     console.log('xhr', xhr);
//     if(xhr.readyState === 4 && xhr.status === 200) {
//         const data = JSON.parse(xhr.responseText);
//         console.log('data', data);
//         const displayData = data.map((item) => {
//             return `<p> ${item.name} </p>`
//         }).join('');
//         const divElement = document.createElement('div');
//         divElement.innerHTML = displayData;
//         document.body.appendChild(divElement);
//     } else {
//         console.log({
//             status: xhr.status,
//             text: xhr.statusText,
//             readyState: xhr.readyState
//         });
//     }
// }
// xhr.send();
// };
