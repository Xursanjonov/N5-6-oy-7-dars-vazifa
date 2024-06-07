const GET_USER = "GET_USER";
const POST_USER = "POST_USER";
const DELETE_USER = "DELETE_USER";
const PUT_USER = "PUT_USER";

export const getUsers = () => {
  return {
    type: GET_USER,
  };
};
export const postUsers = (payload) => {
  return {
    type: POST_USER,
    payload,
  };
};
export const deleteUsers = (payload) => {
  return {
    type: DELETE_USER,
    payload,
  };
};
export const putUsers = (payload) => {
  return {
    type: PUT_USER,
    payload,
  };
};
