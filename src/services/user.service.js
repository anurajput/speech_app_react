import {authHeader} from '../helpers';

export const userService = {
  login,
  logout,
  register,
  getAll,
  getById,
  update,
  delete: _delete,
};

function login(email, password) {


  var body = `email=${email  }&password=${  password}`;

  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: body,
  };

  console.log("----> body: " + body);

  return fetch('http://52.230.8.132:8080/api/user_login', requestOptions)
        .then((response) => {
          if (!response.ok) {
            return Promise.reject(response.statusText);
          }

          return response.json();
        })
        .then((token_resp) => {
          console.log(`token_resp: ${  JSON.stringify(token_resp)}` );

            // ----------------------------------------------------------
            // login successful if there's a jwt token in the response
            // ----------------------------------------------------------
          if (token_resp && token_resp.token) {
            var user = {
              email: email,
              token: token_resp.token,
            };

                // ------------------------------------------------------
                // store user details and jwt token in local storage
                // to keep user logged in between page refreshes
                // ------------------------------------------------------
            localStorage.setItem('user', JSON.stringify(user));
          }

          return user;
        });
}

function logout() {
    // remove user from local storage to log user out
  localStorage.removeItem('user');
}

function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  };

  return fetch('/users', requestOptions).then(handleResponse);
}

function getById(id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  };

  return fetch(`/users/${  id}`, requestOptions).then(handleResponse);
}

function register(user) {
  var body = `security_level=1&email=${user.email  }&password=${  user.password  }&first_name=${  user.first_name  }&last_name=${  user.last_name}`;

  console.log(`body: ${  body}`);

  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: body,
  };

  return fetch('http://crosswinds.oflanderclient.com/user/register', requestOptions).then(handleResponse);
}

function update(user) {
   /* const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch('/users/' + user.id, requestOptions).then(handleResponse);;
    */
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
   /* const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch('/users/' + id, requestOptions).then(handleResponse);;
    */
}

function handleResponse(response) {
  if (!response.ok) {
    return Promise.reject(response.statusText);
  }

  return response.json();
}
