# redux-shortcuts

Keyboard shortcuts in Redux.

## Example

```js
import {
  bindShortcuts,
  mousetrap,
  Mousetrap,
} from 'redux-shortcuts';
import {
  myActionCreator,
  myActionCreator2,
} from './actions';

bindShortcuts(
  [['command+a', 'ctrl+a'], myActionCreator],
  [['command+b', 'ctrl+b'], myActionCreator2],

  // Dispatch multiple actions
  [['command+c', 'ctrl+c'], [myActionCreator, myActionCreator2]],

  // Dispatch and prevent default behavior
  [['command+s', 'ctrl+s'], myActionCreator, true]
)(store.dispatch);

//
// This package exports an instance of Mousetrap.
// So the stopCallback of it can be overwritten.
//
mousetrap.stopCallback = (e, element, combo, sequence) => {
  // Do something.

  // And call the default implementation if you need.
  return Mousetrap.stopCallback(e, element, combo, sequence);
};
```

See also [Mousetrap](https://craig.is/killing/mice) to define keyboard commands.
