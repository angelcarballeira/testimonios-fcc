import './App.css';
import { Testimony } from './components/Testimony';

function App() {
  return (
    <div className='App'>
      <div className='main-container'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp</h1>
        <Testimony
          name='Jose Lopez'
          country='Chile'
          image='jose'
          position='Ingeniero de software'
          company='Spotify'
          testimony='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.'
        />

        <Testimony
          name='Julieta Suarez'
          country='Peru'
          image='julieta'
          position='Desarrolladora'
          company='Uber'
          testimony='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.'
        />

        <Testimony
          name='Maria Escudero'
          country='Argentina'
          image='maria'
          position='CEO'
          company='Paicor'
          testimony='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.'
        />
      </div>
    </div>
  );
}

export default App;
