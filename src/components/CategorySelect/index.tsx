import React,{ReactNode} from 'react';
import { ScrollView } from 'react-native';
import { styles } from './styles';
import {catergories} from '../../utils/categories' 
import Category from '../Category';

type Props ={
    categorySelected:string;
    setCategory:(categoryId:string)=>void;
}

export function CategorySelect({categorySelected,setCategory}:Props) {
    
  return(
    <ScrollView style={styles.container} horizontal
    showsHorizontalScrollIndicator={false} 
    contentContainerStyle={{paddingRight:40}}
    >
        {
            catergories.map(category=>(
                <Category 
                    key={category.id}
                    title={category.title}
                    icon= {category.icon}
                    checked={category.id=== categorySelected}  
                    onPress={()=>setCategory(category.id)}            
                />
            ))
        }
    </ScrollView>
  ) ;
}

export default CategorySelect;