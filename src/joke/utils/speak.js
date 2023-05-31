const synth = window.speechSynthesis;

export const speak = (text, voice) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = synth.getVoices()[voice];
    utterance.pitch = 1;
    utterance.rate = 1;
    synth.speak(utterance);
};