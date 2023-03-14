import Button from "@mui/material/Button";
import { useMachine } from "@xstate/react";
import { releaseButtonMachine } from "./releaseButtonMachine";

function ReleaseButton() {
  const [state, send] = useMachine(releaseButtonMachine);
  const buttonName = state.matches("release") ? "Release" : "Undo";
  return (
    <Button variant="contained" color="primary"
      onClick={() => send(state.nextEvents[0])}>
      {buttonName}
    </Button>
  );
}

export { ReleaseButton };