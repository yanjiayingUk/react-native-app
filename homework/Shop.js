import React, { Component } from 'react'
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    TextInput
} from 'react-native';
import { Icon } from '@ant-design/react-native';


export default class Shop extends Component {
    render() {
        return (
                <ScrollView>

                    <View style={{ width: '100%', backgroundColor: 'white', height: 145 }}>
                        <View style={{ flexDirection: 'row', height: 60, justifyContent: "center" }}>
                            <View style={{
                                width: '80%',
                                marginTop: 10,
                                marginRight: 10,
                                backgroundColor: '#eeeeee',
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingLeft: 10,
                                position: "relative"
                            }}>
                                <TextInput placeholder="请输入商品名称" style={{ fontSize: 18 }} />
                                <Icon style={{ width: 20, height: 20, position: 'absolute', right: 20 }} name="search" color="red"/>

                            </View>
                        </View>
                        <View style={styles.titl}>
                            <Text style={{ fontSize: 18, color: 'red' }}>综合</Text>
                            <Text style={{ fontSize: 18 }}>销量</Text>
                            <Text style={{ fontSize: 18 }}>新品</Text>
                            <Text style={{ fontSize: 18 }}>价格</Text>
                            <Text style={{ fontSize: 18 }}>信用</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                        <View style={styles.box}>
                            <Image style={styles.img} source={require('../assets/1.png')} />
                            <Text style={styles.detail}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                            <Text style={{ color: 'red', fontSize: 17, marginTop: 5 }}>36.00</Text>
                        </View>
                        <View style={styles.box}>
                            <Image style={styles.img} source={require('../assets/2.png')} />
                            <Text style={styles.detail}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                            <Text style={{ color: 'red', fontSize: 17, marginTop: 5 }}>36.00</Text>
                        </View>
                        <View style={styles.box}>
                            <Image style={styles.img} source={require('../assets/1.png')} />
                            <Text style={styles.detail}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                            <Text style={{ color: 'red', fontSize: 17, marginTop: 5 }}>36.00</Text>
                        </View>
                        <View style={styles.box}>
                            <Image style={styles.img} source={require('../assets/2.png')} />
                            <Text style={styles.detail}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                            <Text style={{ color: 'red', fontSize: 17, marginTop: 5 }}>36.00</Text>
                        </View>
                        <View style={styles.box}>
                            <Image style={styles.img} source={require('../assets/1.png')} />
                            <Text style={styles.detail}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                            <Text style={{ color: 'red', fontSize: 17, marginTop: 5 }}>36.00</Text>
                        </View>
                        <View style={styles.box}>
                            <Image style={styles.img} source={require('../assets/2.png')} />
                            <Text style={styles.detail}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                            <Text style={{ marginLeft: 5, color: 'red', fontSize: 17, marginTop: 5 }}>36.00</Text>
                        </View>
                    </View>

                </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        width: '45%',
        height: 300,
        margin: 10,
        backgroundColor: 'white',
    },
    titl: {
        justifyContent: "space-between",
        flexDirection: 'row',
        width: '80%',
        marginTop: 35,
        marginLeft: '10%',
        height: 25
    },
    img: {
        height: 120,
        width: 120,
        marginLeft: '22%',
        marginTop: 40,
        resizeMode: 'contain'
    },
    detail: {
        color: '#a3a3a3',
        fontSize: 17,
        marginTop: 40
    }
});