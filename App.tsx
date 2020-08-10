import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button,Image, FlatList} from 'react-native';
import { AntDesign} from '@expo/vector-icons';


const DATA=[

  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Tiana Mango',
    image:require("./assets/Miachael.jpg"),
    job:'Mobile app design',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Dulce Bator',
    image:require("./assets/NikoBellic.jpg"),
    job:'Animation in After effects',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Lincol Bator',
    image:require("./assets/Sek.jpg"),
    job:'Softwar Engineer and Game Dev',
  },

];

const Item = ({ title, image, job}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
   
<Text style={styles.job}> {job}</Text>
  </View>
);


export default function App() {


  
    const renderItem=({ item })=> (
      <View style={styles.ratedAndJob}>
        <View style={styles.titleStuff}>
        <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.imageStuff}>
        <Image style={styles.image} source={item.image}/>
        </View>
       
        <Item job={item.job} />  
      </View>
 
       
    
    
      
     
    );
 
  return (
    <View style={styles.container}>
          
        <View style={styles.imageView}>
             <Image source={require("./assets/me.jpg")} style={styles.myphoto}/>
        </View>
        <View style={styles.textView}>
        <Text style={styles.intro}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
       </Text>
      
       </View>
      

        
  <View style={styles.disp}> 
    <Text style={styles.topCourses}>Top mecanicians </Text>
    <View style={styles.sampleBox}>
      <View style={styles.shadowing}/>
      <View style={styles.shadowing_two}/>
      <View style={styles.miniBox}>
        <View style={styles.starView}>
        <Image 
        source={require('./assets/f.png')}
        style={styles.ratingStar}

         />
        </View>

        <View style={styles.textView_two}>
        <Text style={styles.rating}>
          3.5
        </Text>
        </View>

       




      </View>
      <Text style={styles.info_game}>
            UX - UI Design
        </Text>

        <View style={styles.view_image_two}>
          <Image source={require("./assets/halo.jpg")}
            style={styles.halo_pic}
          />
        </View>

        <View style={styles.text_desc}>
            <Text style={styles.teacher}>
                  Teacher
            </Text>

            <Text style={styles.nameOfTeacher}>
                  Halo 
            </Text>
        </View>
        
      
    </View>
    <Text style={styles.Suggested}> For you </Text>
    <View style={styles.containerOfList}>
        <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        />

        </View>
  </View>
     

    </View>
     
  );
}

const styles = StyleSheet.create({
  container: {
      
      width:1024,
      height:800,
      backgroundColor:'#1b262c',
  },
  disp: {
    marginTop:40,
    width:374,
    height:800,
    borderTopLeftRadius:100,
    borderTopRightRadius:100,
    
    backgroundColor:"white",
  },
  
  imageView:{
    width:90,
    height:90,
    
    
  },

  Suggested:{
    marginTop:30,
    marginLeft:30,
    fontSize:20,
  },

  textView:{
    height:50,
    width:210,
  },
 

  intro:{
    color:"white",
  
    height:40,
    width:220,
    fontSize:10,
    lineHeight:13,
    marginTop:6,
    marginLeft:120,
  },

  myphoto:{
    width:80,
    height:80,
    borderRadius:100/2,
    backgroundColor:"red",
    marginLeft:20,
    marginTop:80,
    borderWidth:0.8,
    borderColor:"wheat",
    
  },

  topCourses:{
    marginTop:25,
    color:"black",
    marginLeft:60,
    fontSize:26
  },

  sampleBox:{
   
    width:250,
    height:180,
    backgroundColor:"#3282b8",
    marginLeft:60,
    marginTop:20,
    overflow:"hidden",
    borderRadius:100/2,
   
    shadowColor:"black",
    shadowOffset:{
      width:0,
      height:2,
      
    },
    shadowOpacity:0.22,
    textShadowRadius:4.2,
    elevation:2,
    position:"relative",
   
    

    },

    shadowing:{
        width:200,
        height:200,
        backgroundColor:"black",
        position:"absolute",
        marginLeft:90,
        opacity:0.02,
      
        borderRadius:100/2,
        marginTop:60,
       
        overflow:"hidden"
        
    },
    shadowing_two:{
      width:200,
      height:200,
      backgroundColor:"black",
      position:"absolute",
      marginLeft:-60,
      opacity:0.03,

    
      borderRadius:100/2,
      marginTop:-50,
     
    },

    miniBox:{
      width:50,
      height:40,
      backgroundColor:"white",
      marginLeft:21,
      marginTop:15,
      borderRadius:100/2,
    },

    textView_two:{
      width:30,
      height:10,
      marginLeft:25, 
      marginTop:-4
       
     
      
    },

    rating:{
      fontSize:11,
    
    },

    starView:{

      width:15,
      height:15,

    },
    ratingStar:{
      width:14,
      height:14,
      marginTop:9,
      marginLeft:5,
    },
    
    info_game:{
      color:"black",
      marginLeft:21,
      width:120,
      height:20,
      marginTop:10,
      fontSize:15,
    },

    view_image_two:{
      width:50,
      height:50,
     
      
    },
    halo_pic:{
      width:50,
      height:50,
      borderRadius:100/2,
     marginLeft:20,
     marginTop:20,
     borderWidth:0.8,
     borderColor:"wheat",
    },
    text_desc:{
      marginLeft:90,
       width:100,
       height:40,
      marginTop:-25,
    },

    teacher:{
      fontSize:16,
      fontWeight:"200",
    },

    item:{
      
      
      backgroundColor:"white",
      width:145,
      height:110,
      marginHorizontal:8,
      marginVertical:8,
      marginLeft:-2,
      borderRadius:100/2.5,
     
      shadowColor:"black",
        shadowOffset:{
        width:0,
        height:10,
       },
      shadowOpacity:0.11,
      textShadowRadius:0.2,
      elevation:2,
     
    },
    title:{
          fontSize:13,
      },


    titleStuff:{
      marginLeft:58,
      marginTop:30,
     
      width:100,

    },
    containerOfList:{
      flex: 1,
      marginTop: 10,
        
      },

      image:{
        marginLeft:10,
        width:40,
        height:40,
        borderRadius:100/2,
        borderWidth:2,
        borderColor:"wheat",
      
      },
      imageStuff:{
        
        marginLeft:1,
        marginTop:-25,
        
      },

      job:{
          width:100,
          marginTop:10,
          marginLeft:20,
          fontSize:13,
      },
      ratedAndJob:{
        marginTop:10,
        width:140,
        height:150,
        backgroundColor:"#cff1ef",
        marginLeft:35,
        borderRadius:100/2.5,
        marginVertical:70,
        // borderBottomRightRadius:100/2.5,
        // borderBottomLeftRadius:100/2.5,
        shadowColor:"black",
        shadowOffset:{
        width:0,
        height:2,
       },
      shadowOpacity:0.25,
      textShadowRadius:4.2,
      elevation:2,
      },
});
