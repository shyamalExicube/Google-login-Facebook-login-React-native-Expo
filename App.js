import React from 'react';
import { StyleSheet, Text, View,TextInput,Image, TouchableOpacity } from 'react-native';
import Component1 from './Components/Component1';
import Component2 from './Components/Component2';
import PasswordInputText from 'react-native-hide-show-password-input';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name:'apu',
     password:'', 
    };
  }
    toggleDisplay() {
      this.setState({ passwordDisplayed: !this.state.passwordDisplayed })
    }

 
  click(){
    alert("you have clicked");
  }
  // signInWithGoogleAsync = async () => {

  //   try {
  //     const result = await Expo.Google.logInAsync({
  //       androidClientId: '358320895461-tv0q4ofgddvs75fkn6n36ii8v2a0887d.apps.googleusercontent.com',
  //       scopes: ['profile','email'],
  //     })

  //     if (result.type === 'success') {
  //       return result
  //     }
  //     return { cancelled: true }
  //   } catch (e) {
  //     return { error: e }
  //   }
  //   console.log(result);
  // }
  // onLoginPress = async () => {
  //   const result = await this.signInWithGoogleAsync()
  //   console.log(result);
 
      async facebookSignin() {
      const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('157294281606521', {
          permissions: ['public_profile'],
        });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}`);
          console.log("hi");
          console.log(token);
          console.log("hi");
          console.log("hello");
          console.log(response);
          console.log("hello");
        // Alert.alert(
        //   'Logged in!',
        //   `Hi ${(await response.json())}!`,
        // );
      }
    }

  
  render() {
    return (
   
      // <Component1  onPress={()=>{this.click()}}>
      //      click here
      // </Component1>
          // <Component2  onPress={()=>{this.setState({name:'shyamal'})}}>
          // {this.state.name}
          //  </Component2>
      // <Component2 message='click me' onPress={()=>{this.click()}}></Component2>
      // <Component2>onchangeText={this.setState({name:'shyamal'})}</Component2>
      // <Component2 onchangeText={()=>{this.setState({name:'shyamal'})}}></Component2>
    
    
      // Password input field where password will not be shown
      // <View style={{margin: 20}}>
      //           <PasswordInputText
      //               value={this.state.password}
      //               onChangeText={ (password) =>this.setState({ password}) }
                
      //           />
      //  </View>
      // <TouchableOpacity onPress={this.onLoginPress} style={{top:40,alignSelf:'center',borderWidth:3,borderRadius:5,borderColor:'#D94628',height:50,width:150,flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:'#D94628'}}>
      //         <View>
      //               <Text style={{color:'#fff',fontSize:30}} >g+</Text>
      //         </View>
      // </TouchableOpacity>
        <TouchableOpacity onPress={this.facebookSignin} style={{top:40,alignSelf:'center',borderWidth:3,borderRadius:5,borderColor:'#2B60BD',height:50,width:150,flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:'#2B60BD'}}>
        <View>
              <Text style={{color:'#fff',fontSize:50}} >f</Text>
        </View>
</TouchableOpacity>
      


    );
  }
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
