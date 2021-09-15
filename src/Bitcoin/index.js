import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

import api from '../services/api';


class Bitcoin extends Component{
 constructor(){
     super();

    //Criando as variaveis de estado
    this.state = {
        vbitcoin: 0
    }

    this.consultaPrecoBitcoin = this.consultaPrecoBitcoin.bind(this);

 }

 async componentDidMount(){
    const response = await api.get('ticker');
    let valor = response.data.BRL['buy'];
    this.setState({
        vbitcoin : valor
    });

 }


//Função que atualiza o valor
async consultaPrecoBitcoin() {
    const response = await api.get('ticker');
    let valor = response.data.BRL['buy'];
    this.setState({
        vbitcoin : valor
    });

    alert("O Valor foi Atualizado!");

}


 render(){
     return(
         <View style={styles.container}>

             <Image
                 source={require('../../assets/bitcoin.png')}
                 style={{width:450, height:169}}
                 resizeMode='center'
             />

             <Text style={styles.textoBitcoin}>R$ {this.state.vbitcoin}</Text>

            <TouchableOpacity style={styles.botao} onPress={this.consultaPrecoBitcoin}>
                <Text style={styles.textoBotao}>Atualizar</Text>
            </TouchableOpacity>

         </View>
     );
 }

} //Fecha a classe Bitcoin

export default Bitcoin;

const style = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: "#FFF",
        alignItems: 'center',
        justifyContent:'center'
    },

    textoBitcoin:{
        fontSize:32,
        color:'#363636'
    },

    botao:{
        backgroundColor: '#FFa500',
        marginTop:50,
        width:300,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50   
    },

    textoBotao:{
        fontSize:32,
        color:'#FFF'
    }

})