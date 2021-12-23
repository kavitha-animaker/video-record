import React from "react";
import {
  useRecordWebcam,
  CAMERA_STATUS
} from "react-record-webcam";


const App = () => {
  const recordWebcam = useRecordWebcam();

  return (
    <div>
      <div >
        <h1>Record Video</h1>
        <div>
          <button
            disabled={
              recordWebcam.status === CAMERA_STATUS.OPEN ||
              recordWebcam.status === CAMERA_STATUS.RECORDING
            }
            onClick={recordWebcam.open}
          >
            Open camera
          </button>
          <button
            disabled={
              recordWebcam.status === CAMERA_STATUS.CLOSED ||
              recordWebcam.status === CAMERA_STATUS.RECORDING
            }
            onClick={recordWebcam.close}
          >
            Close camera
          </button>
          <button
            disabled={
              recordWebcam.status === CAMERA_STATUS.CLOSED ||
              recordWebcam.status === CAMERA_STATUS.RECORDING
            }
            onClick={recordWebcam.start}
          >
            Start recording
          </button>
          <button
            disabled={recordWebcam.status !== CAMERA_STATUS.RECORDING}
            onClick={recordWebcam.stop}
          >
            Stop recording
          </button>
          <button
            disabled={recordWebcam.status !== CAMERA_STATUS.PREVIEW}
            onClick={recordWebcam.download}
          >
            Download
          </button>
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
