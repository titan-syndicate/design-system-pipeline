import { createMachine } from 'xstate';
const releaseButtonMachine = createMachine({
  id: 'Email Undo',
  initial: 'release',
  states: {
    release: {}
  },
  // states: {
  //   inbox: {
  //     on: {
  //       COMPOSE: 'composing',
  //     },
  //   },
  //   composing: {
  //     on: {
  //       CLOSE: 'inbox',
  //       SEND: 'sending',
  //     },
  //   },
  //   sending: {
  //     on: {
  //       UNDO: 'composing',
  //     },
  //     after: {
  //       3000: 'inbox',
  //     },
  //   },
});


export { releaseButtonMachine }