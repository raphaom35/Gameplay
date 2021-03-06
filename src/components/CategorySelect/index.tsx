import React,{ReactNode} from 'react';
import { ScrollView } from 'react-native';
import { styles } from './styles';
import {catergories} from '../../utils/categories' 
import Category from '../Category';

type Props ={
    categorySelected:string;
    setCategory:(categoryId:string)=>void;
    hasCheckBox?:boolean;
}

export function CategorySelect({categorySelected,setCategory,hasCheckBox=false}:Props) {
    
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
                    hasCheckBox={hasCheckBox}           
                />
            ))
        }
    </ScrollView>
  ) ;
}

export default CategorySelect;