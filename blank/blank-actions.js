export const ACTION_TYPE = 'ACTION_TYPE';

export const action = (payload) => {
  return {
    type: ACTION_TYPE,
    payload: payload,
  };
}

export default {
  ACTION_TYPE,
  action,
};
