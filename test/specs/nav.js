describe('Navigation menu', () => {
    it('get the text of all menu items and assert them', async () => {
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

        // multiple identifies can be done by chaning $ with $$ or just using $$ directly

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