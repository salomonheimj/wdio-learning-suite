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

    // can also create a method to call all this
    async submitForm(name, email, phone, message) {
        await this.nameField.addValue(name);
        await this.emailField.addValue(email);
        await this.phoneField.addValue(phone);
        await this.messageField.addValue(message);

        await this.btnSubmit.click();
    }
}

export default new ContactComponent();