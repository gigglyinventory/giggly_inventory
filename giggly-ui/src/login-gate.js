exports.loginGate = (req, res, next) => {
    console.log('in login-gate', req.session.isLoggedIn)
    if(req.session.isLoggedIn) {
        return true;
    } else {
        return false;
    }
}
