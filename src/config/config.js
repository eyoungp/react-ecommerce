const API_SERVER = 'http://13.125.79.26:5000'

const CONFIG = {
  EVENT_REGISTER: `https://3owli2gq80.execute-api.ap-northeast-2.amazonaws.com/default/event_handler`,
  USER_LOGIN: `${API_SERVER}/users/authenticate`,
  USER_SIGNUP: `${API_SERVER}/users/register`,
  COLLECTION: `${API_SERVER}/collection`

};

export default CONFIG;