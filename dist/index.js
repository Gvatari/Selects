import Single from './Select/Single.js';
import Multi from './Select/Multi.js';

document.addEventListener('DOMContentLoaded', () => {
    const select = new Single({
        label: 'Сотрудник',
        options: ['Опция 1', 'Опция 2']
    });
    const select2 = new Multi({
        label: 'Склад',
        options: ['Опция 1', 'Опция 2']
    });

    select.mount(document.body); // Можно выбрать другой элемент для монтирования
    select2.mount(document.body); // Можно выбрать другой элемент для монтирования
});