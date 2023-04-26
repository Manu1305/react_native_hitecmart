import { View, Text, SafeAreaView, ImageBackground, Image, ScrollView, Button ,Alert, Pressable} from 'react-native'
import React, { useLayoutEffect, useState, useEffect, Dimensions } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper'
import { useFonts } from 'expo-font';
import * as Font from "expo-font";
import { Center } from 'native-base';


const images = [
  { uri: "https://www.linkpicture.com/q/shop4.jpg" },
  { uri: "https://www.linkpicture.com/q/shop_10.jpg" },
  { uri: "https://www.linkpicture.com/q/shop5.jpg" },
];
const products = [
  {
    title: 'Product 1',
    image: require('../assets/shirt.jpeg'),
    description: '2000/-'
  },
  {
    title: 'Product 2',
    image: require('../assets/new.jpeg'),
    description: 'This is product 2.'
  },
  {
    title: 'Product 3',
    image: require('../assets/bn.jpeg'),
    description: 'This is product 3.'
  }
];
const garment = [
  {
    title: "Product 1",
    image: require("../assets/products/shirt.jpg"),
    price: "200/-",
  },
  {
    title: "Product 2",
    image: require("../assets/new.jpeg"),
    price: "200/-",
  },
  {
    title: "Product 3",
    image: require("../assets/bn.jpeg"),
    price: "300/-",
  },
];
const loadFonts = async () => {
  await Font.loadAsync({
    "Caveat-Regular": require("../assets/fonts/Caveat-Regular.ttf"),
    
  });
};  



