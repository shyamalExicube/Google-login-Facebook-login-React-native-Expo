import React from 'react';
import {Text, View} from 'react-native'; 


const Component2=({children,message,onPress})=>{
    const {buttonColor,buttonStyle}=styles;
      
    return(
        //   <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <View style={{top:30}}>
            <Text onPress={onPress} >{children}</Text>
        </View>
        //   </TouchableOpacity>
        
      );
}
const styles={
    buttonStyle:{
        top:30,
        alignSelf:'center',
         backgroundColor:'#4285F4',
        borderRadius:8,
        height:50,
        width:90,
        borderWidth:1,
        // borderColor:'#007aff',
        //flexDirection:'row',height:50,width:100,alignSelf:'center',backgroundColor:'#4285F4',marginBottom:5,borderRadius:8,
        marginLeft:10,
        marginRight:5
    }
}

export default Component2;