import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import logoprata from './components/imagem/logoprata.png';
import logoscalla from './components/imagem/logoscalla.png';
import logounesp from './components/imagem/logounesp.png'; 
import seta from './components/imagem/seta.png';
import familia from './components/imagem/familia.jpg';
import email from './components/imagem/email.png';
import endereco from './components/imagem/endereco.png'; 


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={familia} 
          nome="Leandro Pereira de Jesus" 
          descricao="Oi, eu sou o Leandro. Trabalho atualmente como oficial administrativo no Hospital das clinicas (Unesp). Minha função é abrir atendimentos para todos os pacientes no setor de raio-x. Também sou formado em produção industrial pela Fatec Botucatu"
        />
        
        <ImagemButton 
          imagem={seta}
          texto="Ver mais"
        />
      </div>

      <div>
        <CardPequeno
        img={email}
        email="E-mail: Le0406@hotmail.com"
        />
      </div>

      <div>
        <CardPequeno
        img={endereco}
        endereco="Rua: Pedro Donini número 616"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={logounesp}
          nome="Unesp Botucatu" 
          descricao="Hospital escola" 
        />
        
        <CardGrande 
          imagem={logoscalla}
          nome="Scalla Serviços" 
          descricao="Prestação de serviços de segurança" 
        />

        <CardGrande 
          imagem={logoprata}
          descricao="Transporte Rodoviário" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
