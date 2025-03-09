export const ADD_TASK = "ADD_TASK";
export const MOVE_TASK = "MOVE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";

export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task,
});

export const moveTask = (taskId, taskStatus) => ({
    type: MOVE_TASK,
    payload: {taskId, taskStatus},
});

export const updateTask = (taskId, newText) => ({
    type: UPDATE_TASK,
    payload: {taskId, newText},
});
