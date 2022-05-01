import API from '../../api/api';

function DataAuth() {

}

DataAuth.defaultAuth = {
  id: void 0,
  loginEmail: '',
  token: ''
};

DataAuth.login = async function(loginEmail, pw) {
  const loginResult = await API.db.post('/login', {
    email: loginEmail,
    password: pw
  });
  
  // return loginResult.data;

  const loginValue = loginResult.data.items;

  // for test
  // let auth = {
  //   id: 1,
  //   loginEmail: loginEmail,
  //   token: 'test token',
  // };
  ///////////////////////////////

  let auth = {
    id: loginValue.id,
    loginEmail: loginEmail,
    token: loginValue.token,
  };

  return auth;
};

DataAuth.logout = function() {
};


export default DataAuth;