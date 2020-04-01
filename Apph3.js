import React, { useState, useEffect } from 'react';
import {
	StyleSheet, View, Text, Image,
	BackHandler, ToastAndroid, AsyncStorage
} from 'react-native';
import { Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal, Actions } from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';
import SplashScreen from 'react-native-splash-screen';
// import Home from './src/home/Home';
import Home from './homework/Home';
// import Goods from './src/goods/Goods';
import Goods from './homework/Shop';
import Login from './src/common/Login'
import User from './src/userinfor/Userinfor';
// import Userinfor from './src/userinfor/Userinfor';
import Userinfor from './homework/Person';
import SwiperPage from './src/common/SwiperPage';
import Register from './src/common/Register';
import Fabu from './homework/Fabu';


console.disableYellowBox = true;

// const rootUrl = 'https://www.fastmock.site/mock/65721c49c01f167ea082d0dc81fb0c41/api';
// https://www.fastmock.site/mock/efe3464194054c6149ffcbf5f22e5716/api

const App = () => {
	let [isLogin, setLogin] = useState(false);
	let [isInstall, setInstall] = useState(true);
	let now = 0;
	let init = () => {
		AsyncStorage.getItem('isInstall')
			.then(res => {
				console.log('isinstall', res)
				if (res) {
					setInstall(false);
				}
			})
		// AsyncStorage.removeItem('user');
		AsyncStorage.getItem('user')
			.then(res => {
				let user = JSON.parse(res)
				console.log(user)
				if (!user) {
					SplashScreen.hide();
				}
				if (user && user.token) {
					setLogin(true);
					SplashScreen.hide();
				}
			})
	}

	useEffect(() => {
		init();
	}, [])

	let afterInstall = () => {
		console.log('after install')
		setInstall(false)
	}

	if (isInstall) {
		return <View style={{ flex: 1 }}>
			<SwiperPage afterInstall={afterInstall} />
		</View>
	}

	BackHandler.addEventListener('back', () => {
		console.log(new Date().getTime());
		if (Actions.currentScene == 'login') {
			if (new Date().getTime() - now < 2000) {
				BackHandler.exitApp();
			} else {
				ToastAndroid.show('确定要退出嘛', 100);
				var now = new Date().getTime();
				// Actions.popTo('register');
				return true;
			}
			
		}
		else {
			if (new Date().getTime() - now < 2000) {
				BackHandler.exitApp();
			} else {
				ToastAndroid.show('确定要退出嘛', 100);
				var now = new Date().getTime();
				return false;
			}
		}
		return true;
	})

	return (
		<Router
		// backAndroidHandler={()=>{
		// 	console.log('aaaaaa');
		// 	console.log(Actions.currentScene);
		// 	if(Actions.currentScene !='home'){
		// 		Actions.pop();
		// 		return true;
		// 	}else{
		// 		if(new Date().getTime()-now<2000){
		// 			BackHandler.exitApp();
		// 		}else{
		// 			ToastAndroid.show('确定要退出吗',100);
		// 			now = new Date().getTime();
		// 			return true;
		// 		}
		// 	}

		// }}
		>
			<Overlay>
				<Modal key="modal" hideNavBar>
					<Lightbox key="lightbox">
						<Drawer
							key="drawer"
							contentComponent={() => <Text>drawer</Text>}
							drawerIcon={() => <Icon name="menu" />}
							drawerWidth={400}
						>
							<Scene key="root">
								<Tabs
									key='tabbar'
									hideNavBar
									wrap={false}
									activeTintColor="red"
									inactiveTintColor="gray"
									tabBarStyle={{ backgroundColor: 'white' }}
								>
									{/* 首页 */}
									<Scene key='homePage'
										hideNavBar
										title='首页'
										icon={
											({ focused }) => <Icon
												color={focused ? 'red' : 'gray'}
												name="home"
												size={30}
											/>
										}
									>
										<Scene key='home'
											component={Home}
										/>
									</Scene>
									{/* 商品分类 */}
									<Scene key='goodsPage'
										hideNavBar
										title='商品分类'
										icon={
											({ focused }) => <Icon
												color={focused ? 'red' : 'gray'}
												name="appstore"
												size={30}
											/>
										}

									>
										<Scene key="goods" component={Goods} />
									</Scene>
									{/* 用户中心 */}
									<Scene
										key='userPage'
										hideDrawerButton
										icon={({ focused }) =>
											<Icon
												color={focused ? 'red' : 'gray'}
												name='shopping-cart'
												size={30}
												/>
										}
										title="用户中心"
										component={Userinfor}
									/>

								</Tabs>
							</Scene>
						</Drawer>
					</Lightbox>
					<Scene initial={!isLogin} key="login" component={Login} />
					<Scene key="register" component={Register} />
					<Scene key='fabu' component={Fabu} />
				</Modal>
			</Overlay>
		</Router>
	);
};

export default App;
