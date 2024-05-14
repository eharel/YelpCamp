const User = require('../models/user');

module.exports.renderLogin = (req, res) => {
    res.render('users/login');
};

module.exports.register = async (req, res, err) => {
    try {

        const { username, email, password } = req.body;
        const user = new User({ email, username });
        const registeredUser = await User.register(user, password);

        req.login(registeredUser, err => {
            if (err) return next(err);
            req.flash('success', 'Welcome to YelpCamp!');
            res.redirect('/campgrounds');
        })
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('/register');
    }
};

module.exports.renderRegister = (req, res) => {
    res.render('users/register');
};

module.exports.login = (req, res) => {
    req.flash('succuess', 'Welcome back!');
    const redirectURL = res.locals.returnTo || '/campgrounds';
    res.redirect(redirectURL);
};

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash('success', 'Goodbye!');
        res.redirect('/');
    });
};