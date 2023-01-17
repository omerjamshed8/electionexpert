import React,{useReducer, useState,createContext, useContext } from "react";
import { Pressable,View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import Favorites from "./favorites";

const Data=createContext();

function Buttons({ onFavorite, onDownload, cnic, isFavorite, setIsFavorite }){
  

  let initialState=false;
    const reducer=(state,action)=>{
      if(action.type==='Liked')
      return {
        ...state, 
        liked : [...state.liked, ...action.data],
      }
        // return state;
    }

    const [state,dispatch]=useReducer(reducer,initialState);
    
    const LikeButton = () => {
      const [liked, setLiked] = useState(false);
      
      const clickhandler=()=>{
        console.log("onclick")
        setLiked((isLiked) => !isLiked)
        console.log(liked)
        if(liked)
        {
          return(
            <Data.Provider value={props}>
                <Favorites/>
            </Data.Provider>
          )
        }
      }
        return (
          <Pressable onPress={clickhandler} style={{marginLeft:15}}>
            <MaterialCommunityIcons
              name={liked ? "heart" : "heart-outline"}
              size={32}
              color={liked ? "red" : "black"}
            />
          </Pressable>
        );
      };
      
      const Installbutton = () => {
          const [install,setinstalled]=useState(false);
          const installpressed=() =>{ 
            setinstalled((isInstalled) => !isInstalled)            
          }
          return (
            <Pressable onPress={installpressed} style={{marginLeft:15}}>
              <MaterialCommunityIcons
                name={install ? "download" : "download"}
                size={32}
                color={install ? "green" : "black"}
              />
            </Pressable>
          );
        };

        // const data = useContext(Data)
        // const isFavorite = cnic && data.favorites && data.favorites.find(item => item.cnic === cnic) ? true : false 

        return(
            <View style={{flexDirection:'row'}}>
                <Pressable style={{marginLeft:15}} onPress={e => {
                  console.log('clicked')
                  onFavorite(e)
                }}>
                  <MaterialCommunityIcons
                    name={isFavorite ? "heart" : "heart-outline"}
                    size={32}
                    color={"black"}
                  />
                </Pressable>
                <Pressable style={{marginLeft:15}} onPress={e => {
                  console.log('pressed')
                  onDownload(e)
                }}>
                  <MaterialCommunityIcons
                    name={"download"}
                    size={32}
                    color={"black"}
                  />
                </Pressable>
            </View>
        )
}

export default Buttons;
export {Data};