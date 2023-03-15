import { createMachine } from "xstate";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "947cf1cd06be3577655f28e1999a7672ec26dbf9900faa909d9a3a283c345bfd",
  },
};

const fetchRelease = () =>
  fetch(
    "https://api.replicated.com/vendor/v3/app/2MyIU7YVJvqnlTfgPMILmTr7iUZ/channel/2MyIU4o7jdYdrT49ZEnh2z7J4rD",
    options,
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

const bannerMachine = createMachine({
  id: "banner",
  initial: "hidden",
  context: {
    userId: 42,
    user: undefined,
    error: undefined,
  },
  states: {
    hidden: {
      invoke: {
        src: () => fetchRelease(),
        onDone: {
          target: "success",
          //     actions: assign({ user: (context, event) => event.data }),
        },
      },
    },
    success: { on: { HIDDEN: "hidden" } },
  },
});

export default bannerMachine;
