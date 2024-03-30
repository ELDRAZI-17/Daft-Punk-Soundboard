function playAudio(soundId) {
  var audio = document.getElementById(soundId);
  audio.play();
}

function stopAllAudio() {
  var allAudio = document.querySelectorAll('audio');
  allAudio.forEach(function(audio) {
    audio.pause();
    audio.currentTime = 0;
  });
}

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
