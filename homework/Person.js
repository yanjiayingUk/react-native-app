import React, { Component } from 'react';
import { Animated, StyleSheet, Text, View, Image, ScrollView, AsyncStorage } from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';
import ImagePicker from 'react-native-image-picker';
import ImageCropPicker from 'react-native-image-crop-picker';


const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    // noData: false,
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

export default class Person extends Component {
    constructor() {
        super();
        let data = [];
        for (var i = 0; i < 10; i++) {
            data.push({ tit: i, key: i });
        }
        this.state = {
            data,
            width: new Animated.Value(20),
            imageUrl: require('../assets/pic/touxiang.png')
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('userimage')
            .then(res => {
                console.log('returnimageUrl:', res)
                if (typeof(res) != undefined) {
                    console.log(typeof(res));
                    res=res.replace(/\"/g,"");
                    this.setState({
                        imageUrl: res
                    },()=>{console.log(this.state.imageUrl)})
                }
            })
    }
    takephoto = () => {
        ImageCropPicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            this.setState({
                imageUrl: { uri: image.path }
            })
            // console.log("imageUrl:" + { uri: image.path })
            AsyncStorage.removeItem('userimage');
            AsyncStorage.setItem('userimage', JSON.stringify({uri:image.path}))
        });

    }
    zoom = () => {
        Animated.timing(this.state.width, {
            toValue: 200,
        }).start()
    }
    exit = () => {
        AsyncStorage.removeItem('user');
        Actions.login()
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.head}>
                    <Button onPress={() => { this.takephoto() }}>
                        <Image source={this.state.imageUrl} style={{ width: 150, height: 150,borderRadius:75 }} />
                    </Button>
                    <Text style={styles.content}>BINNU DHILLON</Text>
                </View>
                <View style={styles.first}>
                    <Icon color="#c3c3c3" name="user-add" size={40} style={{ marginLeft: 20, marginTop: 17 }} />
                    <Text style={styles.title}>我的个人中心</Text>
                </View>
                <View style={styles.main}>
                    <View style={styles.box}>
                        <Icon color="#c3c3c3" name="setting" size={40} style={{ marginBottom: 20 }} />
                        <Text style={styles.person}>账户管理</Text>
                    </View>
                    <View style={styles.box}>
                        <Icon color="#c3c3c3" name="environment" size={40} style={{ marginBottom: 20 }} />
                        <Text style={styles.person}>收货地址</Text>
                    </View>
                    <View style={styles.box}>
                        <Icon color="#c3c3c3" name="audit" size={40} style={{ marginBottom: 20 }} />
                        <Text style={styles.person}>我的信息</Text>
                    </View>
                    <View style={styles.box}>
                        <Icon color="#c3c3c3" name="profile" size={40} style={{ marginBottom: 20 }} />
                        <Text style={styles.person}>我的订单</Text>
                    </View>
                    <View style={styles.box}>
                        <Icon color="#c3c3c3" name="qrcode" size={40} style={{ marginBottom: 20 }} />
                        <Text style={styles.person}>我的二维码</Text>
                    </View>
                    <View style={styles.box}>
                        <Icon color="#c3c3c3" name="money-collect" size={40} style={{ marginBottom: 20 }} />
                        <Text style={styles.person}>我的积分</Text>
                    </View>
                    <View style={styles.box}>
                        <Icon color="#c3c3c3" name="star" size={40} style={{ marginBottom: 20 }} />
                        <Text style={styles.person}>我的收藏</Text>
                    </View>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
                </View>
                <View style={styles.first}>
                    <Icon color="#c3c3c3" name="tag" size={40} style={{ marginLeft: 20, marginTop: 17 }} />
                    <Text style={styles.title}>E族活动</Text>
                </View>
                <View style={styles.e}>
                    <View style={styles.box}>
                        <Icon color="#c3c3c3" name="tool" size={40} style={{ marginBottom: 20 }} />
                        <Text style={styles.person}>居家维修保养</Text>
                    </View>
                    <View style={styles.box}>
                        <Icon color="#c3c3c3" name="car" size={40} style={{ marginBottom: 20 }} />
                        <Text style={styles.person}>出行接送</Text>
                    </View>
                    <View style={styles.box}>
                        <Icon color="#c3c3c3" name="user" size={40} style={{ marginBottom: 20 }} />
                        <Text style={styles.person}>我的受赠人</Text>
                    </View>
                    <View style={styles.box}>
                        <Icon color="#c3c3c3" name="layout" size={40} style={{ marginBottom: 20 }} />
                        <Text style={styles.person}>我的住宿优惠</Text>
                    </View>
                    <View style={styles.box}>
                        <Icon color="#c3c3c3" name="flag" size={40} style={{ marginBottom: 20 }} />
                        <Text style={styles.person}>我的活动</Text>
                    </View>
                    <View style={styles.box}>
                        <Icon color="#c3c3c3" name="form" size={40} style={{ marginBottom: 20 }} />
                        <Button style={styles.person} onPress={() => Actions.fabu()}>我的发布</Button>
                    </View>
                </View>
                <View style={{ height: 96, width: '100%', flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={styles.exit}>BINNU DHILLON  |  </Text>
                    <Button style={styles.last} onPress={this.exit}>退出</Button>
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    last: {
        color: 'red',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 37
    },
    exit: {
        color: '#808080',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 37
    },
    e: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        width: '100%',
        backgroundColor: 'white',
        height: 285
    },
    person: {
        textAlign: 'center',
        fontSize: 25,
        color: '#4f4e4e'
    },
    box: {
        width: '33.3%',
        height: 125,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    main: {
        width: '100%',
        backgroundColor: 'white',
        height: 384,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        marginBottom: 10
    },
    title: {
        fontSize: 23,
        color: '#4f4e4e',
        textAlignVertical: 'center',
        marginLeft: 20
    },
    head: {
        height: 330,
        backgroundColor: '#f23030',
        width: '100%',
        justifyContent: "center",
        alignItems: 'center'
    },
    content: {
        color: 'white',
        marginTop: 25,
        textAlign: 'center',
        fontSize: 28
    },
    first: {
        height: 70,
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        marginBottom: 1
    }
});