import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'

const Home = () => {
    const route = useRoute()
    const [data, setData] = useState();
    
    const fetchData = async() =>{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${route.params?.name}`);
        const data = await res.json()
        data && setData(data)
        // alert(JSON.stringify(data , undefined , 4));
    }

    useEffect(() => {
      fetchData()
    }, [])
    
  return (
    <View>
      <Text>{data?.height}</Text>
      <Text>{data?.base_experience}</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})