import React from "react";
import {
  useRecordWebcam,
  CAMERA_STATUS
} from "react-record-webcam";
import styled from "styled-components";

const Button = styled.button`

  display: block;
  font-size: 1em;
  margin: 8px;
  padding: 5px;
  border: 2px solid black;
  border-radius: 5px;
`;
const Wrapper = styled.div`
   display: flex;
`
const App = () => {
  const recordWebcam = useRecordWebcam();

  return (
    <div>
      <div >
        <h1>Record Video</h1>
        <div>
          <Button disabled={
            recordWebcam.status === CAMERA_STATUS.OPEN ||
            recordWebcam.status === CAMERA_STATUS.RECORDING
          }
            onClick={recordWebcam.open}>Open Camera</Button>
          <Button
            disabled={
              recordWebcam.status === CAMERA_STATUS.CLOSED ||
              recordWebcam.status === CAMERA_STATUS.RECORDING
            }
            onClick={recordWebcam.close}
          > Close camera</Button>
          <Button disabled={
            recordWebcam.status === CAMERA_STATUS.CLOSED ||
            recordWebcam.status === CAMERA_STATUS.RECORDING
          }
            onClick={recordWebcam.start}>Start recording</Button>

          <Button
            disabled={recordWebcam.status !== CAMERA_STATUS.RECORDING}
            onClick={recordWebcam.stop}
          >
            Stop recording
          </Button>
          <Button
            disabled={recordWebcam.status !== CAMERA_STATUS.PREVIEW}
            onClick={recordWebcam.download}
          >
            Download
          </Button>
        </div>

        <video
          ref={recordWebcam.webcamRef}
          style={{
            display: `${recordWebcam.status === CAMERA_STATUS.OPEN ||
              recordWebcam.status === CAMERA_STATUS.RECORDING
              ? "block"
              : "none"
              }`
          }}
          autoPlay
          muted
        />
        <video
          ref={recordWebcam.previewRef}
          style={{
            display: `${recordWebcam.status === CAMERA_STATUS.PREVIEW ? "block" : "none"
              }`
          }}
          autoPlay
          muted
        />
      </div>
    </div>
  );
};

export default App;
