import { createMachine } from 'xstate';
const releaseButtonMachine = createMachine({
  id: 'Release',
  initial: 'release',
  states: {
    release: {
      on: {
        RELEASE: 'releasing',
      }
    },
    releasing: {
      after: {
        2000: 'released',
      },
      on: {
        cancel: 'release',
      }
    },
    released: {
      after: {
        2000: 'release',
      },
    },
  },
});


// const releaseButtonMachine = createMachine({
//   id: 'Release',
//   initial: 'release',
//   states: {
//     release: {},
//   },
// });


export { releaseButtonMachine }