const HomeScreen = () => {
  const navigation = useNavigation()

 const [showProductDetails, setShowProductDetails] = useState(false);
  const [menswear, setmenswear] = useState(false);
const [color,setcolor]=useState("black")
const [colorMen, setcolorMen] = useState("black");
  const handlePress = () => {
    setShowProductDetails(true);
  setcolor("red");
  setcolorMen("black");
  setmenswear(false);
}
   
  function MenTopWear(){
    setShowProductDetails(false);
    setcolor("black");
    setcolorMen('red')
    setmenswear(true)
     setShowProductDetails(false);



  }
  

function addTocart(){
  Alert.alert("Product added to Cart")
}


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
    setTimer(setTimeout(updateIndex, 4000)); // 4 seconds
  };
  useEffect(() => {
    setTimer(setTimeout(updateIndex, 4000)); // 4 seconds
    return () => clearTimeout(timer);
  }, []);

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => {
      setFontsLoaded(true);
    });
  }, []);

  if (!fontsLoaded) {
    return <Text></Text>;
  }

 
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={{ backgroundColor: "white" }}>
          <View>
            <View style={{ backgroundColor: "red", flex: 1 }}>
              <View style={styles.container}>
                <ImageBackground
                  style={styles.background}
                  source={{ uri: "https://www.linkpicture.com/q/shop_10.jpg" }}
                  resizeMode="cover"
                >
                  <Image style={styles.image} source={images[currentIndex]} />
                </ImageBackground>

                <View
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    backgroundColor: "rgba(0, 0, 0, 0.75)",
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View style={{ paddingHorizontal: 12 }}>
                      <Text
                        style={{
                          fontSize: 48,
                          fontWeight: "bold",
                          color: "white",
                          marginBottom: 12,
                        }}
                      >
                        Choose your Fashion
                        <Text style={{ fontWeight: "normal" }}>Lifestyle</Text>
                      </Text>
                      <Text
                        style={{
                          paddingHorizontal: 10,
                          paddingVertical: 5,
                          borderWidth: 2,
                          borderColor: "transparent",
                          backgroundColor: "green",
                          color: "white",
                          fontWeight: "bold",
                          textTransform: "uppercase",
                          borderRadius: 999,
                          textAlign: "center",
                          textAlignVertical: "center",
                        }}
                      >
                        Shop Now !
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View className="flex flex-col justify-center items-center h-[100vh]">
            <View
              style={{ height: 300 }}
              className="!z-5 relative  rounded-[20px] max-w-[300px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] bg-white undefined"
            >
              <Swiper centerContent>
                {products.map((product, index) => (
                  <View key={index} style={styles.slide}>
                    <Image
                      source={product.image}
                      style={{ width: 200, height: 135 }}
                    />
                    <Text>{product.title}</Text>
                    <Text>{product.description}</Text>
                  </View>
                ))}
              </Swiper>
            </View>
          </View>

          {/* Add margin or padding to create separation */}

          <Text className="text-center" style={styles.special}>
            ~SPECIAL PRODUCTS~
          </Text>
          <Text className="text-center text-2xl text-orange-500 font-extrabold italic">
            WEEKLY GARMENT OFFERS
          </Text>

          <Swiper
            style={{
              backgroundColor: "#991fe0",
              height: 460,
              paddingTop: 150,
              borderRadius: 20,
            }}
          >
            {garment.map((product, index) => (
              <View key={index} style={styles.slide1}>
                <Text style={styles.text1}>{product.title}</Text>
                <Image
                  source={product.image}
                  style={{ width: 200, height: 200, borderRadius: 10 }}
                ></Image>

                <Text style={styles.text2}>{product.price}</Text>
                <Button
                  title="Add to cart"
                  color="black"
                  style={{ borderRadius: 12 }}
                  onPress={addTocart}
                />
              </View>
            ))}
          </Swiper>

          <View>
            <Image
              source={require("../assets/m.jpg")}
              style={{ width: "100%", height: 300 }}
            />
          </View>
          <View>
            <Text
              className="text-center"
              style={{
                fontFamily: "Caveat-Regular",
                marginBottom: 10,
                fontSize: 20,
              }}
            >
              ~ The Best For Your ~
            </Text>

            <Text className="text-center text-blue-700  text-2xl font-bold">
              {" "}
              BEST ONLINE SHOPPING
              <Text className="text-green-500 font-bold ">SITE IN INDIA</Text>-
              FOR FASHION
            </Text>
          </View>
          <Text
            style={{
              marginTop: 30,
              fontSize: 15,
              marginLeft: 12,
            }}
            className="tracking-wider"
          >
            Be it clothing, footwear or accessories, HiTec Mart offers you the
            ideal combination of fashion and functionality for men, women and
            kids.
          </Text>
          <Text className=" mt-12 text-xl " style={{ marginLeft: 12 }}>
            SMART MEN’S CLOTHING :
          </Text>

          <View
            style={{
              borderWidth: 4,
              borderColor: "#666640",
              borderStyle: "dotted",
              borderBottomWidth: 0,
              marginHorizontal: 15,
            }}
          />

          <Text
            className="ml-3 mr-2 mt-4 tracking-wider"
            style={{ fontSize: 15 }}
          >
            At HiTec Mart you will find myriad options in smart formal shirts
            and trousers, cool T-shirts and jeans, or kurta and pyjama
            combinations for men.
          </Text>

          <View
            style={{
              width: 130,
              marginLeft: 40,
              marginTop: 10,
              borderRadius: 30,
            }}
          >
            <Button title="VIEW MORE" color="#841584" />
          </View>

          <Text className=" mt-12 text-xl " style={{ marginLeft: 12 }}>
            FASHIONABLE FOOTWEAR:
          </Text>

          <View
            style={{
              borderWidth: 4,
              borderColor: "#666640",
              borderStyle: "dotted",
              borderBottomWidth: 0,
              marginHorizontal: 15,
            }}
          />

          <Text
            className="ml-3 mr-2 mt-4 tracking-wider"
            style={{ fontSize: 15 }}
          >
            Make a power statement at work dressed. Practice for your marathon
            with running shoes for men and women. Choose shoes for games such as
            tennis, football, basketball
          </Text>

          <View
            style={{
              width: 130,
              marginLeft: 40,
              marginTop: 10,
              borderRadius: 30,
            }}
          >
            <Button title="VIEW MENU" color="green" />
          </View>

          <View
            style={{
              backgroundColor: "#00D100",
              width: "90%",
              height: 200,
              margin: 20,
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                color: "#FFD600",
                fontSize: 18,
                marginTop: 20,
                marginLeft: 20,
              }}
            >
              Women-Collection
            </Text>
            <Text
              style={{
                marginLeft: 20,
                fontSize: 20,
                color: "white",
                fontWeight: "bold",
              }}
            >
              We have Wide Range of {"\n"}Garments and{"\n"} Footwears.
            </Text>

            <Text style={{ marginLeft: 20, marginTop: 30, color: "white" }}>
              Free shipping
            </Text>

            <ImageBackground
              style={{
                width: 100,
                height: 170,
                marginLeft: 270,
                position: "absolute",
                marginTop: 20,
              }}
              source={{
                uri: "https://o.remove.bg/downloads/053c5257-2cd9-424c-a888-ae442decfcea/23c9a502bf4312ccb66c7e07fd974d86-removebg-preview.png",
              }}
            ></ImageBackground>
          </View>

          <View
            style={{
              backgroundColor: "#Ffc300",
              width: "90%",
              height: 200,
              margin: 20,
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                color: "#FFD600",
                fontSize: 18,
                marginTop: 17,
                marginLeft: 20,
              }}
            >
              Kids-Collection
            </Text>
            <Text
              style={{
                marginLeft: 20,
                fontSize: 20,
                color: "white",
                fontWeight: "bold",
              }}
            >
              Get Best Price Based {"\n"}of your order Quantity.
            </Text>

            <Text
              style={{
                fontSize: 15,
                color: "white",
                marginTop: 20,
                marginLeft: 20,
              }}
            >
              Kids collections
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: "white",
                marginTop: 25,
                marginLeft: 20,
              }}
            >
              Top quality Products
            </Text>

            <ImageBackground
              style={{
                width: 100,
                height: 170,
                marginLeft: 270,
                position: "absolute",
                marginTop: 20,
              }}
              source={{
                uri: "https://o.remove.bg/downloads/321c3513-4eac-4833-956e-04a3b086e5f8/81JG00rcg-S._UX679_-removebg-preview.png",
              }}
            ></ImageBackground>
          </View>

          <View
            style={{
              backgroundColor: "#f70d1a",
              width: "90%",
              height: 200,
              margin: 20,
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                color: "#FFD600",
                fontSize: 18,
                marginTop: 17,
                marginLeft: 20,
              }}
            >
              Men's Collections
            </Text>
            <Text
              style={{
                marginLeft: 20,
                fontSize: 20,
                color: "white",
                fontWeight: "bold",
              }}
            >
              Online Shopping {"\n"} Fashion for Men{"\n"} Collection
            </Text>

            <Text
              style={{
                fontSize: 15,
                color: "white",
                marginTop: 20,
                marginLeft: 20,
              }}
            >
              Kids collections
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: "white",
                marginTop: 12,
                marginLeft: 20,
              }}
            >
              Top quality Products
            </Text>

            <ImageBackground
              style={{
                width: 140,
                height: 170,
                marginLeft: 229,
                position: "absolute",
                marginTop: 20,
                marginRight: 20,
              }}
              source={{
                uri: "https://o.remove.bg/downloads/578a8e60-4dbc-484b-bdcb-3d7154d3bb5a/shirt-png-transparent-removebg-preview.png",
              }}
            ></ImageBackground>
          </View>
          <Text
            className="text-center"
            style={{
              fontFamily: "Caveat-Regular",
              marginBottom: 5,
              fontSize: 20,
            }}
          >
            ~ Our Products ~
          </Text>

          <Text
            className="tracking-wider"
            style={{
              color: "blue",
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 10,
              textAlign: "center",
            }}
          >
            WHAT'S HOT IITEMS
          </Text>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
              marginTop: 10,
            }}
          >
            <Pressable onPress={handlePress}>
              <Text style={{ color: color }}>All products </Text>
            </Pressable>

            <Pressable onPress={MenTopWear}>
              <Text style={{ color: colorMen }}> Men top wear </Text>
            </Pressable>
            <Pressable>
              <Text> Women top wear </Text>
            </Pressable>
          </View>
          <Text className="text-center"> Kids Collection </Text>
          <Swiper
            style={{
              backgroundColor: "#white",
              height: 200,
              paddingTop: 150,
              borderRadius: 20,
              paddingBottom: 200,
              alignItems: "center",
              paddingLeft: 150,
            }}
          >
            {showProductDetails &&
              products.map((product, index) => (
                <View key={index} style={{ marginBottom: 30 }}>
                  <Text style={styles.text1}>{product.title}</Text>
                  <Image
                    source={product.image}
                    style={{ width: 100, height: 200, borderRadius: 10 }}
                  ></Image>

                  <Text style={styles.text2}>{product.price}</Text>
                </View>
              ))}
          </Swiper>

          <Swiper
            style={{
              backgroundColor: "#white",
              height: 200,
              paddingTop: 150,
              borderRadius: 20,
              paddingBottom: 200,
              alignItems: "center",
              paddingLeft: 150,
            }}
          >
            {menswear &&
              garment.map((product, index) => (
                <View key={index} style={{ marginBottom: 30 }}>
                  <Text style={styles.text1}>{product.title}</Text>
                  <Image
                    source={product.image}
                    style={{ width: 100, height: 200, borderRadius: 10 }}
                  ></Image>

                  <Text style={styles.text2}>{product.price}</Text>
                </View>
              ))}
          </Swiper>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    overflow: "hidden",
    height: 500,
   
  },
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundPosition: "50%",
  },
  image: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 400,
    height: 200,
    borderRadius: 200,
    padding: 10, 
    position: "relative",
  },
  text1: {
    marginBottom: 10,
  },
  text2: {
    marginBottom: 20,
    color: "white",
  },
  special:{
    fontFamily:"Caveat-Regular" ,fontSize:30
  }
});


export default HomeScreen
