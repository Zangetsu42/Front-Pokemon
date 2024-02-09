import * as React from 'react';
import { Button } from '@mui/material';
import './App.css';

function App() {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Ajout de la série de boutons avec des styles */}
        <div
          style={{
            
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            
          }}
        >
          <Button
            variant="contained"
            style={{
              height: '40px',
              
              marginLeft: '43%', // Décalage vers la gauche
              marginRight: '10px', // Décalage vers la gauche
              backgroundColor: 'blue',
              color: 'white',
            }}
          >
            Créer
          </Button><div/>

          <div>
          <img
            src={process.env.PUBLIC_URL + '/asset/image/pokeball.png'}  // Chemin relatif vers l'image
            alt="Pokeball"
            style={{ marginTop: '10px', width: '100px', height: '100px' }}
          />
          </div>
              
          <div>
          <Button
            variant="contained"
            style={{
              height: '40px',
              marginRight: '30%', // Décalage vers la droite
              backgroundColor: 'red',
              color: 'white',
              marginLeft: '10px',
            }}
          >
            Regarder
          </Button>
          </div>

            <div>
            <img

              src={process.env.PUBLIC_URL + '/asset/image/ghetis.png'}  // Chemin relatif vers l'image
              alt="Ghetis"
              style={{  position: 'fixed',
                bottom: '0',
                right: '0', width: '750px', height: '600px' }}
            />

            </div>
            <div>
            <img

              src={process.env.PUBLIC_URL + '/asset/image/tortank.png'}  // Chemin relatif vers l'image
              alt="Tortank"
              style={{  position: 'fixed',
                bottom: '0',
                left: '0', width: '600px', height: '550px' }}
            />

            </div>

        </div>
      </header>
    </div>
  );
}

export default App;