import React, {useState} from 'react';
import VoiceSelector from "./components/VoiceSelector";
import {speak} from "./utils/speak";
import {getJoke} from "./api/joke";
import "./index.css";
import {useKeyDown} from "./hooks/useKeyDown";

const Index = () => {
    const [selectedVoice, setSelectedVoice] = useState(147);
    const [joke, setJoke] = useState(null);
    const [loading, setLoading] = useState(false);

    const tellMeAJoke = async () => {
        setLoading(true);
        const joke = await getJoke();
        setJoke(joke);
        speak(`${joke.setup} ${joke.punchline} ja ja ja`, selectedVoice);
        setLoading(false);
    }

    useKeyDown(() => tellMeAJoke(), ['j']);

    return (
        <div className='center'>
            <img src={require('./robot.gif')} alt='robot' />
            <VoiceSelector selected={selectedVoice} setSelected={setSelectedVoice} />
            {!!joke && <div><p>{joke.setup}</p><p>{joke.punchline}</p></div>}
            {loading ? <p>Loading...</p> : <button onClick={tellMeAJoke}>Tell me a joke!</button>}
        </div>
    );
};

export default Index;