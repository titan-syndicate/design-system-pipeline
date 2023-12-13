import React, { useEffect, useState, useRef } from "react";
import { Container } from "@mui/system";
import { Link, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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

const Banner = ({
  apiKey,
  channelId,
  appId,
}: {
  apiKey: string;
  channelId: string;
  appId: string;
}) => {
  //   const [state, send] = useMachine(bannerMachine);
  const [currentVersion, setCurrentVersion] = useState("");
  const previousVersion = usePrevious(currentVersion);
  const [hidden, setHidden] = useState(true);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: apiKey,
    },
  };

  useEffect(() => {
    if (apiKey !== "" && channelId !== "" && apiKey !== "") {
      let id = setInterval(() => fetchRelease(), 1000);

      const fetchRelease = () => {
        fetch(
          `https://api.replicated.com/vendor/v3/app/${appId}/channel/${channelId}`,
          options,
        )
          .then((response) => response.json())
          .then((response) =>
            setCurrentVersion(response.channel.currentVersion),
          )
          .catch((err) => console.error(err));
      };
      if (currentVersion !== previousVersion) {
        fetchRelease();
        setHidden(false);
        clearInterval(id);
      }
    }
  }, [apiKey, appId, channelId, currentVersion, previousVersion]);

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
