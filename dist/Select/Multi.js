export default class Multi extends Select {
    renderDropdown() {
        const dropdownEl = document.createElement('div');
        dropdownEl.className = "select-dropdown";

        this.options.forEach(option => {
            const optionEl = document.createElement('div');
            optionEl.className = "select-option";

            const checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.value = option;

            optionEl.appendChild(checkbox);
            optionEl.appendChild(document.createTextNode(option));

            checkbox.addEventListener('change', this.updateSelectedValue.bind(this, dropdownEl));

            optionEl.addEventListener('click', (event) => {
                if (!event.target.matches('input[type="checkbox"]')) {
                    checkbox.checked = !checkbox.checked;
                    this.updateSelectedValue(dropdownEl);
                }
            });

            dropdownEl.appendChild(optionEl);
        });

        return dropdownEl;
    }

    updateSelectedValue(dropdownEl) {
        const inputEl = this.container.querySelector('.select-input');
        const selectedOptions = Array.from(dropdownEl.querySelectorAll('input[type="checkbox"]:checked'))
            .map(checkbox => checkbox.value);
        inputEl.value = selectedOptions.join(', ');
    }
}