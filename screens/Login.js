import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button } from 'react-native';
import { connect } from 'react-redux'
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import { compose } from 'redux'
import css from 'css-to-react-native-transform'

class Pacientes extends React.Component {
    state = {
        correo: "xhpedro@hotmail.com",
        contrasena: "xmbx7EkE",
        usuario: null
    }
    onChangeText = (text) => {
        this.setState({id: text})
    }
    onSubmit = () =>{         
        const existe = this.props.array.filter((p)=> p["Correo"] === this.state.correo && p["Contrasena"] === this.state.contrasena)
        existe.length ? this.setState({ExistePaciente:true, usuario: existe[0]}) : this.setState({ExistePaciente:false})
    }
    render(){    
        if(!this.props.cargando){
            if(this.state.ExistePaciente){
                return (
                    <ScrollView styles={{flex:1}}>
                        <Text style={styles.h1}>Informacion Paciente</Text>
                        <Button styles={styles.cerrar}
                        title="Cerrar Sesion"
                        onPress={() => this.setState({ExistePaciente:false})}
                        />
                        {Object.keys(this.state.usuario).filter((b)=>b !== "Historial de Medicamentos").map((p, i)=>{
                            return (
                                <View style={styles.Container} key={i}>
                                    <Text style={styles.Titulo}>{p}</Text>
                                    <Text style={styles.Informacion}>{this.state.usuario[p]}</Text>
                                </View>
                            )
                        })}
                    </ScrollView>
                )
            }else{
                return(
                    <View style={{paddingLeft:50, paddingRight: 50, paddingTop:300}}>
                        <Text style={{fontSize:25, color: "#b1a7ff"}}>Inicia Sesion</Text>
                    <TextInput
                        style={{ height: 40, borderColor: '#b4cfff', borderWidth: 1, margin:5}}
                        onChangeText={text => this.onChangeText(this.setState({...this.state, correo: text}))}
                        value={this.state.correo}
                        />
                        <TextInput
                            style={{ height: 40, borderColor: '#b4cfff', borderWidth: 1, margin:5}}
                            secureTextEntry={true}
                            onChangeText={text => this.onChangeText(this.setState({...this.state, contrasena: text}))}
                            value={this.state.contrasena}
                            />
                        <Button
                        title="Entrar"
                        onPress={() => this.onSubmit()}
                        />
                        {this.state.ExistePaciente === false ? <Text>La contrasena o Correo es Incorrecto</Text>: <Text></Text>}
                    </View>
                )
            }
        }else{
            return <Text>Faild</Text>
        }
        
    }
}

const styles = StyleSheet.create(css(
    `
    .Container {
        padding: 10px 43px;
        border-bottom-width: 1px;
        border-bottom-color: #b4cfff;
    }
    .Titulo {
        font-size: 18px;
        color: #777bff;
        font-weight: bold;
    }
    .Informacion {
        color: #b1a7ff;
    }
    .h1 {    
    color: #ff8c8c;
        font-family: sans-serif;
        font-weight: 400;
        text-align: center;
        margin: 30px 0px;
        font-size:35px;
        }
    .cerrar{
        margin: 30px 0px;
    }
    `
));


const cargando = (dato, valor) => {
    if(isLoaded(dato)){
        return dato ? dato : valor
    }else{
        return false
    } 
}

const mapStateToProps = (state) => {
    const pacientes = cargando(state.firestore.data["Pacientes"], {})
    const array = cargando(state.firestore.ordered["Pacientes"], {})
    if(pacientes){
        return {
            paciente: pacientes,
            array: array,
            cargando: false
        }
    }else{
        return {
            cargando: true
        }
    } 
}

export default compose(
    connect(mapStateToProps, null),
    firestoreConnect([
        {collection: 'Pacientes'},
    ])
)(Pacientes)
