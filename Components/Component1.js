//import a libraries for making a component
import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';


const Component1 = ({onPress, children,styleImage,sourceImage}) =>{
    const { buttonStyle,textStyle } = styles;
   return (
        // <TouchableOpacity onPress={onPress} style={source} >
        <View>
            <Text>
                {children}
            </Text>  
            <Image
              style={styleImage}
              source={sourceImage}
            /> 
      </View>
        // </TouchableOpacity>
   );

};
const styles = {
    textStyle:{
        alignSelf:'center',
        color:'#fff',
        fontSize:16,
        fontWeight:'600',
        paddingTop:10,
        paddingBottom:10
    },
 
    buttonStyle:{       
        // flex:1,
        top:30,
        alignSelf:'center',
         backgroundColor:'#4285F4',
        borderRadius:8,
        // height:50,
        // width:30,
        // borderWidth:1,
        // borderColor:'#007aff',
        //flexDirection:'row',height:50,width:100,alignSelf:'center',backgroundColor:'#4285F4',marginBottom:5,borderRadius:8,
        marginLeft:5,
        marginRight:5
    }
}
export default Component1;