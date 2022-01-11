import Client from './Index';

// user
const LOGIN = '/login';
export const login = (username, password) =>
  Client.post(LOGIN, {
    username: username,
    password: password,
  });

export const register = (username, password) =>
  Client.post(`${LOGIN}/register`, {
    username: username,
    password: password,
  });

const MEMBER = '/api/member';

export const getAllMembersDetails = () => Client.get(`${MEMBER}/details`);

export const getMemberDetailsById = (id) => Client.get(`${MEMBER}/details/${id}`);

// TODO: add

export const deleteMember = (id) => Client.delete(`${MEMBER}/delete/${id}`);

const PROJECT = '/api/project';

export const getAllProjectsDetails = () => Client.get(`${PROJECT}/details`);

export const getProjectDetailsById = (id) => Client.get(`${PROJECT}/details/${id}`);

// TODO: update, add

export const deleteProject = (id) => Client.delete(`${PROJECT}/delete/${id}`);

const EVENT = '/api/event';

export const getAllEventsDetails = () => Client.get(`${EVENT}/details`);

export const getEventsById = (id) => Client.get(`${EVENT}/details/${id}`);

export const addEvent = (data) => Client.post(`${EVENT}/add`, data);

export const updateEvent = (data, id) => Client.put(`${EVENT}/update/${id}`, data);

export const deleteEvent = (id) => Client.delete(`${EVENT}/delete/${id}`);

const ACHIEVEMENT = '/api/achievement';

export const getAllAchievementDetails = () => Client.get(`${ACHIEVEMENT}/details`);

export const getAchievementById = (id) => Client.get(`${ACHIEVEMENT}/details/${id}`);

// TODO: update, add

export const deleteAchievement = (id) => Client.delete(`${ACHIEVEMENT}/delete/${id}`);
