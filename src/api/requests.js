import Client from './Index';

const helperFunc = async (routeLoc, reqmethod, data) => {
  try {
    let result;
    if (reqmethod === 'get') {
      result = await Client.get(routeLoc, {
        validateStatus: function (status) {
          return status < 500;
        },
      });
      console.log(result);
    }
    if (reqmethod === 'post') {
      result = await Client.post(routeLoc, data, {
        validateStatus: function (status) {
          return status < 500;
        },
      });
      console.log(result);
    }
    if (reqmethod === 'put') {
      result = await Client.put(routeLoc, data, {
        validateStatus: function (status) {
          return status < 500;
        },
      });
      console.log(result);
    }
    if (reqmethod === 'delete') {
      result = await Client.delete(routeLoc, {
        validateStatus: function (status) {
          return status < 500;
        },
      });
      console.log(result);
    }
    if (result.statusText !== 'OK') {
      console.log(result.status, result.statusText);
    }
    return result.data;
  } catch (error) {
    console.log('server error');
  }
};
/*
// user
const LOGIN = '/login';
export const login = async (data) => {
  try {
    const result = await helperFunc(LOGIN, 'post', data);
    console.log(result);
    await localStorage.setItem('token', `Bearer ${result.token}`);
  } catch (error) {
    console.log(error);
  }
};

export const register = (data) => helperFunc(`${LOGIN}/register`, 'post', data);
*/
const BLOG = '/api/blog';

export const getAllBlogsDetails = async () => helperFunc(`${BLOG}/details`, 'get');

export const getBlogDetailsById = (id) => helperFunc(`${BLOG}/details/${id}`, 'get');
/*
export const addBlog = (data) => helperFunc(`${BLOG}/add`, 'post', data);
*/
const MEMBER = '/api/member';

export const getAllMembersDetails = () => helperFunc(`${MEMBER}/details`, 'get');

export const getMemberDetailsById = (id) => helperFunc(`${MEMBER}/details/${id}`, 'get');
/*
export const addMember = (data) => helperFunc(`${MEMBER}/add`, 'post', data);

export const deleteMember = (id) => helperFunc(`${MEMBER}/delete/${id}`, 'delete');
*/
const PROJECT = '/api/project';

export const getAllProjectsDetails = () => helperFunc(`${PROJECT}/details`, 'get');

export const getProjectDetailsById = (id) => helperFunc(`${PROJECT}/details/${id}`, 'get');
/*
export const addProject = (data) => helperFunc(`${PROJECT}/add`, 'post', data);

export const updateProject = (data, id) => helperFunc(`${PROJECT}/update/${id}`, 'post', data);

export const deleteProject = (id) => helperFunc(`${PROJECT}/delete/${id}`, 'delete');
*/
const EVENT = '/api/event';

export const getAllEventsDetails = () => helperFunc(`${EVENT}/details`, 'get');

export const getEventsById = (id) => helperFunc(`${EVENT}/details/${id}`, 'get');
/*
export const addEvent = (data) => helperFunc(`${EVENT}/add`, 'post', data);

export const updateEvent = (data, id) => helperFunc(`${EVENT}/update/${id}`, 'put', data);

export const deleteEvent = (id) => helperFunc(`${EVENT}/delete/${id}`, 'delete');
*/
const ACHIEVEMENT = '/api/achievement';

export const getAllAchievementDetails = () => helperFunc(`${ACHIEVEMENT}/details`, 'get');

export const getAchievementById = (id) => helperFunc(`${ACHIEVEMENT}/details/${id}`, 'get');
/*
export const addAchievement = (data) => helperFunc(`${ACHIEVEMENT}/add`, 'post', data);

export const updateAchievement = (data, id) =>
  helperFunc(`${ACHIEVEMENT}/update/${id}`, 'post', data);

export const deleteAchievement = (id) => helperFunc(`${ACHIEVEMENT}/delete/${id}`, 'delete');
*/