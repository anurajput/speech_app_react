import {studyConstants} from '../constants';
import {studyService} from '../services';



export const studyActions = {getAll };

// 
//------------------- Request API --------------------
//

function getAll() {
  return (dispatch) => {
    dispatch(requestAll());

    studyService.getAll()
            .then(
                (studies) => {
                  dispatch(success(studies));
                },

                (error) => dispatch(failure(error))
            );
  };
  function requestAll() {
    return {type: studyConstants.GETALL_REQUEST};
  }
   function success(studies) {
    console.log("---> success for studies: " + studies);

    return {type: studyConstants.GETALL_SUCCESS, studies};
  }
  function failure(error) {
    return {type: studyConstants.GETALL_FAILURE, error};
  }
}

