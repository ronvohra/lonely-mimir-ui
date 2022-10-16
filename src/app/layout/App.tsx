import React, { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UploadFile } from "../../features/upload/UploadTSV";

function App() {
  const [file, setFile] = useState<File | null>();

  const onFileSelected = () => {
    if (!file) return;
    setFile(file);
  };

  return (
    <div className="App">
      <h1>Lonely Mimir</h1>
      <h2>Upload a TSV and get started</h2>
      <hr />
      <UploadFile onFileSelected={onFileSelected} />
    </div>
  );
}

export default App;
