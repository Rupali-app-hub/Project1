import { View, Text, Button, StyleSheet, ActivityIndicator, Modal} from 'react-native'
import React, { useState } from 'react'

const Loader = ({modalVisible, setModalVisible}) => {

  return (
    <View style={styles.centeredView}>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ActivityIndicator/>
        </View>
      </View>
    </Modal>
  </View>
  )
}

export default Loader

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
      
        borderRadius: 20,
        
        padding: 35,
        alignItems: 'center',
        justifyContent:'center',
        // shadowColor: '#000',
        // shadowOffset: {
        //   width: 0,
        //   height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 4,
        // elevation: 5,
      },
})