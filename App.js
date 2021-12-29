import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
  } from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./src/biblia.png'),
    };

    this.bibliaAberta = this.bibliaAberta.bind(this);

    this.frases = [
      `Nisto todos conhecerão que sois meus discípulos, se vos
amardes uns aos outros.(João 13:35)`,
`Porque não temos um sumo sacerdote que não possa
compadecer-se das nossas fraquezas; porém um que, como nós,
em tudo foi tentado, mas sem pecado. (Hebreus 4:15)`,
`Porque os meus pensamentos não são os vossos
pensamentos, nem os vossos caminhos, os meus caminhos, diz o
Senhor. (Isaías 55:8)`,
`Assim resplandeça a vossa luz diante dos homens, para que
vejam as vossas boas obras e glorifiquem o vosso Pai, que está
nos céus.” (Mateus 5:16)`,
`É como o óleo precioso sobre a cabeça, que desce sobre a
barba, a barba de Arão, e que desce à orla das suas vestes.”
(Salmos 133:2)`,
`E Jesus disse-lhe: Amarás o Senhor, teu Deus, de todo o teu
coração, e de toda a tua alma, e de todo o teu pensamento.”
(Mateus 22:37)`,
`E, tudo quanto fizerdes, fazei-o de todo o coração, como ao
Senhor e não aos homens,” (Colossenses 3:23)`,
`E, chegando-se Jesus, falou-lhes, dizendo: É-me dado todo o
poder no céu e na terra.” (Mateus 28:18)`,
`Não se aparte da tua boca o livro desta Lei; antes, medita
nele dia e noite, para que tenhas cuidado de fazer conforme tudo
quanto nele está escrito; porque, então, farás prosperar o teu
caminho e, então, prudentemente te conduzirás.” (Josué 1:8)`,
`levando ele mesmo em seu corpo os nossos pecados sobre
o madeiro, para que, mortos para os pecados, pudéssemos viver
para a justiça; e pelas suas feridas fostes sarados.” (1 Pedro 2:24)`,
`Tu conservarás em paz aquele cuja mente está firme em ti;
porque ele confia em ti.” (Isaías 26:3)`,
`E em nenhum outro há salvação, porque também debaixo
do céu nenhum outro nome há, dado entre os homens, pelo qual
devamos ser salvos.” (Atos 4:12)`,
`Porque Deus enviou o seu Filho ao mundo não para que
condenasse o mundo, mas para que o mundo fosse salvo por ele.”
(João 3:17)`,
`Deleita-te também no Senhor, e ele te concederá o que
deseja o teu coração.” (Salmos 37:4)`,
`Cheguemos, pois, com confiança ao trono da graça, para
que possamos alcançar misericórdia e achar graça, a fim de
sermos ajudados em tempo oportuno.” (Hebreus 4:16)`,
`Como o orvalho do Hermom, que desce sobre os montes de
Sião; porque ali o Senhor ordena a bênção e a vida para sempre.”
(Salmos 133:3)`,
`Tendo por certo isto mesmo: que aquele que em vós
começou a boa obra a aperfeiçoará até ao Dia de Jesus Cristo.”
(Filipenses 1:6)`,
`pelas quais ele nos tem dado grandíssimas e preciosas
promessas, para que por elas fiqueis participantes da natureza
divina, havendo escapado da corrupção, que, pela
concupiscência, há no mundo,” (2 Pedro 1:4)`,
`não deixando a nossa congregação, como é costume de
alguns; antes, admoestando-nos uns aos outros; e tanto mais
quanto vedes que se vai aproximando aquele Dia.” (Hebreus
10:25)`,
`nem a altura, nem a profundidade, nem alguma outra
criatura nos poderá separar do amor de Deus, que está em Cristo
Jesus, nosso Senhor!” (Romanos 8:39)`,
`Porque estou certo de que nem a morte, nem a vida, nem os
anjos, nem os principados, nem as potestades, nem o presente,
nem o porvir,” (Romanos 8:38)`,
`sabendo que a prova da vossa fé produz a paciência.”
(Tiago 1:3)`,
`Bem-aventurado o varão que sofre a tentação; porque,
quando for provado, receberá a coroa da vida, a qual o Senhor
tem prometido aos que o amam.” (Tiago 1:12)`,
`Mas a todos quantos o receberam deu-lhes o poder de
serem feitos filhos de Deus: aos que creem no seu nome,” (João
1:12)`,
`De sorte que a fé é pelo ouvir, e o ouvir pela palavra de
Deus.” (Romanos 10:17)`,
`Ele te declarou, ó homem, o que é bom; e que é o que o
Senhor pede de ti, senão que pratiques a justiça, e ames a
beneficência, e andes humildemente com o teu Deus?” (Miquéias
6:8)`,
`Ninguém tem maior amor do que este: de dar alguém a sua
vida pelos seus amigos.” (João 15:13)`,    
    
    ];

  }

  bibliaAberta(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length );

    this.setState({
      textoFrase: ' "' + this.frases[numeroAleatorio] + '" ',
      img: require('./src/bibliaAberta.png')
    });
  
  }


  render(){
    return(
      <View style={styles.container} > 
      
      <Image
        source={this.state.img}
        style={styles.img}
      />

      <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

      <TouchableOpacity style={styles.botao} onPress={this.bibliaAberta}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Frase do Dia</Text>
        </View>
      </TouchableOpacity>  

      </View>    
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#138028'
  },
  img:{
    width: 250,
    height: 250,
  },
  textoFrase:{
    fontSize: 15,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
    backgroundColor:'#8cdcea'
  },
  btnArea:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
});

export default App;