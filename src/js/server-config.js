'use strict';

const getObjects = () => {
    const configPreloader = document.querySelector('.config__preloader');
    const configTable = document.querySelector('.config__table');

    const xhrRequest = new XMLHttpRequest();
    const url = 'https://api.jsonbin.io/b/5b683d097b212953678c03dd';

    xhrRequest.open('GET', url, true);
    xhrRequest.send();

    xhrRequest.onreadystatechange = () => {
        if (xhrRequest.readyState !== 4) return;
        configPreloader.classList.add('config__preloader--invisible');
        if (xhrRequest.status === 200) {
            const response = xhrRequest.responseText;
            const jsonParse = JSON.parse(response);
            configRendering(jsonParse);
        } else {
            const errorMessage = document.createElement('div');
            errorMessage.classList.add('config__error-message');
            errorMessage.textContent = 'Ошибка соединения';
            configTable.appendChild(errorMessage);
        }
    };

    const configRendering = (data) => {
        let block = '';
        data.forEach((item) => {
            const configTemplate = `<div class="config__row">
                <div class="config__cpu">${item.cpu}</div>
                <div class="config__hdd">${item.hdd}</div>
                <div class="config__ram">${item.ram}</div>
                <div class="config__price">${item.price}</div>
            </div>`;
            block += configTemplate;
        });

        configTable.append(block);
    }
};

getObjects();


