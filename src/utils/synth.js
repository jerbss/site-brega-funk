// Web Audio API Synthesizer to simulate Pop and Brega Funk beats
let audioCtx = null;
let activeNodes = [];
let isPlaying = false;
let intervalId = null;

function initAudio() {
	if (!audioCtx) {
		audioCtx = new (window.AudioContext || window.webkitAudioContext)();
	}
	if (audioCtx.state === "suspended") {
		audioCtx.resume();
	}
}

export function playBeat(type, onBeat, isChorus = false) {
	initAudio();
	stopBeat();
	isPlaying = true;

	const bpm = type === "brega" ? 130 : 90;
	const stepTime = 60 / bpm / 4; // 16th notes
	let currentStep = 0;
	let nextPlayTime = audioCtx.currentTime;

	function scheduler() {
		while (nextPlayTime < audioCtx.currentTime + 0.1) {
			playStep(type, currentStep, nextPlayTime, isChorus);
			if (onBeat && currentStep % 4 === 0) {
				// Call callback on every quarter beat
				onBeat(Math.floor(currentStep / 4));
			}
			nextPlayTime += stepTime;
			currentStep = (currentStep + 1) % 16;
		}
	}

	intervalId = setInterval(scheduler, 25);
}

export function stopBeat() {
	isPlaying = false;
	if (intervalId) {
		clearInterval(intervalId);
		intervalId = null;
	}
	activeNodes.forEach(node => {
		try {
			node.stop();
		} catch (e) {}
	});
	activeNodes = [];
}

// Low-level synthesizers for drums and synths
function createOscillator(type, freq, duration, gainStart, time) {
	if (!audioCtx) return;
	const osc = audioCtx.createOscillator();
	const gainNode = audioCtx.createGain();

	osc.type = type;
	osc.frequency.setValueAtTime(freq, time);
	
	gainNode.gain.setValueAtTime(gainStart, time);
	gainNode.gain.exponentialRampToValueAtTime(0.001, time + duration);

	osc.connect(gainNode);
	gainNode.connect(audioCtx.destination);

	osc.start(time);
	osc.stop(time + duration);
	activeNodes.push(osc);
}

function playStep(type, step, time, isChorus) {
	if (type === "brega") {
		// Brega Funk Syncopated Beat (130 BPM)
		// Kick: step 0, 8
		// Snare (double bounce): step 3, 6, 11, 14 (classic brega rhythm)
		if (step === 0 || step === 8) {
			// Synth Kick
			createOscillator("sine", 120, 0.15, 0.6, time);
			// Frequency sweep for kick drum
			const sweepOsc = audioCtx.createOscillator();
			const sweepGain = audioCtx.createGain();
			sweepOsc.frequency.setValueAtTime(150, time);
			sweepOsc.frequency.exponentialRampToValueAtTime(40, time + 0.1);
			sweepGain.gain.setValueAtTime(0.5, time);
			sweepGain.gain.linearRampToValueAtTime(0.001, time + 0.1);
			sweepOsc.connect(sweepGain);
			sweepGain.connect(audioCtx.destination);
			sweepOsc.start(time);
			sweepOsc.stop(time + 0.1);
			activeNodes.push(sweepOsc);
		}
		
		if (step === 3 || step === 6 || step === 11 || step === 14) {
			// Snare / Rimshot bounce
			createOscillator("triangle", 600, 0.08, 0.4, time);
			// White noise burst for snare sizzle
			try {
				const bufferSize = audioCtx.sampleRate * 0.05;
				const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
				const data = buffer.getChannelData(0);
				for (let i = 0; i < bufferSize; i++) {
					data[i] = Math.random() * 2 - 1;
				}
				const noise = audioCtx.createBufferSource();
				noise.buffer = buffer;
				const noiseGain = audioCtx.createGain();
				noiseGain.gain.setValueAtTime(0.15, time);
				noiseGain.gain.exponentialRampToValueAtTime(0.001, time + 0.05);
				noise.connect(noiseGain);
				noiseGain.connect(audioCtx.destination);
				noise.start(time);
				noise.stop(time + 0.05);
				activeNodes.push(noise);
			} catch (e) {}
		}

		// Melodic/Synth element during Chorus
		if (isChorus) {
			// Play a nice bright chord step in sync
			if (step === 0) {
				createOscillator("sawtooth", 261.63, 0.3, 0.25, time); // C4
				createOscillator("sawtooth", 329.63, 0.3, 0.2, time);  // E4
				createOscillator("sawtooth", 392.00, 0.3, 0.2, time);  // G4
			} else if (step === 8) {
				createOscillator("sawtooth", 293.66, 0.3, 0.25, time); // D4
				createOscillator("sawtooth", 349.23, 0.3, 0.2, time);  // F4
				createOscillator("sawtooth", 440.00, 0.3, 0.2, time);  // A4
			}
		} else {
			// Intro: soft high hat to keep tempo
			if (step % 2 === 0) {
				createOscillator("triangle", 10000, 0.02, 0.08, time);
			}
		}

	} else {
		// Pop/Funk RJ-SP Beat (90 BPM) - Slow, regular introduction beat
		// Kick: step 0, 8
		// Snare: step 4, 12
		// Hi-hat: step 2, 6, 10, 14
		if (step === 0 || step === 8) {
			createOscillator("sine", 80, 0.2, 0.5, time);
		}
		if (step === 4 || step === 12) {
			createOscillator("triangle", 220, 0.15, 0.3, time);
		}
		if (step === 2 || step === 6 || step === 10 || step === 14) {
			createOscillator("sine", 8000, 0.03, 0.08, time);
		}
		
		// Intro pad chord (slow and simple, representing the slow buildup)
		if (step === 0) {
			createOscillator("sine", 196.00, 1.5, 0.15, time); // G3
			createOscillator("sine", 246.94, 1.5, 0.12, time); // B3
		}
	}
}
