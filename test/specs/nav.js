describe('Navigation menu', () => {
    it('get the text of all menu items and assert them', async () => {
        // hardcoded timeout
        // browser.pause(1000);

        await browser.url('/');

        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",
        ];

        const actualLinks = [];

        // waitFor commands

        // waitFor element to be displayed:
        // await $('#primary-menu li').waitForDisplayed({ timeout: 1000 });

        // waitForClickable
        // waitForEnabled
        // waitForExist

        // waitUntil - checks for a particular condition
        // wait until home text is displayed on nav menu
        // await browser.waitUntil(async function() {
        //     const homeText = $('#primary-menu li').getText(); returns Home
        //     return homeText == 'Home' returns true or false
        // }),
        // {
        //     timeout: 5000,
        //     timeoutMsg: 'could not verify Home text from #primary-menu li';
        // };

        // multiple identifiers can be done by chaning $ with $$ or just using $$ directly

        // by chaining $ with $$
        // const navLinks = await $('#primary-menu').$$('li[id*=menu]');

        // by directly calling $$
        const navLinks = await $$('#primary-menu li[id*=menu]');

        // loop thorugh each navigation link and add it to actualLinks list
        for (const link of navLinks) {
            actualLinks.push(await link.getText());
        };

        await expect(expectedLinks).toEqual(actualLinks);
    });
});