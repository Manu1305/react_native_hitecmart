import { View, Text, SafeAreaView, ImageBackground, Image, ScrollView, Animated, Button, } from 'react-native'
import React, { useLayoutEffect, useState, useEffect, Dimensions, useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper'
import { useRef } from 'react';
import HomeScreen from './Homescreen';





const images = [
    { uri: 'https://media.istockphoto.com/id/995734014/photo/businessman-business-woman-working-together.jpg?s=612x612&w=0&k=20&c=BnEf7QBC-ixI4VyBEpw2yI24gDEyXQ1slgrqRrBi7QE=' },
    { uri: 'https://media.istockphoto.com/id/1405156781/photo/businessman-and-woman-shake-hands-like-hello-in-office-closeup.jpg?s=612x612&w=is&k=20&c=k4F0vJZaQRCebPcl7ZVBt9dOL3TRgs1i543WodsWcP4=' },
    { uri: 'https://media.istockphoto.com/id/1384482024/photo/happy-indian-man-shopping-online-ordering-food-reading-good-news-sitting-on-sofa-smiling.jpg?s=612x612&w=is&k=20&c=rtCF_g86z6FWvJlqayMUnWJqMZwZH7taKNnNERxvhwU=' },
];


const styles = StyleSheet.create({
    container: {
        position: 'relative',
        overflow: 'hidden',
        height: 500,
        '--swiper-theme-color': '#000',
        '--swiper-navigation-size': '44px',
        '--swiper-pagination-bullet-size': '6px',
        '--swiper-pagination-bullet-horizontal-gap': '6px',

    },
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundPosition: '50%',
    }, image: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },


});

const CartScreen = (route) => {

  
   
    const fadeAnim = useRef(new Animated.Value(0)).current;
    // const { cartItems } = route.params;
    useEffect(()=>{
        const fadeIn = () => {
            // Will change fadeAnim value to 1 in 5 seconds
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 5000,
                useNativeDriver: true,
            }).start();
        };
           fadeIn()


    },[])
    

    return (
        <ScrollView>
            <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
                <View>
                    <View style={{ backgroundColor: 'red', flex: 1 }}>

                    </View>


                </View>
                <View style={{  alignContent:'center'}}>
                    <Image style={{height:400}} source={{ uri:"https://assets.materialup.com/uploads/66fb8bdf-29db-40a2-996b-60f3192ea7f0/preview.png"}}/>
                   
                </View>
               
                <Animated.View
                    style={[
                        styles.fadingContainer,
                        {
                            // Bind opacity to animated value
                            opacity: fadeAnim,
                        },
                    ]}>
                    <Text className='text-center text-3xl text-red-700 '>   Cart is empty 🤔  </Text> 
                     </Animated.View> 
                     
                    <View >
                       
                       
                    </View>
                {/* <View>
                    <Text>Cart Items:</Text>
                    {cartItems.map((product, index) => (
                        <View key={index}>
                            <Text>{product.title}</Text>
                            <Text>{product.price}</Text>
                        </View>
                    ))}
                </View> */}
               
              
            </SafeAreaView>
        </ScrollView>
    );
};



export default CartScreen
