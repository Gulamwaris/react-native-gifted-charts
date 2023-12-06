import React from 'react';
import {View} from 'react-native';

export const Pointer = props => {
  const {
    pointerX,
    pointerYLocal,
    pointerComponent,
    pointerHeight,
    pointerRadius,
    pointerWidth,
    pointerItemLocal,
    pointerColorLocal,
  } = props;
  return (
    <View
      style={{
        position: 'absolute',
        left: pointerX + (pointerX.pointerShiftX || 0),
        top: pointerYLocal || "42%",
        zIndex:10000000
      }}>
      {pointerComponent ? (
        pointerComponent()
      ) : (
        <>
        <View
          style={{
            height: pointerHeight || pointerRadius * 2,
            width: pointerWidth || pointerRadius * 2,
            marginTop: pointerItemLocal.pointerShiftY || 0,
            backgroundColor: '#c1dff6',
            borderRadius: pointerRadius || 0,
            display:'flex',
            justifyContent: 'center',
            alignItems:'center'
          }}
          
        >
          <View style={{
            height:pointerRadius * 1.3,
            width:pointerRadius *1.3,
            backgroundColor:'#e6f2fb',
            borderRadius:50,
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
          }}>
             <View style={{
            height:pointerRadius * 1.1,
            width:pointerRadius *1.1,
            backgroundColor:'#444f8b',
            borderRadius:50,
            
          }}></View>

          </View>

        </View>
        </>
        
      )}
    </View>
  );
};
