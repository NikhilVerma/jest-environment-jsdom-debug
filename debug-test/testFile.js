module.exports = {
    setSomethingInWindow() {
        const div = document.createElement('div');
        window.something = true;
    },

    getSomethingFromWindow() {
        return window.something;
    }
};
