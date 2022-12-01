import { StyleSheet, Text,TouchableOpacity, View } from 'react-native'
import React,{useEffect} from 'react'
import CustomHeader from '../../common/component/CustomHeader';

const HomeScreen = (props) => {
const {navigation} = props;
  console.log("props", props);
  
  useEffect(() => {
    return () => (navigation.openDrawer());
  }, []);
  return (
    <View>
      <CustomHeader navigation={navigation} />
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
         <Text>Home navi</Text>
        </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})