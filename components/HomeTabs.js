import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Customers from "./Customers";
import { Ionicons } from "@expo/vector-icons";
import ListCustomer from "./listCustomer";

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Customers"
        component={Customers}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="ListCustomer"
        component={ListCustomer}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="list" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
