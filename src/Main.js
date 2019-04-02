import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import * as actionCreators from '../redux/action/actionCreators'

class Main extends React.Component{

    render(){
        return(
            <View style = {{flex:1, backgroundColor:'blue', justifyContent:'center', alignItems: 'center', flexDirection:'row'}}>
            <Text onPress = {()=> this.props.increase()} style = {{color:'white', fontSize: 25, margin:20}}>+</Text>
            <Text style = {{color:'white', fontSize: 25, margin:20}}>{this.props.myState.value}</Text>
            <Text onPress = {()=> this.props.decrease()} style = {{color:'white', fontSize: 25, margin:20}}>-</Text>
            </View>
        )
    }
}
function mapStateToProps(state){
    return { myState: state.ChangeValue}
}

export default connect(mapStateToProps,actionCreators)(Main);