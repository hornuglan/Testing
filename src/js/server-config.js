'use strict';

function getObjects() {
    const configPreloader = document.querySelector('.config__preloader');
    const configTable = document.querySelector('.config__table');
    let configTemplate =
        '<div class="config__row">' +
            '<div class="config__cpu">' + '</div>' +
            '<div class="config__hdd">' + '</div>' +
            '<div class="config__ram">' + '</div>' +
            '<div class="config__price">' + '</div>' +
        '</div>';

    let templateHTML = document.createElement('div');
    const xhrRequest = new XMLHttpRequest();
    const url = 'https://api.jsonbin.io/b/5b683d097b212953678c03dd';
    templateHTML.innerHTML = configTemplate;
    templateHTML = templateHTML.firstElementChild;
    xhrRequest.open('GET', url, true);
    xhrRequest.send();

    xhrRequest.onreadystatechange = function () {
        if (xhrRequest.readyState !== 4) return;
        configPreloader.classList.add('config__preloader--invisible');
        if (xhrRequest.status === 200) {
            const response = xhrRequest.responseText;
            const jsonParse = JSON.parse(response);
            configRendering();
        } else {
            const errorMessage = document.createElement('div');
            errorMessage.classList.add('config__error-message');
            errorMessage.textContent = 'Ошибка соединения';
            configTable.appendChild(errorMessage);
        }
    }

    function configRendering(data) {
        const block = document.createDocumentFragment();
        data.forEach(function (component) {
            let elem = templateHTML.cloneNode(true);
            let mainfraime = elem.querySelector('.config__cpu');
            let hdd = elem.querySelector('.config__hdd');
            let ram = elem.querySelector('.config__ram');
            let price = elem.querySelector('.config__price');
            mainfraime.textContent = component.cpu;
            hdd.textContent = component.hdd;
            ram.textContent = component.ram;
            price.textContent = component.price;
            block.appendChild(elem);
        });

        configTable.appendChild(block);
    }
}

getObjects();




/*
let template = `<div>
    <div>${'ramPrice'}</div>
    <div>${'hddPrice'}</div>
</div>`;

let response = Json.parse(response);

let element = template({
    ramPrice: response.ram.price,
    hddPrice: response.hdd.price
});

container.append(element);
*/
