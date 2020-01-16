import React, { useState } from 'react';
import './global.css'
import './App.css'
import './Sidebar.css'

// Componente: bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação.
// Propriedade: como se fosse os atributos do HTML. Informações que o componente PAI passa para o componente FILHO
// Estado: Informações mantidas pelo componente (Lembrar: imutabilidade)
// minuto 59

function App() {

  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1)
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>

      </main>
    </div>
  );
}

export default App;
