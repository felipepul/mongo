import { View,Text, FlatList } from "react-native";
import { styles } from "../assets/styles/styles";
import { Button } from "react-native-paper";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
export default function ListCustomer() {
    const [data, setData] = useState([]);
    const getCustomers = async()=>{
        const response = await axios.get(`http://127.0.0.1:3000/api/clientes`)
        setData(response.data)
    }

    return (
        <View style={styles.container}>
        <Button
          style={{ backgroundColor: "orange", marginTop:10 }}
          icon="view-list"
          mode="contained"
          onPress={getCustomers}
        >
        listar Clientes
        </Button>
            <Text>Listado de Clientes</Text>
            <FlatList 
              style={{ marginTop:10 }}
              data={data}
              renderItem = {({item}) =><Text style={{backgroundColor:'powderblue', marginTop:10,borderRadius:10,padding:10,textAlign:'center', }}>{item.nombre}</Text>}
            />
        </View>
    )
}

