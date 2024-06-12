import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CatalogScreen from '../screens/CatalogScreen';
import CartScreen from '../screens/CartScreen';
import AccountScreen from '../screens/AccountScreen';
import LogoutScreen from '../screens/LogoutScreen';
import ProductsScreen from '../screens/ProductsScreen';
import CartContext from '../context/CartContext';
import OrderStatusScreen from '../screens/OrderStatusScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Catalog" component={CatalogScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
      <Tab.Screen name="Logout" component={LogoutScreen} />
      <Tab.Screen name="OrderStatus" component={OrderStatusScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
