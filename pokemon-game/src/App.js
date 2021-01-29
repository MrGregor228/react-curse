import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header/index.js';
import Layout from './components/Layout/index.js';
import Footer from './components/Footer/index.js';

import bg1 from './components/Layout/images/bg1.jpg';
import bg3 from './components/Layout/images/bg3.jpg';


const App = () => {
  return (
    <>     
      <Header title="This is title" description="This is Description!" />
      <Layout urlBg={bg1} title="Title of 1-st section" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat quas saepe aspernatur, iste facilis enim officia laborum, debitis eius pariatur exercitationem neque. Quisquam natus nobis illum eos ipsum quis hic."/>
      <Layout colorBg="#fff" title="Title of 2-ond section" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat quas saepe aspernatur, iste facilis enim officia laborum, debitis eius pariatur exercitationem neque. Quisquam natus nobis illum eos ipsum quis hic." />
      <Layout urlBg={bg3} title="Title of 3-rd section" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat quas saepe aspernatur, iste facilis enim officia laborum, debitis eius pariatur exercitationem neque. Quisquam natus nobis illum eos ipsum quis hic." />
      <Footer />
    </>
  );
}
const el = <App />;

ReactDOM.render(el, document.getElementById('root'));
export default App;