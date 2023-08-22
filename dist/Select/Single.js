export default class Single extends Select {
    renderDropdown() {
        const dropdownEl = document.createElement('div');
        dropdownEl.className = "select-dropdown";

        this.options.forEach(option => {
            const optionEl = document.createElement('div');
            optionEl.className = "select-option";
            optionEl.innerText = option;

            optionEl.addEventListener('click', () => {
                const inputEl = this.container.querySelector('.select-input');
                inputEl.value = option; // действия при выборе опции
                dropdownEl.style.display = 'none'; // скрываем dropdown после выбора
            });

            dropdownEl.appendChild(optionEl);
        });

        return dropdownEl;
    }
}