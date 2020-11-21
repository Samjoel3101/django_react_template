// Keep the urls and its corresponding Components in this file 

const UrlComponents = {}; 

UrlComponents['/login'] = require('../Login/UserLogin').default;
UrlComponents['/'] = require('../Home/HomePage').default; 

export default UrlComponents; 