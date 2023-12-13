import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

import { Button, TextField } from "@mui/material";

function App() {
  const [config, setConfig] = React.useState({
    apiKey: "",
    channelId: "",
    appId: "",
  });

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Banner
          apiKey={config.apiKey}
          channelId={config.channelId}
          appId={config.appId}
        />

        {/* <ReleaseButton /> */}
        <form
          style={{ marginTop: "20px" }}
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <TextField
            label="channelId"
            onChange={(e) =>
              setConfig({ ...config, channelId: e.target.value })
            }
          />

          <TextField
            type="text"
            label="appId"
            onChange={(e) => setConfig({ ...config, appId: e.target.value })}
          />

          <TextField
            label="apiKey"
            onChange={(e) => setConfig({ ...config, apiKey: e.target.value })}
          />
          <Button type="submit">submit</Button>
        </form>
      </header>
    </div>
  );
}

export default App;
