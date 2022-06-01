import API from '../../api/api';

function DataAuth() {

}

DataAuth.defaultAuth = {
  id: void 0,
  loginEmail: '',
};

DataAuth.login = async function(loginEmail, pw) {
  try {
    const loginResult = await API.db.post('/login', {
      email: loginEmail,
      password: pw
    });

    let auth = {
      id: loginResult.data.id,
      loginEmail: loginResult.data.email
    };
    this.set(auth);

    return auth;
  } catch (e) {
    console.log('data_auth login error e=', e);
    return null;
  }
};

DataAuth.set = function(auth) {
  try {
    let str = JSON.stringify(auth);
    localStorage.setItem('auth', str);
  } catch (e) {
    return 'data_auth set error: ' + e;
  }
}

DataAuth.get = function() {
  let str = localStorage.getItem('auth');
  if (str === void 0 || str === null)
      return 'no stored data';
  try {
    let parsedObject = JSON.parse(str);
    return parsedObject;
  } catch (e) {
    return 'data_auth get error: ' + e;
  }
}

DataAuth.logout = function() {
  this.set(this.defaultAuth);
  console.log('data_auth.auth=', this.get().auth);
};


export default DataAuth;