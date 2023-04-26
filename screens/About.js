import { View, Text, SafeAreaView, ImageBackground, Image, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState, useEffect, Dimensions } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper'

const images = [
    { uri: 'https://media.istockphoto.com/id/995734014/photo/businessman-business-woman-working-together.jpg?s=612x612&w=0&k=20&c=BnEf7QBC-ixI4VyBEpw2yI24gDEyXQ1slgrqRrBi7QE=' },
    { uri: 'https://media.istockphoto.com/id/1405156781/photo/businessman-and-woman-shake-hands-like-hello-in-office-closeup.jpg?s=612x612&w=is&k=20&c=k4F0vJZaQRCebPcl7ZVBt9dOL3TRgs1i543WodsWcP4=' },
    { uri: 'https://media.istockphoto.com/id/1384482024/photo/happy-indian-man-shopping-online-ordering-food-reading-good-news-sitting-on-sofa-smiling.jpg?s=612x612&w=is&k=20&c=rtCF_g86z6FWvJlqayMUnWJqMZwZH7taKNnNERxvhwU=' },
];
const products = [
    {
        title: 'Product 1',
        image: require('../assets/shirt.jpeg'),
        description: 'This is product 1.'
    },
    {
        title: 'Product 2',
        image: require('../assets/shirt.jpeg'),
        description: 'This is product 2.'
    },
    {
        title: 'Product 3',
        image: require('../assets/shirt.jpeg'),
        description: 'This is product 3.'
    }
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

const About = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true
        })
    }, [])
    const [currentIndex, setCurrentIndex] = useState(0);
    const [timer, setTimer] = useState(null);
    const updateIndex = () => {
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(nextIndex);
        setTimer(setTimeout(updateIndex, 3000)); // 3 seconds
    };
    useEffect(() => {
        setTimer(setTimeout(updateIndex, 3000)); // 3 seconds
        return () => clearTimeout(timer);
    }, []);



    return (
        <ScrollView>
            <SafeAreaView style={{ backgroundColor: 'yellow', flex: 1 }}>
                <View>
                    <View style={{ backgroundColor: 'red', flex: 1 }}>


                        <View style={styles.container}>
                            <ImageBackground
                                style={styles.background}
                                source={{ uri: 'https://img.freepik.com/free-photo/happy-couple-shaking-hands-with-real-estate-agent-after-successful-agreement-office_637285-6889.jpg?w=2000' }}
                                resizeMode="cover"
                            >
                                <Image style={styles.image} source={images[currentIndex]} />
                            </ImageBackground>

                            <View style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', backgroundColor: 'rgba(0, 0, 0, 0.75)' }}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ paddingHorizontal: 12 }}>
                                        <Text style={{ fontSize: 48, fontWeight: 'bold', color: 'white', marginBottom: 12 }}>Choose your Fashion  <Text style={{ fontWeight: 'normal' }}>Lifestyle</Text></Text>
                                        <Text style={{ paddingHorizontal: 10, paddingVertical: 5, borderWidth: 2, borderColor: 'transparent', backgroundColor: 'green', color: 'white', fontWeight: 'bold', textTransform: 'uppercase', borderRadius: 999, textAlign: 'center', textAlignVertical: 'center' }}>Shop Now !</Text>


                                    </View>
                                </View>
                            </View>
                        </View>

                    </View>


                </View>
                <View style={{ height: 200 }}>
                    <Swiper centerContent >
                        {products.map((product, index) => (
                            <View key={index} style={styles.slide}>
                                <Image source={product.image} />
                                <Text>{product.title}</Text>
                                <Text>{product.description}</Text>

                            </View>
                        ))}
                    </Swiper>
                </View>

            </SafeAreaView>
        </ScrollView>
    )
}

export default About
