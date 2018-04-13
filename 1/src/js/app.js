import SomeCtrl from 'js/controllers/some-ctrl';

// start the app
(() => {
    SomeCtrl()
        .then(mappedData => mappedData.reduce((acc, curr) => `${acc}<li>Id: ${curr.id}; val: ${curr.val}`, `<ul>`))
        .then(htmlContent => {
            document.getElementById('app').insertAdjacentHTML('beforeend', `${htmlContent}</ul>`);
        });
})();
