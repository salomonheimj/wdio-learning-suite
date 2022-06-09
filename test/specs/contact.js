describe('Go to contact page', async () => {
    it('find input text, add info to them, submit them and assert success message', async () => {
        await browser.url('/contact/');

        // by id
        // const nameField = await $('#evf-277 input[id*=evf-277-field_ys0GeZISRs-1]');
        // const emailField = await $('#evf-277 input[id*=evf-277-field_LbH5NxasXM-2]');
        // const phoneField = await $('#evf-277 input[id*=evf-277-field_66FR384cge-3]');
        // const messageField = await $('#evf-277 textarea[id*=evf-277-field_yhGx3FOwr2-4]');

        // by class
        const nameField = await $('.contact-name input');
        const emailField = await $('.contact-email input');
        const phoneField = await $('.contact-phone input');
        const messageField = await $('.contact-message textarea');

        const submitButton = await $('#evf-submit-277');

        await nameField.setValue('Name Test');
        await emailField.setValue('emailtest@test.com');
        await phoneField.setValue('12345');
        await messageField.setValue('This is a test message');

        // debugging
        // can be done with console.log() and/or
        // browser.pause(miliseconds)

        // other option is browser.debug() --> need to change mocha timeout in config file

        // click on submit button
        await submitButton.click();

        // 		Thanks for contacting us! We will be in touch with you shortly	
        const confirmationMessage = await $("[role='alert']");

        await expect(confirmationMessage).toHaveText('Thanks for contacting us! We will be in touch with you shortly');

    });
});