module.exports = (req, res, next) => {
    if(!this.req.session.isLoggedIn) {
        return false;
    } else {
        return true;
    }
}
