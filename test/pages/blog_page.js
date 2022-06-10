class BlogClass {

    open() {
        return browser.url('blog/');
    }

    get recentPostsList() {
        return $$('#recent-posts-3 ul li');
    }
}

export default new BlogClass();