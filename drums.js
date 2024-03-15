import React, { useState, useEffect } from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";
import { Container, Row } from "https://esm.sh/react-bootstrap";

const DrumPad = ({ letter, audio, onLetterPlay }) => {
  const id = "Heater" + letter;

  const handleClick = () => {
    const audioElement = document.getElementById(letter);
    audioElement.play();
    onLetterPlay(letter);
    setTimeout(() => {
      audioElement.currentTime = 0; // Rewind audio to the beginning
      audioElement.play();
    }, 100);
  };

  const handleKeyPress = (event) => {
    if (event.key.toUpperCase() === letter.toUpperCase()) {
      handleClick();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="drum-pad" id={id} onClick={handleClick}>
      {letter}
      <audio id={letter} src={audio} className="clip" />
    </div>
  );
};

const DrumMachine = () => {
  const [currentLetter, setCurrentLetter] = useState("");

  const handleLetterPlay = (letter) => {
    setCurrentLetter(letter);
  };

  return (
    <Container id="display" className="display">
      Current letter: {currentLetter}
      <Container id="drum-machine" className="drum-machine">
        <Row>
          <DrumPad
            letter="Q"
            audio="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
            onLetterPlay={handleLetterPlay}
          />
          <DrumPad
            letter="W"
            audio="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
            onLetterPlay={handleLetterPlay}
          />
          <DrumPad
            letter="E"
            audio="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
            onLetterPlay={handleLetterPlay}
          />
        </Row>
        <Row>
          <DrumPad
            letter="A"
            audio="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
            onLetterPlay={handleLetterPlay}
          />
          <DrumPad
            letter="S"
            audio="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
            onLetterPlay={handleLetterPlay}
          />
          <DrumPad
            letter="D"
            audio="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
            onLetterPlay={handleLetterPlay}
          />
        </Row>
        <Row>
          <DrumPad
            letter="Z"
            audio="https://www.computerhope.com/jargon/m/example.mp3"
            onLetterPlay={handleLetterPlay}
          />
          <DrumPad
            letter="X"
            audio="https://d9olupt5igjta.cloudfront.net/samples/sample_files/388071/42275776085ac5e1d436148cc79c014816c15ca9/mp3/_sleigh_closed_hat.mp3?1710381798"
            onLetterPlay={handleLetterPlay}
          />
          <DrumPad
            letter="C"
            audio="https://d9olupt5igjta.cloudfront.net/samples/sample_files/387530/cbc259d84a79cd23a779677879a07451bd4b628b/mp3/_SampleGuitar.mp3?1710065625"
            onLetterPlay={handleLetterPlay}
          />
        </Row>
      </Container>
    </Container>
  );
};

ReactDOM.render(<DrumMachine />, document.getElementById("App"));
