module.exports = (req, res, next) => {
    if (!this.req.session.isLoggedIn) {
        return this.res.redirect('/login');
    }
    next();
}