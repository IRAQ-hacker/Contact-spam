URL = window.URL || window.webkitURL;

var gumStream; 						//stream from getUserMedia()var rec; 							//Recorder.js object

var input; 							//MediaStreamAudioSourceNode we'll be recording

// shim for AudioContext when it's not avb. 

var AudioContext = window.AudioContext || window.webkitAudioContext;

var audioContext //audio context to help us record

var redButton = document.getElementById("redButton");

redButton.addEventListener("click", Redirect);
