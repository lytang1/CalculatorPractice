/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window')
type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props)
    this.state = {
      screen: 0, operantA:0, operantB:0, operator:'',
      result: 0
    }
    // this.plusData = this.plusData.bind(this)
  }
  buttonHandler(data){
    const {screen, operantA, operantB, operator, result} = this.state;
    let screenData = screen, operant_A = operantA, operant_B = operantB, newOperator =  operator;
    if(data != 'X' && data != '/' && data!= '+' && data != '-'&& data!='='&& data !='AC'){
        screenData = screenData * 10 + data;
      if(operator == ''){
        operant_A = screenData
      }else{
        operant_B = screenData
      }
    }else{
      screenData = operant_B;
      if(newOperator != ''){
        switch(newOperator){
          case '+': operant_A = this.plusData(); operant_B =0; screenData = operant_B;newOperator=data; break;
          case '-': operant_A = this.minusData(); operant_B =0; screenData = operant_B;newOperator=data; break;
          case 'X': operant_A = this.multiplyData(); operant_B =0; screenData = operant_B;newOperator=data; break;
          case '/': operant_A = this.divideData(); operant_B =0; screenData = operant_B;newOperator=data; break;
          case '=': newOperator='';operant_A = operant_B; operant_B= 0; screenData=0;this.setState({result:0});
                    break;
          case 'AC': operant_A = 0; operant_B= 0; screenData=0; newOperator='';this.setState({result:0});break;
        }
      }else{
        newOperator = data;
      }
    }
    this.setState({screen: screenData, operantA: operant_A, operantB: operant_B, operator:newOperator})
  }

  multiplyData(){
    const {operantA, operantB} = this.state;
    let result = 0;
    result = operantA * operantB
    this.setState({ operantB:0, operantA:result, result:result, screen: 0 })
    return Number(result)
  }

  divideData(){
    const {operantA, operantB} = this.state;
    let result = 0;
    result = operantA / operantB
    this.setState({ operantB:0, operantA:result, result:result, screen: 0 })
    return Number(result)
  }

  

  minusData(){
    const {operantA, operantB} = this.state;
    let result = 0;
    result = operantA - operantB
    this.setState({ operantB:0, operantA:result, result:result, screen: 0 })
    return Number(result)
  }
  

  plusData(){
    const {operantA, operantB} = this.state;
    let result = 0;
    result = operantA + operantB
    this.setState({ operantB:0, operantA:result, result:result, screen: 0 })
    return Number(result)
  }
  render() {
    // alert(this.state.operantA)
    return (
      <View style={styles.container}>
        <View style={styles.screenContainer}>
          {this.state.result?<Text style={[styles.screenData,{fontSize:40}]}>{this.state.result}</Text>:null}
          <Text style={styles.screenData}>{this.state.screen}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={()=>this.buttonHandler(7)}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>this.buttonHandler(8)}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>this.buttonHandler(9)}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>this.buttonHandler('X')}>
            <Text style={styles.buttonText}>X</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={()=>this.buttonHandler(4)}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>this.buttonHandler(5)}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>this.buttonHandler(6)}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>this.buttonHandler('/')}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={()=>this.buttonHandler(1)}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>this.buttonHandler(2)}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>this.buttonHandler(3)}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>this.buttonHandler('+')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={()=>this.buttonHandler('AC')}>
            <Text style={styles.buttonText}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>this.buttonHandler(0)}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>this.buttonHandler("=")}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>this.buttonHandler('-')}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  screenContainer: {
    height:100,
    width: '100%',
    borderWidth: 1
  },
  screenData: {
    fontSize: 25,
    textAlign: 'right',
    textAlignVertical: 'bottom',
    width:'100%',
    height:'50%'
  },
  buttonContainer:{
    flex:8,
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  button:{
    borderWidth: 1,
    width: width /4,
    height: height /5,
  },
  buttonText:{
    width:'100%',
    height:'100%',
    fontSize: 50,
    textAlign: 'center',
    textAlignVertical: 'center' 
  }
});
