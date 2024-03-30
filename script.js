//play audio
function playAudio(soundId) {
  var audio = document.getElementById(soundId);
  audio.play();
}


//stop audio
function stopAllAudio() {
  var allAudio = document.querySelectorAll('audio');
  allAudio.forEach(function(audio) {
    audio.pause();
    audio.currentTime = 0;
  });
}


//fullscreen
var fullscreenBtn = document.getElementById('fullscreen-btn');

fullscreenBtn.addEventListener('click', function() {
    if (document.fullscreenElement || document.webkitFullscreenElement ||
        document.mozFullScreenElement || document.msFullscreenElement) {
        exitFullscreen();
    } else {
        requestFullscreen();
    }
});

function requestFullscreen() {
    var element = document.documentElement;
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}


//keyboard
document.addEventListener("keydown", function(event) {
  switch(event.key) {

    case "a":
      playAudio('work_it');
      break;

    case "q":
      playAudio('harder');
      break;

    case "z":
      playAudio('make_it');
      break;

    case "s":
      playAudio('better');
      break;

    case "e":
      playAudio('do_it');
      break;

    case "d":
      playAudio('faster');
      break;

    case "r":
      playAudio('makes_us');
      break;

    case "f":
      playAudio('stronger');
      break;

    case "t":
      playAudio('more_than');
      break;

    case "g":
      playAudio('ever');
      break;

    case "y":
      playAudio('hour');
      break;

    case "h":
      playAudio('after');
      break;

    case "u":
      playAudio('our');
      break;

    case "j":
      playAudio('work_is');
      break;

    case "i":
      playAudio('never');
      break;

    case "k":
      playAudio('over');
      break;

    case "w":
      playAudio('all');
      break;

    case "x":
      playAudio('all_2');
      break;

    case "c":
      stopAllAudio();
      break;
  }
});


//MIDI Input
document.addEventListener('DOMContentLoaded', function() {
  if (navigator.requestMIDIAccess) {
    navigator.requestMIDIAccess()
      .then(onMIDISuccess, onMIDIFailure);
  } else {
    alert('Your browser does not support the Web MIDI API.');
  }
});

function onMIDISuccess(midiAccess) {
  var inputs = midiAccess.inputs;
  inputs.forEach(function(input) {
    input.onmidimessage = getMIDIMessage;
  });
}

function onMIDIFailure() {
  alert('Unable to access your MIDI device.');
}

function getMIDIMessage(message) {
  var command = message.data[0];
  var note = message.data[1];
  var velocity = (message.data.length > 2) ? message.data[2] : 0;
  
  if (command === 144 && note === 60 && velocity > 0) {
    playAudio('work_it');
  }

  if (command === 144 && note === 61 && velocity > 0) {
    playAudio('harder');
  }

  if (command === 144 && note === 62 && velocity > 0) {
    playAudio('make_it');
  }

  if (command === 144 && note === 63 && velocity > 0) {
    playAudio('better');
  }

  if (command === 144 && note === 64 && velocity > 0) {
    playAudio('do_it');
  }

  if (command === 144 && note === 65 && velocity > 0) {
    playAudio('faster');
  }

  if (command === 144 && note === 66 && velocity > 0) {
    playAudio('makes_us');
  }

  if (command === 144 && note === 67 && velocity > 0) {
    playAudio('stronger');
  }

  if (command === 144 && note === 68 && velocity > 0) {
    playAudio('more_than');
  }

  if (command === 144 && note === 69 && velocity > 0) {
    playAudio('ever');
  }

  if (command === 144 && note === 70 && velocity > 0) {
    playAudio('hour');
  }

  if (command === 144 && note === 71 && velocity > 0) {
    playAudio('after');
  }

  if (command === 144 && note === 72 && velocity > 0) {
    playAudio('our');
  }

  if (command === 144 && note === 73 && velocity > 0) {
    playAudio('work_is');
  }

  if (command === 144 && note === 74 && velocity > 0) {
    playAudio('never');
  }

  if (command === 144 && note === 75 && velocity > 0) {
    playAudio('over');
  }

  if (command === 144 && note === 76 && velocity > 0) {
    playAudio('all');
  }

  if (command === 144 && note === 77 && velocity > 0) {
    playAudio('all_2');
  }

  if (command === 144 && note === 78 && velocity > 0) {
    stopAllAudio();
  }

}
