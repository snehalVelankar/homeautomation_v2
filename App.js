import React, {useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import OwnerRegistration from './pages/OwnerRegistration';
import ApplianceRegistration from './pages/ApplianceRegistration';
import LocationRegistration from './pages/LocationRegistration';
import Binding from './pages/Binding';
import ModifyOwner from './pages/ModifyOwner';
import DummyScreen from './pages/DummyScreen';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

import {openDatabase} from 'react-native-sqlite-storage';
var db = openDatabase({name: 'UserDatabase.db'});

function TabStack() {
  return (
    <Tab.Navigator
      initialRouteName="Controller"
      tabBarOptions={{
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#F8F8F8',
        style: {
          backgroundColor: '#633689',
        },
        labelStyle: {
          textAlign: 'center',
        },
        indicatorStyle: {
          borderBottomColor: '#87B56A',
          borderBottomWidth: 2,
        },
      }}>
      <Tab.Screen
        name="FirstPage"
        component={FirstPage}
        options={{
          tabBarLabel: 'Controller',
        }}
      />
      <Tab.Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          tabBarLabel: 'Registration',
        }}
      />
    </Tab.Navigator>
  );
}
const App = () => {
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='owner_reg'",
        [],
        function (tx, res) {
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS owner_reg', []);
            txn.executeSql(
              `CREATE TABLE IF NOT EXISTS owner_reg(
              owner_name TEXT,
              owner_password TEXT,
              MailId TEXT,
              PhoneNumber INT(15),
              Property_name TEXT, 
              Area TEXT,
              State TEXT,
              country TEXT,
              Street TEXT,
              Door_Number  TEXT)`,
              [],
            );
          }
        },
      );
    });

    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='location_reg'",
        [],
        function (tx, res) {
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS location_reg', []);
            txn.executeSql(
              `CREATE TABLE IF NOT EXISTS location_reg(location TEXT PRIMARY KEY)`,
              [],
            );
          }
        },
      );
    });

    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='appliance_reg'",
        [],
        function (tx, res) {
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS appliance_reg', []);
            txn.executeSql(
              `CREATE TABLE IF NOT EXISTS appliance_reg(appliance TEXT PRIMARY KEY)`,
              [],
            );
          }
        },
      );
    });

    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='binding_reg'",
        [],
        function (tx, res) {
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS binding_reg', []);
            txn.executeSql(
              `CREATE TABLE IF NOT EXISTS binding_reg(binding TEXT PRIMARY KEY)`,
              [],
            );
          }
        },
      );
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Controller"
        screenOptions={{
          headerStyle: {backgroundColor: '#633689'},
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold'},
        }}>
        <Stack.Screen
          name="TabStack"
          component={TabStack}
          options={{title: ' Home Automation'}}
        />

        <Stack.Screen
          name="OwnerRegistration"
          component={OwnerRegistration}
          options={{
            tabBarLabel: 'Owner Registration',
          }}
        />

        <Stack.Screen
          name="ModifyOwner"
          component={ModifyOwner}
          options={{
            tabBarLabel: ' Edit Owner Registration',
          }}
        />
        <Stack.Screen
          name="DummyScreen"
          component={DummyScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ApplianceRegistration"
          component={ApplianceRegistration}
          options={{
            tabBarLabel: 'Appliance Registration',
          }}
        />

        <Stack.Screen
          name="LocationRegistration"
          component={LocationRegistration}
          options={{
            tabBarLabel: 'Location Registration',
          }}
        />

        <Stack.Screen
          name="Binding"
          component={Binding}
          options={{
            tabBarLabel: 'Binding',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
