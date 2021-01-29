import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './components/Header/index';
import Layout from './components/Layout/index';
import Footer from './components/Footer/index';
import PokemonCards from './components/PokemonCards/index';


import bg1 from './components/Layout/images/bg1.jpg';
import bg3 from './components/Layout/images/bg3.jpg';
import PokemonCard from './components/PokemonCards';
const POKEMONS = require('./components/PokemonCards/db.json');

const App = () => {
  return (
    <>     
      <Header title="This is title" description="This is Description!" />
      <Layout urlBg={bg1} title="Title of 1-st section">
        <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.</p>
        <p>Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
      </Layout>

      <Layout colorBg="#fff" title="Title of 2-ond section">
        <p>To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead. </p>
        <div className="style_title__2K3Al">
          <h3>Cards</h3>
          <span className="style_separator__3kqS5"></span>
        </div>
        <div className="flex">          
          {
            POKEMONS.map((item) => <PokemonCard key={item.id} {...item} /> )
          }
        </div>
      </Layout>

      <Layout urlBg={bg3} title="Title of 3-rd section">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo est </p>
      </Layout>
      <Footer />
    </>
  );
}
const el = <App />;

ReactDOM.render(el, document.getElementById('root'));
export default App;