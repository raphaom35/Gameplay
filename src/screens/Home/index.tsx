import React,{useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { View,FlatList,Text } from 'react-native';

import { Appointment, AppointmentProps } from '../../components/Appointment';
import ButtonAdd from '../../components/ButtonAdd';
import CategorySelect from '../../components/CategorySelect';
import { ListDivider } from '../../components/ListDivider';
import ListHeader from '../../components/ListHeader';
import Profile from '../../components/Profile';
import Background from '../../components/Background';

 import { styles } from './styles';


 export default function Home() {
   const [category,setCategory] =useState('');
   const navigation = useNavigation();
    const appointment =[
      {
        id:'1',
        guild:{
          id:'1',
          name:'Lendarios',
          icon:null,
          owner:true,
        },
        category:'1',
        date:'22/06 as 20:40h',
        description:'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
      },
      {
        id:'2',
        guild:{
          id:'1',
          name:'Lendarios',
          icon:null,
          owner:true,
        },
        category:'1',
        date:'22/06 as 20:40h',
        description:'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
      }
    ]
   function handleCategorySelect(categoryId:string){
    categoryId===category?setCategory(''):setCategory(categoryId);

   }
   function handleAppointmentDetails() {
    navigation.navigate('AppointmentDetails');
  } 
  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate');
  }
  return (
      <Background>

        <View style={styles.header}>
          <Profile/>
          <ButtonAdd onPress={handleAppointmentCreate} />
        </View>
        <View>
          <CategorySelect categorySelected={category} 
          setCategory={handleCategorySelect}
          
          />
        </View>
        <View style={styles.content}>
          <ListHeader title="Partida agendadas" subtitle="Total 6"/>
          <FlatList
          data={appointment}
          keyExtractor={item =>item.id}
          renderItem={({item})=>(
            <Appointment data={item} 
            onPress={handleAppointmentDetails}
            />
          )}
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.matches} 
          showsVerticalScrollIndicator={false}
          
          
          />
        </View>
      </Background>
  );
}

