import React, { Component } from 'react'
import { Image, View, Text, FlatList, Dimensions, ScrollView, StyleSheet, TextInput } from 'react-native';
import Button from 'react-native-button';
import { Carousel, Icon } from '@ant-design/react-native';


const { width } = Dimensions.get('window')
export default class Home extends Component {
    render() {
        return (
                <ScrollView>
                <View style={{ backgroundColor: '#f23030', width: '100%', height: 85, flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row', height: 50, justifyContent: "center", marginTop: 18 }}>
                        <View style={styles.search}>
                            <Icon color="white" name="search" size={35} />
                            <TextInput
                                placeholder="请输入您要搜索的关键字"
                                style={{ color: 'white', fontSize: 20, }}
                            />
                        </View>
                        <Button />
                    </View>
                    <Icon color="white" name="shopping-cart" size={35} style={{ marginTop: 18 }} />
                </View>
                <View>
                    <Carousel
                        style={styles.wrapper}
                        selectedIndex={2}
                        // autoplay
                        dotStyle={{ backgroundColor: 'white', width: 15, height: 15, marginLeft: 20 }}
                        dotActiveStyle={{ backgroundColor: 'red', width: 15, height: 15 }}
                        infinite
                    >
                        <View
                            style={[styles.containerHorizontal, { backgroundColor: 'red' }]}
                        >
                            <Image source={require('../assets/pic/lun1.png')} />
                        </View>
                        <View
                            style={[styles.containerHorizontal, { backgroundColor: 'blue' }]}
                        >
                            <Image source={require('../assets/pic/lun2.png')} />
                        </View>
                        <View
                            style={[styles.containerHorizontal, { backgroundColor: 'yellow' },]}
                        >
                            <Image source={require('../assets/pic/lun1.png')} />
                        </View>
                    </Carousel>
                </View>
                <View>
                    <View style={styles.tab}>
                        <Image source={require('../assets/pic/fen.png')} style={{marginTop:11,marginLeft:25}}/>
                        <Text style={styles.content}>居家维修保养</Text>
                    </View>
                    <View style={styles.tab}>
                        <Image source={require('../assets/pic/cheng.png')} style={{marginTop:11,marginLeft:25}}/>
                        <Text style={styles.content}>住宿优惠</Text>
                    </View>
                    <View style={styles.tab}>
                        <Image source={require('../assets/pic/lv.png')} style={{marginTop:11,marginLeft:25}}/>
                        <Text style={styles.content}>出行接送</Text>
                    </View>
                    <View style={styles.tab}>
                        <Image source={require('../assets/pic/lan.png')} style={{marginTop:11,marginLeft:25}}/>
                        <Text style={styles.content}>E族活动</Text>
                    </View>
                </View>
                <Button style={styles.btn}>发布需求</Button>
                <View>
                    <Text style={styles.e}>©E族之家 版权所有</Text>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    e:{
        color:'#818181',
        textAlign:'center',
        fontSize:18,
        marginTop:62,
        marginBottom:29
    },
    btn: {
        marginLeft:'10%',
        marginTop:36,
        width:'80%',
        height:67,
        fontSize:25,
        backgroundColor:'red',
        color:'white',
        textAlignVertical:'center',
        borderRadius:10
    },
    search: {
        width: '85%',
        marginRight: 30,
        backgroundColor: 'white',
        opacity: 0.7,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 25,
        paddingLeft: 20
    },
    wrapper: {
        backgroundColor: '#fff',
    },
    containerHorizontal: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 273,
    },
    content:{
        fontSize:25,
        fontWeight:'100',
        textAlignVertical:'center',
        marginLeft:40,
        color:'#818181'
    },
    tab: {
        height:120,
        flexDirection:'row',
        backgroundColor:'white',
        marginTop:10
    }
})