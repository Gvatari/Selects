class Select {
    constructor({ label, options }) {
        this.label = label;
        this.options = options || [];
        this.container = null;

        this.setupEventHandlers();
    }

    renderLabel() {
        const labelEl = document.createElement('div');
        labelEl.className = "select-label";
        labelEl.innerText = this.label;
        return labelEl;
    }

    renderInput() {
        const inputEl = document.createElement('input');
        inputEl.className = "select-input";

        inputEl.addEventListener('focus', () => {
            const dropdown = this.container.querySelector('.select-dropdown');
            dropdown.style.display = 'block'; // показываем dropdown при фокусе на input
        });

        inputEl.addEventListener('input', event => {
            const searchText = event.target.value.toLowerCase();
            const optionsContainer = this.container.querySelector('.select-dropdown');
            const optionEls = optionsContainer.querySelectorAll('.select-option');

            optionEls.forEach(optionEl => {
                const optionText = optionEl.textContent.toLowerCase();
                if (optionText.includes(searchText)) {
                    optionEl.style.display = 'block';
                } else {
                    optionEl.style.display = 'none';
                }
            });
        });

        return inputEl;
    }

    setupEventHandlers() {
        // Обработчик клика на документ
        document.addEventListener('click', event => {
            const isClickInsideSelect = this.container.contains(event.target);
            if (!isClickInsideSelect) {
                const dropdown = this.container.querySelector('.select-dropdown');
                dropdown.style.display = 'none';
            }
        });
    }

    render() {
        this.container = document.createElement('div');
        this.container.className = "select";

        this.container.appendChild(this.renderLabel());
        this.container.appendChild(this.renderInput());
        this.container.appendChild(this.renderDropdown());

        return this.container;
    }

    mount(parentElement) {
        parentElement.appendChild(this.render());
    }
}