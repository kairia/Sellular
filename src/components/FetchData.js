import React, { Component } from 'react';

import { StyleSheet, ScrollView, ActivityIndicator, View } from 'react-native';
import firebase from '../../firebase';


class FetchListScreen extends Component {

    constructor() {
        super();
        this.docs = firebase.firestore().collection('/0');
        this.state = {
          isLoading: true,
          students: []
        };
      }
    
      componentDidMount() {
        this.unsubscribe = this.docs.onSnapshot(this.getStudentsData);
      }
    
      componentWillUnmount(){
        this.unsubscribe();
      }
    
      getStudentsData = (querySnapshot) => {
        const students = [];
        querySnapshot.forEach((res) => {
          const { name, designation } = res.data();
          students.push({
            key: res.id,
            name,
            designation
          });
        });
        this.setState({
          students,
          isLoading: false
       });
      }
    
    
    
     
    }
    
    const styles = StyleSheet.create({
      wrapper: {
       flex: 1,
       paddingBottom: 22
      },
      loader: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',    
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }
    })

export default FetchListScreen;
