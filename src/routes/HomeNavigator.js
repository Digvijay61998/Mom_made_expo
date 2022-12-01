import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {Image,View,Button} from 'react-native';
import {ICONS, Scale,verticalScale} from "../common/constants";
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Order from '../screens/Order';
import Setting from '../screens/Setting';
import CustomDrawer from '../common/component/CustomDrawer';
import CustomHeader from '../common/component/CustomHeader';

const DrawerStack = createDrawerNavigator();
const RootStackNavigator = createStackNavigator();

const Tab = createBottomTabNavigator();

const RootBottomTabStack = props => {
  return (
    <>
    <RootStackNavigator.Navigator
      headerMode="none"
      initialRouteName="HomeScreen">
      <RootStackNavigator.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{gestureEnabled: false, headerShown: false}}
        />
      </RootStackNavigator.Navigator>
        </>
  );
};

const FristBottomTabStack = props => {
  return (
    <RootStackNavigator.Navigator
      headerMode="none"
      initialRouteName="Order">
      <RootStackNavigator.Screen
        name="Order"
        component={Order}
        options={{gestureEnabled: false, headerShown: false}}
      />

    </RootStackNavigator.Navigator>
  );
};

const SecandBottomTabStack = props => {
  return (
    <RootStackNavigator.Navigator
      headerMode="none"
      initialRouteName="Setting">
      <RootStackNavigator.Screen
        name="Setting"
        component={Setting}
        options={{gestureEnabled: false, headerShown: false}}
      />
    </RootStackNavigator.Navigator>
  );
};

const ThardBottomTabStack = props => {
  return (
    <RootStackNavigator.Navigator
      headerMode="none"
      initialRouteName="Setting">
      <RootStackNavigator.Screen
        name="Setting"
        component={Setting}
        options={{gestureEnabled: false, headerShown: false}}
      />
    </RootStackNavigator.Navigator>
  );
};
const FourthBottomTabStack = props => {
  return (
    <RootStackNavigator.Navigator
      headerMode="none"
      initialRouteName="Setting">
      <RootStackNavigator.Screen
        name="Setting"
        component={Setting}
        options={{gestureEnabled: false, headerShown: false}}
      />
    </RootStackNavigator.Navigator>
  );
};

const BottomTabsStackScreen = props => {
  return (
    <Tab.Navigator
      initialRouteName="RootBottomTabStack"
      tabBarOptions={{
        style: {
          height: verticalScale(30),
          paddingVertical: 5,
          backgroundColor: '#FFFFFF',
          width: Scale(380),
          paddingBottom: Scale(5),
          justifyContent: 'center',
          elevation: 10,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 1},
          shadowOpacity: 0.2,
          shadowRadius: 8,
          borderColor: '#000',
          borderWidth: 1,
          borderStyle: 'solid',
        },
        indicatorStyle: {
          borderBottomColor: 'red',
          borderBottomWidth: 125552,
        },
      }}>
      <Tab.Screen
        name="RootBottomTabStack"
        component={RootBottomTabStack}
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                top:verticalScale(10),
                width: Scale(24),
                height: Scale(25),
                resizeMode: 'contain',
              }}
              source={focused ? ICONS.Activehome : ICONS.home}
            />
          ),
        }}
      />

      <Tab.Screen
        name="FristBottomTabStack"
        component={FristBottomTabStack}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                top:verticalScale(10),
                width: Scale(24),
                height: Scale(25),
                resizeMode: 'contain',
              }}
              source={focused ? ICONS.time : ICONS.time}
            />
          ),
        }}
      />

      <Tab.Screen
        name="SecandBottomTabStack"
        component={SecandBottomTabStack}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                top:verticalScale(10),
                width: Scale(24),
                height: Scale(25),
                resizeMode: 'contain',
              }}
              source={focused ? ICONS.scene : ICONS.scene}
            />
          ),
        }}
      />

      <Tab.Screen
        name="ThardBottomTabStack"
        component={ThardBottomTabStack}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                top:verticalScale(10),
                width: Scale(24),
                height: Scale(25),
                resizeMode: 'contain',
              }}
              source={focused ? ICONS.favorites : ICONS.favorites}
            />
          ),
        }}
      />
          <Tab.Screen
        name="FourthBottomTabStack"
        component={FourthBottomTabStack}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                top:verticalScale(10),
                width: Scale(24),
                height: Scale(25),
                resizeMode: 'contain',
              }}
              source={focused ? ICONS.setting : ICONS.setting}
            />
          ),
        }}
      />
      </Tab.Navigator>
  );
};

function HomeScreens({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}
const HomeNavigator = () => (
  <DrawerStack.Navigator
    initialRouteName="BottomTabsStackScreen"
    drawerWidth={Scale(200)}
    screenOptions={{ drawerPosition: 'right' ,headerShown: false
  }}
  
    drawerStyle={{
      flex: 1,
      backgroundColor: '#F6F6F6',
      width: Scale(100),
      borderRadius: Scale(25),
    }}
    
    drawerContent={props => <CustomDrawer {...props} />}>
    <RootStackNavigator.Screen
      options={{gestureEnabled: false}}
      name="BottomTabsStackScreen"
      // component={props => <MainStackScreen {...props}/>}
      component={BottomTabsStackScreen}
    />
  </DrawerStack.Navigator>
);

export default HomeNavigator;
