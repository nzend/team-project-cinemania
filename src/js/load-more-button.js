export default class loadMoreButton{
    constructor({ selector, isHidden = false }) {
        this.button = this.getButton(selector);
        isHidden && this.hide();
    }

    getButton(selector) {
        return document.querySelector(selector);
    }

    disabled() {
        this.button.disabled = true;
        this.button.textContent = 'Loading...';
    }
    enabled() {
        this.button.disabled = false;
        this.button.textContent = 'Load more';
    }
    hide() {
        this.button.classList.add('hidden');
    }
    show() {
        this.button.classList.remove('hidden');
    }

}
