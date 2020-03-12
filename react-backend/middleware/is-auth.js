module.exports = (req, res, next) => {
    console.log('in isAuth', req.session, req.body)
    if (!req.body.username) {
        return res.redirect('/login');
    }
    next();
}