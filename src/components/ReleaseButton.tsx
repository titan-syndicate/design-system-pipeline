import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { useMachine } from "@xstate/react";
import { releaseButtonMachine } from "./releaseButtonMachine";

function ReleaseButton() {
  const [state, send] = useMachine(releaseButtonMachine);
  return (
    <>
      {state.nextEvents
      .filter((event) => !event.startsWith('xstate'))
      .map((event) =>
      (<Button
        variant="contained"
        color="primary"
        onClick={() => send(event)}>
        {event}
      </Button>))}
      {state.value.toString() === "releasing" && (
        <Alert severity="info">Releasing</Alert>)}
      {state.value.toString() === "released" && (
        <Alert severity="success">Released</Alert>)}
    </>
  );
}

export { ReleaseButton };