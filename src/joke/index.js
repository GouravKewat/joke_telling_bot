import React, { useState } from 'react';
// import VoiceSelector from './Components/VoiceSelector'
import { speak } from './Utils/speak';
import { getJoke } from './Api/joke'; // for joke Api 
import "./App.css";
import { useKeyDown } from './Hooks/useKeyDown'

const App = () => {
  const [selectedVoice, setSelectedVoice] = useState(147);
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);


  const tellMeAJoke = async () => {
    setLoading(true);
    const joke = await getJoke();


    setJoke(joke);
    speak(`${joke.setup} ${joke.punchline} Ha Ha Ha`, selectedVoice);
    setLoading(false);

  }

  useKeyDown(() => tellMeAJoke(), ['j']);
  return (
    <>

      <h1 className='m-1'> Coding Jokes ! ! !</h1>
      <div className='center'>

        <div className='m-1'>
          <p>
            This app will help you to learn new programming jokes.<br />
            Just push the 'J' key on your keyboard or click below button for random coding related jokes!

          </p>
          <h1>        Hi I Am Robot.     </h1>
          <p>push "Tell me a Joke " button and see magic.</p>

        </div>

        <img className='im-1' src={require('./giphy.gif')} alt='robot' />

        {/* <VoiceSelector selected={selectedVoice} setSelected={setSelectedVoice} /> */}

        {!!joke && <div className='joke'><p >{joke.setup}</p><p>{joke.punchline}</p></div>}


        {loading ? <p>Loading...</p> : <button onClick={tellMeAJoke}>Tell me a Joke!</button>}

        <div className='ex-1'>
          <i>
            Made By:  {'gourav kewat '}

          </i>          
          <div>
            <h3>About</h3>
            This project was created as part of the freeCodeCamp curriculum for learning ReactJS.<br
            />I hope you enjoy it!          
          <p>This is build with react ,node, javascript and API.</p>        
            If there are any issues or suggestions please let us know on our github page:<br /><strong
            ><em
              >https://github.com/GouravKewat/joke-telling-bot.git</em></strong>.

          </div>
        </div>
        <p>
          Thank You For Visiting Our Website.
        </p>
        <div>
          Icons made by{" "}<a href="https://www.flaticon.com/authors/    
          smashicons" title="Smashicons"> Smashicons</a>,
          {" "}<a href="https://www.flaticon.com/authors/freepik
          " title="Freepik"> Freepik </a>,
          {" "}<a href="https://www.flaticon.com/authors/iconixar
          " title="Iconixar"> Iconixar </a>,
          {" "}<a
            href="http://pixelkit.com/" title="PixelKit "> PixelKit </a>
          from {" "}
          <a
            href="https://www.flaticon.com/"
            title="Flaticon"> www.flaticon.com</a>

        </div>
        <p>
          Images used in this website have been taken from Pinterest and other websites which may not be owned

        </p>
      </div>
    </>
  );
};

export default App
