import React, { useEffect, useState, useRef } from "react";
import { Container } from "@mui/system";
import { Link, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useMachine } from "@xstate/react";
import bannerMachine from "./bannerMachine";

function usePrevious(value: any) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef();
  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)
  return ref.current;
}

const Banner = () => {
  //   const [state, send] = useMachine(bannerMachine);
  const [currentVersion, setCurrentVersion] = useState("");
  const previousVersion = usePrevious(currentVersion);
  const [hidden, setHidden] = useState(true);

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
      .then((response) => setCurrentVersion(response.channel.currentVersion))
      .catch((err) => console.error(err));

  fetchRelease();

  useEffect(() => {
    let id = setInterval(() => fetchRelease(), 1000);
    console.log(currentVersion);
    if (currentVersion !== previousVersion) {
      fetchRelease();
      setHidden(false);
      clearInterval(id);
    }
  }, [currentVersion, previousVersion]);

  return (
    <>
      {hidden ? null : (
        <Container
          disableGutters={true}
          maxWidth={false}
          sx={{
            padding: "15px",
            background: "#65A4F8",
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Typography>
            Version {currentVersion} is now available!{"  "}
            <Link color="inherit" sx={{ cursor: "pointer" }}>
              Upgrade now.
            </Link>
          </Typography>
          <CloseIcon
            sx={{ position: "absolute", right: 32 }}
            onClick={() => {
              setHidden(true);
            }}
          />
        </Container>
      )}
    </>
  );
};

export default Banner;
