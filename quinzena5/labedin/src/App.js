import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import  CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://observatoriog.bol.uol.com.br/wordpress/wp-content/uploads/2019/08/53f50d45-c285-4700-b5d3-8f19ca3b7471-9d69417b-3db5-41e9-96b1-7dd286dbd000.jpg" 
          nome="Madonna" 
          descricao="Oi, eu sou a Madonna. Sou um ícone e marquei a história do pop para sempre."
        />
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div className="page-section-container">
        <CardPequeno 
            imagem1="https://icon-asset.com/wp-content/uploads/email-icon-png-black-and-white-and-this-free-icons-png-design-of-mail-icon-png-download.png"
            imagem2="https://w7.pngwing.com/pngs/959/926/png-transparent-location-icon-computer-icons-location-google-maps-location-angle-map-symbol.png"
            email="madonna.yourock@gmail.com"
            endereco="Beverly Hills, LA"
          />
      </div>  
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://images-na.ssl-images-amazon.com/images/I/71mXumVELfL._AC_SL1425_.jpg"
          nome="Like a Virgem" 
          descricao="Lançado em 1984, foi o segundo álbum da cantora e carrega traços dos estilos new wave e dance-pop." 
        />
        
        <CardGrande 
          imagem="https://upload.wikimedia.org/wikipedia/pt/0/08/Madonna_-_Like_a_Prayer_album.png" 
          nome="Like a Prayer" 
          descricao="Lançado em 1989, esse álbum traz elementos do funk, gospel, soul e da dance music. O álbum contou com a participação do Prince O:" 
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
