import { bind } from 'mousetrap';

export const bindShortcut = (keys, actionCreator) => dispatch => bind(keys, e => dispatch(actionCreator()));

export const bindShortcuts = (...shortcuts) => dispatch => shortcuts.forEach(shortcut => bindShortcut(...shortcut)(dispatch));
