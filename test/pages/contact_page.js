import ContactComponent from './components/contact-comp';

class ContactPage {

    open() {
        return browser.url('/contact/');
    }

    get confirmationMsg() {
        return $("[role='alert']");
    }

    get contactComponent() {
        return ContactComponent;
    }

}

export default new ContactPage();