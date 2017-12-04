export const studyService = {
    getAll,
    getById
};

function getAll(token) {
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


function handleStudiesResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);

    }

    return response.json()
        .then((resp) => {

            console.log("study.service :: handleStudiesResponse(), resp: " + JSON.stringify(resp) );

            localStorage.setItem('studies', JSON.stringify(resp.studies));
            return (` ${  JSON.stringify(resp)}` );
            // console.log(`token_resp: ${  JSON.stringify(token_resp)}` );

        });
}
