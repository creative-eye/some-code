import { Observable } from 'rxjs';

// mocked data, let's asume this comes via websockets or server events
const first = [
    { id: 1, val: 5 },
    { id: 2, val: 7 },
    { id: 3, val: 2 },
    { id: 1, val: 3 },
    { id: 2, val: 4 },
    { id: 3, val: 1 },
    { id: 1, val: 11 },
];

const second = [
    { id: 1, val: 55 },
    { id: 2, val: 71 },
    { id: 3, val: 22 },
    { id: 1, val: 33 },
    { id: 2, val: 46 },
    { id: 3, val: 11 },
    { id: 1, val: 166 },
];

const isOdd = (num) => num % 2;

(() => {
    const firstStream$ = Observable.create((observer) => {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                observer.next(first);
            }, i * 600);
        }
    });

    const secondStream$ = Observable.create((observer) => {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                observer.next(second);
            }, i * 1000);
        }
    });

    Observable.merge(firstStream$, secondStream$)
        .subscribe((data) => {
            const htmlContent = data.filter(data => isOdd(data.id) && !isOdd(data.val))
                .reduce((acc, curr) => `${acc}<li>Id: ${curr.id}; val: ${curr.val}`, `<ul>`);

            document.getElementById('app').insertAdjacentHTML('beforeend', `${htmlContent}</ul>`);
        });
})();
