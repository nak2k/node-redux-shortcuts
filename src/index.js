import { bind } from 'mousetrap';

export const bindShortcut = (keys, actionCreator, preventDefault) => dispatch =>
  (typeof actionCreator === 'function'
    ? bind(keys, e => (dispatch(actionCreator()), !preventDefault))
    : bind(keys, e => (actionCreator.forEach(actionCreator => dispatch(actionCreator())), !preventDefault)));

export const bindShortcuts = (...shortcuts) => dispatch => shortcuts.forEach(shortcut => bindShortcut(...shortcut)(dispatch));
