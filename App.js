import React, { Component } from 'react';
import { Platform, Text, View, Button, Picker } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import Icons from "react-native-vector-icons/FontAwesome";

export default class myApp extends Component {
  constructor(){
    super();
    this.state={
      PickerValue: ''
    }

    }

    clickme=()=>{
      const data = this.state.PickerValue;
      if(data==""){
        alert("Please Select a Option");
      }else{
      alert(data);
      }
    }
 render() {
   return ( 
     <View style={{flex:1}}>
       <View style={{backgroundColor: '#2369b3', marginTop: 20, paddingBottom: 0.1, alignItems: "left", padding: 15, paddingTop: 25, flex: 0.3}}>
       <Text style= {{color: 'white', fontSize: 40, fontFamily: "inherit", fontWeight: "bold"}}>Portal da Transparência</Text>
       <Text style={{fontSize:20, color: "white" }}>Controladoria-Geral da União</Text>
       </View>

       <View style={{backgroundColor: '#0E4097', flex: 0.05}}>
       </View>

      
       <View style={{backgroundColor: '#DCDCDC', flex: 1}}>
       <Text style={{fontSize:18, marginTop: 10, marginLeft: 12}}>Escolha o orgão:</Text> 
        <View style={{backgroundColor: 'white', flex: 0.9, margin: 10, borderRadius: 20, marginTop:12, marginBottom: 10}}>
    <Picker
    style={{width:'80%'}}
    selectedValue={this.state.PickerValue}
    onValueChange={(itemValue,itemIndex) => this.setState({PickerValue:itemValue})}
    >
    <Picker.Item label="Select a option" value=""/>
    <Picker.Item label="Html" value="html" />
    <Picker.Item label="Javascript" value="javascript"/>
    </Picker>
    

     
    <Button title="Buscar" onPress={this.clickme}/>
    

            <View style={{alignItems:"space-around", marginRight:12, marginTop:270}}>
              <Button title='PESQUISAR' onPress={()=>alert("Pesquisando")}/> 
            </View>
        </View>
       </View>


      <View style={{ flexDirection: "row", alignItems:"flex-center", padding: 10, justifyContent: 'flex-end'}}>
        
        <Icon name="facebook-square" size={30}/>
        <Icon name="twitter" size={30}/>
        <Icon name="instagram" size={30}/>
        <Icons name="whatsapp" size={30}/>
      </View> 

      <View style={{backgroundColor: '#0E4097', flex: 0.07}}>
        <Text style={{color: 'white', fontSize:16}}> Desenvolvido por Scrumteam</Text>
      </View>
      
     </View>
   );
 }
}