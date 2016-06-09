# redux-shortcuts

Keyboard shortcuts in Redux.

## Example

```js
import { bindShortcuts } from 'redux-shortcuts';
import {
  myActionCreator,
  myActionCreator2,
} from './actions';

bindShortcuts(
  [['command+a', 'ctrl+a'], myActionCreator],
  [['command+b', 'ctrl+b'], myActionCreator2],
  // Dispatch multiple actions
  [['command+c', 'ctrl+c'], [myActionCreator, myActionCreator2]]
)(store.dispatch);
```

See also [Mousetrap](https://craig.is/killing/mice) to define keyboard commands.
