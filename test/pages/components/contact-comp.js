class ContactComponent {

    get nameField() {
        return $('.contact-name input');
    }

    get emailField() {
        return $('.contact-email input');
    }

    get phoneField() {
        return $('.contact-phone input');
    }

    get messageField() {
        return $('.contact-message textarea');
    }

    get btnSubmit() {
        return $('#evf-submit-277');
    }

}

export default new ContactComponent();