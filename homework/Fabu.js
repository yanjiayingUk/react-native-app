import React, { Component } from 'react'
import { Text, View, StyleSheet, ToastAndroid } from 'react-native'
import Button from 'react-native-button';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';


export default class Fabu extends Component {
    constructor() {
        super();
        this.state = {
            tits: [],
            pag: 1
        }
    }
    componentDidMount() {
        fetch('https://cnodejs.org/api/v1/topics?/?tab=all&page=1&limit=10')
            .then(res => res.json())
            .then(res => {
                // console.log(res.data)
                this.setState({
                    tits: res.data
                })
            })
    }
    addTitle = (page) => {
        this.pag = page++;
        fetch('https://cnodejs.org/api/v1/topics?/?tab=all&page=' + page + '&limit=10')
            .then(res => res.json())
            .then(res => {
                this.setState({ tits: res.data, pag: page });
            })
    }
    subtractTitle = (page) => {
        this.pag = page--;
        if (page > 0) {
            fetch('https://cnodejs.org/api/v1/topics?/?tab=all&page=' + page + '&limit=10')
                .then(res => res.json())
                .then(res => {
                    this.setState({ tits: res.data, pag: page });
                })
        }
        else {
            ToastAndroid.show("内容自定", ToastAndroid.SHORT);
        }
    }
    render() {
        let ran = Math.random();
        return (
            <View>
                <View style={styles.tabbar}>
                    <Button onPress={() => Actions.userPage()}>
                        <Icon color="white" name="left" size={30} style={{ marginRight: 100, marginTop: 22 }} />
                    </Button>
                    <Text style={styles.title}>我的发布</Text>
                    <Icon color="white" name="dash" size={30} style={{ marginLeft: 100, marginTop: 22 }} />
                </View>
                <View>
                    {
                        this.state.tits.map((item) => (
                            <View style={styles.main}>
                                <Text style={{ fontSize: 15, marginLeft: 10, width: 280 }}>
                                    {item.title ? (item.title.length > 16 ? item.title.substr(0, 16) + "..." : item.title) : ""}
                                </Text>
                                <Text style={{ fontSize: 15, marginLeft: 10 }}>
                                    {item.create_at.slice(0, 10)}
                                </Text>
                                {/* <Text style={{ marginLeft: 70 }}>{(parseInt(Math.random() * 10) % 2 == 0) ? '已回复' : '待回复'}</Text> */}
                                {
                                    ran>0.5?
                                    <Text style={{ marginLeft: 70 }} >已回复</Text>
                                    :<Text style={{color:'red',marginLeft: 70}}>待回复</Text>
                                }
                            </View>
                        ))
                    }
                </View>
                <View style={styles.last}>
                    <Button style={styles.left}
                        onPress={() => this.subtractTitle(this.state.pag)}
                    >上一页</Button>
                    <Text style={{fontSize:25}}>第{this.state.pag}页</Text>
                    <Button style={styles.left}
                        onPress={() => this.addTitle(this.state.pag)}
                    >下一页</Button>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    left:{
        color:'white',
        textAlignVertical:'center',
        backgroundColor:'#f23030',
        borderRadius:15,
        width:100,
        height:35
    },
    last:{
        backgroundColor: 'white',
        width: '100%',
        height:70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-evenly'
    },
    main: {
        backgroundColor: 'white',
        width: '100%',
        color: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        height: 60
    },
    tabbar: {
        height: 70,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#f23030',
        justifyContent: 'space-evenly'
    },
    title: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
})