import React,{Component} from 'react'
import {View,Text} from 'react-native'
import {connect} from 'react-redux'

import {
  Spinner, Footer
} from 'native-base';

class IsPaid extends Component{
  render(){
    if(this.props.transaction.is_paid == true){
      return(
        <View style={{flex:1,backgroundColor: '#000000',justifyContent: 'center',alignContent: 'center',alignItems: 'center',}}>
          <Text style={{color:'white',fontSize:25,textAlign:'center'}}>Please bring the device to the cashier</Text>
          <Text style={{color:'white',fontSize:25,marginTop:20,}}>${this.props.transaction.total}</Text>
          <Text style={{color:'white',fontSize:25,marginTop:20}}>thank you</Text>
          
        </View>
        
      )
    }else{
      return(

     
        <View style={{flex:1,backgroundColor: '#000000',justifyContent: 'center',alignContent: 'center',alignItems: 'center',}}>
          <Text>there is something error</Text>
        </View>
      )
    }
    
  }
}
const mapStateToProps = state => {
  return {
    transaction : state.transaction
  }
}
export default connect(mapStateToProps,null)(IsPaid)
