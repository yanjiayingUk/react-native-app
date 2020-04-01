import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  AsyncStorage,
  Alert,
  TouchableOpacity
} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import { myFetch } from '../utils';
import Button from 'react-native-button';
export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      pwd: '',
      isloading: false,
      pwd2: ''
    }
  }
  userhandle = (text) => {
    this.setState({ username: text })
  }
  pwdhandle = (text) => {
    this.setState({ pwd: text })
  }
  pwdhandle2 = (text) => {
    this.setState({ pwd2: text })
  }
  register = () => {
      if (this.state.pwd != this.state.pwd2) {
        Alert.alert('密码不一致');
      }
      else {
        this.setState({ isloading: true })

        myFetch.post('/login', {
          username: this.state.username,
          pwd: this.state.pwd
        }
        ).then(res => {
          console.log(res);
          if (res.data.num == '1') {
            Alert.alert('该账户已存在');
          }
          else if (res.data.num == '2') {
            Alert.alert('连接错误');
          }
          else {
            AsyncStorage.setItem('user', JSON.stringify(res.data))
              .then(() => {
                this.setState({ isloading: false })
                Actions.homePage();
              })
          }
        })
      }
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View
          style={{ alignItems: 'center' }}>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Icon name="user" color="red" />
            <TextInput placeholder="用户名"
              onChangeText={this.userhandle}
            // onEndEditing={()=>{Alert.alert('aaaa')}}
            />
          </View>

          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Icon name="eye" color="red" />
            <TextInput
              onChangeText={this.pwdhandle}
              placeholder="密码"
              secureTextEntry={true}
            />
          </View>

          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Icon name="eye" color="red" />
            <TextInput
              onChangeText={this.pwdhandle}
              placeholder="确认密码"
              secureTextEntry={true}
            />
          </View>

          <TouchableOpacity
            style={{
              width: '80%',
              height: 40,
              backgroundColor: '#ccc',
              marginTop: 30,
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onPress={this.register}>
            <Text>注册</Text>
          </TouchableOpacity>
          <Button onPress={() => Actions.login()}>返回登录</Button>
        </View>
        {
          this.state.isloading
            ?<View><Text style={{textAlign:'center',marginTop:50}}>Loading......</Text></View>
            : null
        }

      </View>

    );
  }
}