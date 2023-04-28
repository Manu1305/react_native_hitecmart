import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  ScrollView,
  Button,
  Alert,
  Pressable,
  TouchableOpacity,
  TextInput
} from "react-native";
import React, { useLayoutEffect, useState, useEffect, Dimensions } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import { useFonts } from "expo-font";
import * as Font from "expo-font";
import { Center } from "native-base";
import { DataContext } from "../DataContext";


const images = [
  { uri: "https://www.linkpicture.com/q/shop4.jpg" },
  { uri: "https://www.linkpicture.com/q/shop_10.jpg" },
  { uri: "https://www.linkpicture.com/q/shop5.jpg" },
];
const products = [
  {
    title: "Product 1",
    image: require("../assets/shirt.jpeg"),
    description: "2000/-",
  },
  {
    title: "Product 2",
    image: require("../assets/new.jpeg"),
    description: "This is product 2.",
  },
  {
    title: "Product 3",
    image: require("../assets/bn.jpeg"),
    description: "This is product 3.",
  },
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

const mens = [
  {
    title: "Product 1",
    image: require("../assets/mens/men.jpg"),
    price: "200/-",
  },
  {
    title: "Product 2",
    image: require("../assets/mens/men1.jpg"),
    price: "200/-",
  },
  {
    title: "Product 3",
    image: require("../assets/mens/men2.jpg"),
    price: "300/-",
  },
];

const women = [
  {
    title: "Product 1",
    image: require("../assets/women/women.jpg"),
    price: "200/-",
  },
  {
    title: "Product 2",
    image: require("../assets/women/women1.jpg"),
    price: "200/-",
  },
  {
    title: "Product 3",
    image: require("../assets/women/women2.jpg"),
    price: "300/-",
  },
];

const kids = [
  {
    title: "Product 1",
    image: require("../assets/kids/kid1.jpg"),
    price: "200/-",
  },
  {
    title: "Product 2",
    image: require("../assets/kids/kid2.jpg"),
    price: "200/-",
  },
  {
    title: "Product 3",
    image: require("../assets/kids/kid3.jpg"),
    price: "300/-",
  },
];

const loadFonts = async () => {
  await Font.loadAsync({
    "Caveat-Regular": require("../assets/fonts/Caveat-Regular.ttf"),
  }); 
};

const HomeScreen = () => {
  const [cartItems, setCartItems] = useState([]);

  const navigation = useNavigation();
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const [showProductDetails, setShowProductDetails] = useState(false);
  const [menswear, setmenswear] = useState(false);
  const [womenswear, setwomenswear] = useState(false);
  const [kidswear, setkidswear] = useState(false);
  const [color, setcolor] = useState("black");
  const [colorMen, setcolorMen] = useState("black");
  const [colorWomen, setcolorWomen] = useState("black");
  const [allproductdisssplay, setallproductdisssplay] = useState("none");
  const [allproductdisssplaymen, setallproductdisssplaymen] = useState("none");
  const [allproductdisssplaywomen, setallproductdisssplaywomen] =
    useState("none");
  const [allproductdisssplaykids, setallproductdisssplaykids] =
    useState("none");
  const [colorkids, setcolorKids] = useState("black");
  const handlePress = () => {
    setShowProductDetails(true);
    setcolor("red");
    setcolorMen("black");
    setmenswear(false);
    setallproductdisssplay("flex");
    setcolorWomen("black");
    setallproductdisssplaymen("none");
    setallproductdisssplaywomen("none");
    setcolorKids("black");
    setallproductdisssplaykids("none");
    setkidswear("false");
  };

  function MenTopWear() {
    setShowProductDetails(false);
    setcolor("black");
    setcolorMen("red");
    setmenswear(true);
    setShowProductDetails(false);
    setallproductdisssplay("none");
    setallproductdisssplaymen("flex");
    setcolorWomen("black");
    setallproductdisssplaywomen("none");
    setcolorKids("black");
    setallproductdisssplaykids("none");
    setkidswear("false");
  }
  function womenTopWear() {
    setShowProductDetails(false);
    setcolor("black");
    setcolorMen("black");
    setcolorWomen("red");
    setmenswear(false);
    setShowProductDetails(false);
    setallproductdisssplay("none");
    setwomenswear(true);
    setallproductdisssplaymen("none");
    setallproductdisssplaywomen("flex");
    setcolorKids("black");
    setallproductdisssplaykids("none");
    setkidswear("false");
  }
  function kidsWear() {
    setShowProductDetails(false);
    setcolor("black");
    setcolorMen("black");
    setcolorWomen("black");
    setmenswear(false);
    setShowProductDetails(false);
    setallproductdisssplay("none");
    setwomenswear(false);
    setallproductdisssplaymen("none");
    setallproductdisssplaywomen("none");
    setcolorKids("red");
    setallproductdisssplaykids("flex");
    setkidswear("true");
  }

  function addTocart(product) {
    Alert.alert("Product added to Cart");
    const newCartItems = [ product];
    setCartItems(newCartItems);
    console.log(`name is ${product.title}`);
    console.log(cartItems);
    
  }


  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, []);
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
    <DataContext.Provider value={cartItems}>

    <ScrollView>
      <SafeAreaView>
        <View style={{ backgroundColor: "#EDEADE" }}>
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
            {products.map((product, index) => (
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
                  onPress={() => addTocart(product)}
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
              padding: 20,
            }}
          >
            <Pressable onPress={handlePress}>
              <Text style={{ color: color }}>All products </Text>
            </Pressable>

            <Pressable onPress={MenTopWear}>
              <Text style={{ color: colorMen }}> Men top wear </Text>
            </Pressable>
            <Pressable onPress={womenTopWear}>
              <Text style={{ color: colorWomen }}> Women top wear </Text>
            </Pressable>
          </View>
          <Pressable onPress={kidsWear}>
            <Text className="text-center" style={{ color: colorkids }}>
              {" "}
              Kids Collection{" "}
            </Text>
          </Pressable>
          <Swiper
            style={{
              backgroundColor: "#brown",
              height: 200,
              paddingTop: 150,
              borderRadius: 20,
              paddingBottom: 200,
              alignItems: "center",
              paddingLeft: 150,
              display: allproductdisssplay,
            }}
          >
            {showProductDetails &&
              products.map((product, index) => (
                <View key={index} style={{ marginBottom: 30 }}>
                  <Text style={styles.text1}>{product.title}</Text>
                  <Image
                    source={product.image}
                    style={{
                      width: 100,
                      height: 200,
                      borderRadius: 10,
                      marginTop: 70,
                    }}
                  ></Image>

                  <Text style={styles.text2}>{product.price}</Text>
                </View>
              ))}
          </Swiper>

          <Swiper
            style={{
              backgroundColor: "#yellow",
              height: 200,
              paddingTop: 150,
              borderRadius: 20,
              paddingBottom: 200,
              alignItems: "center",
              paddingLeft: 150,
              display: allproductdisssplaymen,
            }}
          >
            {menswear &&
              mens.map((product, index) => (
                <View key={index} style={{ marginBottom: 30 }}>
                  <Text style={styles.text1}>{product.title}</Text>
                  <Image
                    source={product.image}
                    style={{
                      width: 100,
                      height: 200,
                      borderRadius: 10,
                      marginTop: 70,
                    }}
                  ></Image>

                  <Text style={styles.text2}>{product.price}</Text>
                </View>
              ))}
          </Swiper>

          <Swiper
            style={{
              backgroundColor: "#lime",
              height: 200,
              paddingTop: 150,
              borderRadius: 20,
              paddingBottom: 200,
              alignItems: "center",
              paddingLeft: 150,
              display: allproductdisssplaywomen,
            }}
          >
            {womenswear &&
              women.map((product, index) => (
                <View key={index} style={{ marginBottom: 30 }}>
                  <Text style={styles.text1}>{product.title}</Text>
                  <Image
                    source={product.image}
                    style={{
                      width: 100,
                      height: 200,
                      borderRadius: 10,
                      marginTop: 70,
                    }}
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
              display: allproductdisssplaykids,
            }}
          >
            {kidswear &&
              kids.map((product, index) => (
                <View key={index} style={{ marginBottom: 30 }}>
                  <Text style={styles.text1}>{product.title}</Text>
                  <Image
                    source={product.image}
                    style={{
                      width: 100,
                      height: 200,
                      borderRadius: 10,
                      marginTop: 70,
                    }}
                  ></Image>

                  <Text style={styles.text2}>{product.price}</Text>
                </View>
              ))}
          </Swiper>

          <Text
            className="text-center"
            style={{
              fontSize: 17,
              marginTop: 10,
              color: "#FDB750",
              fontWeight: "bold",
            }}
          >
            {" "}
            Discover thousands of other quality products
          </Text>

          <Text
            className="text-center mt-9"
            style={{ color: "green", fontSize: 19 }}
          >
            Shop all products >>
          </Text>

          <View>
            <ImageBackground
              source={require("../assets/background/offerbanner.jpg")}
              style={{ width: "100%", height: 300 }}
            >
              <Text
                style={{
                  fontFamily: "Caveat-Regular",
                  marginTop: 30,
                  marginLeft: 10,
                  color: "white",
                }}
              >
                ~HiTec Mart~
              </Text>

              <Text
                style={{
                  marginTop: 30,
                  marginLeft: 10,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                HiTec Mart is one of the unique online {"\n"} shopping sites in
                India where fashion is {"\n"} accessible to all.
                {"\n"} {"\n"}
                {"\n"} {"\n"}
                HURRY UP! OFFER END IN: The event{"\n"}has ended{"\n"}
                {"\n"}The event has ended{" "}
              </Text>
              <View
                style={{
                  width: 200,
                  borderRadius: 20,
                  backgroundColor: "white",
                }}
              ></View>
            </ImageBackground>

            <Text
              className="text-center"
              style={{ fontFamily: "Caveat-Regular", marginTop: 10 }}
            >
              Read Our Blog
            </Text>
            <Text
              className="text-center"
              style={{ color: "blue", fontSize: 20, marginTop: 10 }}
            >
              OUR LATEST POST
            </Text>
            <Text
              style={{ margin: 10, justifyContent: "space-between" }}
              className="text-center"
            >
              Be it clothing, footwear or accessories, HiTec Mart offers you the
              ideal combination of fashion and functionality for men, women and
              kids.
            </Text>
          </View>
          <Image
            source={{
              uri: "https://hitecmart.com/wp-content/uploads/2023/03/b9.jpeg",
            }}
            style={{ width: "100%", height: 300 }}
          />
          <Text style={{ color: "green", marginTop: 10 }}>
            BUSSINESS{" "}
            <Text style={{ color: "black" }}>
              CHANDAN KUMAR . 16.March.2023
            </Text>
          </Text>
          <Text style={{ marginTop: 10, fontWeight: "bold", color: "blue" }}>
            How to optimise Your B2B Garments {"\n"} marketplace Profile for
            Better RResults
          </Text>

          <Text style={{ marginTop: 10 }}>
            Meta description:Are you struggling to get leads from {"\n"} your
            B2B garments marketplace profile ? Read this article {"\n"} to learn
            how ...
          </Text>

          <Text style={{ marginTop: 10, color: "green", fontWeight: "700" }}>
            CONTINUE READING
          </Text>

          <View
            style={{
              width: "100%",
              height: 400,
              backgroundColor: "steelblue",
              alignItems: "center",
              padding: 50,
            }}
          >
            <View style={{ flexDirection: "column", marginBottom: 10 }}>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    width: 150,
                    height: 130,
                    backgroundColor: "#888888",
                    margin: 20,
                  }}
                >
                  <Text
                    style={{ color: "white", marginTop: 20, marginLeft: 5 }}
                  >
                    {" "}
                    FAST DELIVERY
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      marginTop: 50,
                      marginLeft: 5,
                      color: "white",
                    }}
                  >
                    Across west and east
                  </Text>
                </View>

                <View
                  style={{
                    width: 150,
                    height: 130,
                    backgroundColor: "#888888",
                    margin: 20,
                  }}
                >
                  <Text
                    style={{ color: "white", marginTop: 20, marginLeft: 5 }}
                  >
                    {" "}
                    SAFE PAYMENT
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      marginTop: 50,
                      marginLeft: 5,
                      color: "black",
                    }}
                  >
                    Across west and east
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    width: 150,
                    height: 130,
                    backgroundColor: "#888888",
                    margin: 20,
                  }}
                >
                  <Text
                    style={{ color: "white", marginTop: 20, marginLeft: 5 }}
                  >
                    {" "}
                    ONLINE DISCOUNT
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      marginTop: 50,
                      marginLeft: 5,
                      color: "black",
                    }}
                  >
                    Across west and east
                  </Text>
                </View>
                <View
                  style={{
                    width: 150,
                    height: 130,
                    backgroundColor: "#888888",
                    margin: 20,
                  }}
                >
                  <Text
                    style={{ color: "white", marginTop: 20, marginLeft: 5 }}
                  >
                    {" "}
                    HELP CENTRE
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      marginTop: 50,
                      marginLeft: 5,
                      color: "black",
                    }}
                  >
                    Across west and east
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              borderBottomColor: 'black',
              alignSelf: 'stretch'
            }}
          />
          <View
            style={{
              borderBottomColor: 'black',
              alignSelf: 'stretch'
            }}
          />
          <View
            style={{
              width: "100%",
              height: 800,
              backgroundColor: "steelblue",
              alignItems: "center",

            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1, height: 1, backgroundColor: 'white' }} />
              <View>

              </View>
              <View style={{ flex: 1, height: 1, backgroundColor: 'white' }} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
              <View style={{ flex: 1, height: 1, backgroundColor: 'white' }} />
              <View>

              </View>
              <View style={{ flex: 1, height: 1, backgroundColor: 'white' }} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
              <View style={{ flex: 1, height: 1, backgroundColor: 'white' }} />
              <View>

              </View>
              <View style={{ flex: 1, height: 1, backgroundColor: 'white' }} />
            </View>
            <Text style={{ marginLeft: 0, color: 'white' }}>
              <Text style={{ fontWeight: 'bold' }}> LET US HELP YOU </Text> {'\n'} {'\n'}If you have any question,{'\n'}{'\n'}please contact us at:support@hitecmart.com
              {'\n'}Social Media :
            </Text>

            <Text style={{ marginLeft: 0, color: 'white', marginTop: 20 }}>
              <Text style={{ fontWeight: 'bold', marginTop: 20 }}> LOOKING FOR HITECMART </Text> {'\n'} {'\n'}2nd Floor, 91springboard Mahadevpura ORR{'\n'}{'\n'}Bangalore – 560048
              Monday – Friday: 9:30 AM – 6:30 PM{'\n'}

              Saturday: 9:30 AM – 06:30 PM{'\n'}

              Sunday: Close
            </Text>
            <Text style={{ marginLeft: 0, color: 'white', marginTop: 20 }}>

              <Text style={{ marginLeft: -10, color: 'white' }}>
                <Text style={{ fontWeight: 'bold', marginTop: 20 }}>BEST ONLINE SHOPPING SITE </Text> {'\n'} {'\n'}Smart men’s clothing{'\n'}
                Trendy women’s clothing{'\n'}
                Kids Clothing{'\n'}
                Shop{'\n'}
                Stylish Accessories{'\n'}
                Privacy Policy{'\n'}
                Return & Refund Policy{'\n'}
                Disclaimer

              </Text>
            </Text>
            <Text style={{ marginLeft: 0, color: 'white', marginTop: 20 }}>
              <Text style={{ fontWeight: 'bold', }}>OUR NEWSLETTER
              </Text> {'\n'} {'\n'}Subscribe to the Hitecmart mailing list to receive updates{'\n'}
              on new arrivals & other information.

            </Text>
            <TouchableOpacity style={styles.button}>
              <TextInput style={{ backgroundColor: "white" }} placeholder="Enter your email here!" ></TextInput>
              <Text style={styles.title}>Subscribe</Text>
            </TouchableOpacity>

          </View>

        </View>

      </SafeAreaView>
    </ScrollView>
    </DataContext.Provider>
  );
};

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
  special: {
    fontFamily: "Caveat-Regular",
    fontSize: 30,
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});

export default HomeScreen;
