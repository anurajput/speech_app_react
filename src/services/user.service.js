import {authHeader} from '../helpers';

export const userService = {
  login,
  logout,
  register,
  getApi,
  getAll,
  getById,
  update,
  delete: _delete,
};


// 
//------------------- Login -----------------
//

function login(history,email, password) {
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
            history.push('/');
           
          }

          return user;
        });
}



// 
//------------------- Logout  --------------------
//

function logout(history) {
    // remove user from local storage to log user out
  localStorage.removeItem('user');
  localStorage.removeItem('API');
  history.push("/login");
}


// 
//------------------- Request API --------------------
//


function getApi(token) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  };



  var user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        token = user.token;
        console.log("token: " + token);
       } else {
        console.warn("failed to get token !~~");
       }

  return fetch('http://52.230.8.132:8080/api/get_study_material?token='+token, requestOptions).then(handleStudiesResponse);
}




// 
//------------------- Register --------------------
//

function register(user) {
  var body = `security_level=1&email=${user.email  }&password=${  user.password  }&id=${  user.id  }&name=${  user.name}`;

  console.log(`body: ${  body}`);

  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: body,
  };
  return fetch('http://52.230.8.132:8080/api/user_registration', requestOptions).then(handleResponse);
       
  
}


// 
//------------------- Request  list of users --------------------
//


function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  };

  return fetch('/users', requestOptions).then(handleResponse);
}



// 
//------------------- Request  list of users by id --------------------
//


function getById(id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  };

  return fetch(`/users/${  id}`, requestOptions).then(handleResponse);
}






// 
//-------------------Update  user --------------------
//

function update(user) {
   /* const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch('/users/' + user.id, requestOptions).then(handleResponse);;
    */
}


// 
//-------------------Delete  user --------------------
//

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
   /* const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch('/users/' + id, requestOptions).then(handleResponse);;
    */
}


// 
//------------------- Response Handler --------------------
//

function handleResponse(response) {
  if (!response.ok) {
    return Promise.reject(response.statusText);
  }

  return response.json();
}



function handleStudiesResponse(response) {
  if (!response.ok) {
    return Promise.reject(response.statusText);
   
  }
  
  return response.json()
    .then((resp) => {

      console.log("printing resp....");
      console.log("resp: " + JSON.stringify(resp) );

      localStorage.setItem('studies', JSON.stringify(resp.studies));
      return (` ${  JSON.stringify(resp)}` );
      // console.log(`token_resp: ${  JSON.stringify(token_resp)}` );
         
          });

}

