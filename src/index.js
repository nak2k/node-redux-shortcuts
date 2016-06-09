import { bind } from 'mousetrap';

export const bindShortcut = (keys, actionCreator) => dispatch =>
  (typeof actionCreator === 'function'
    ? bind(keys, e => dispatch(actionCreator()))
    : bind(keys, e => actionCreator.forEach(actionCreator => dispatch(actionCreator()))));

export const bindShortcuts = (...shortcuts) => dispatch => shortcuts.forEach(shortcut => bindShortcut(...shortcut)(dispatch));
