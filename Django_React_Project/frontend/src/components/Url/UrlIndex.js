// Keep the urls and its corresponding Components in this file 

const UrlComponents = {}; 

UrlComponents['/'] = require('../Home/HomePage').default;
UrlComponents['/login'] = require('../AuthComponents/UserLogin').default;
UrlComponents['/signup'] = require('../AuthComponents/SignUp').default;
UrlComponents['/logout'] = require('../AuthComponents/UserLogout').default; 

export default UrlComponents; 