import React, {useState, createRef, useEffect} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  Button,
  Alert,
  Modal,
  Pressable,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';


let configurations = {
  owner: {
    owner_name: '',
    owner_password: '',
    MailId: '',
    PhoneNumber: '',
    Property_name: '',
    Area: '',
    State: '',
    country: '',
    Street: '',
    Door_Number: '',
  },
};
import {openDatabase} from 'react-native-sqlite-storage';
var db = openDatabase({name: 'UserDatabase.db'});

import {check_password, read_store_async} from './Functions';
import {useFocusEffect} from '@react-navigation/native';
const ModifyOwner = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [OwnerName, setOwnerName] = useState('');
  const [password, setpassword] = useState('');
  const [MailId, setMailId] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [Property_name, setProperty_name] = useState('');
  const [Street, setStreet] = useState('');
  const [Area, setArea] = useState('');
  const [State, setState] = useState('');
  const [country, setcountry] = useState('');
  const [Door_Number, setDoor_Number] = useState('');
  const [owner, setowner] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      
    }, []),
  );

  

  const handleSubmitPress = async () => {
    setModalVisible(!modalVisible);
    if (
      !OwnerName ||
      !password ||
      !MailId ||
      !PhoneNumber ||
      !Property_name ||
      !Area ||
      !State ||
      !country ||
      !Street ||
      !Door_Number
    ) {
      alert('Please fill all the fields');
      return;
    }

    configurations.owner.owner_name = OwnerName.toUpperCase();
    configurations.owner.owner_password = password.toUpperCase();
    configurations.owner.MailId = MailId.toUpperCase();
    configurations.owner.PhoneNumber = PhoneNumber.toUpperCase();
    configurations.owner.Property_name = Property_name.toUpperCase();
    configurations.owner.Area = Area.toUpperCase();
    configurations.owner.State = State.toUpperCase();
    configurations.owner.country = country.toUpperCase();
    configurations.owner.Street = Street.toUpperCase();
    configurations.owner.Door_Number = Door_Number.toUpperCase();

  
   
    let data2 = JSON.stringify(configurations);
    if (data2 != null) {
      let reg = await read_store_async('owner_event', data2);
      console.log(reg);
      if (reg == 'Data is updated') {
        Alert.alert(
          'Success',
          'Data is updated',
          
          [
            {
              text: 'Ok',
              onPress: () => navigation.navigate('FirstPage'),
            },
          ],
          {cancelable: false},
        );
      } else {
        Alert.alert(
          'Failure',
          'Data is not updated',
          [
            {
              text: 'Ok',
              onPress: () => navigation.navigate('FirstPage'),
            },
          ],
          {cancelable: false},
        );
      }
    }
  };

  return (
    <ScrollView>
      <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>
        Owner registration Screen
      </Text>
      <View
        style={{
          flex: 1,
          height: 40,
          marginTop: 20,
          marginLeft: 35,
          marginRight: 35,
          margin: 10,
        }}>
        <TextInput
          style={{
            borderWidth: 2,
          }}
          placeholder="Owner Name" //{owner}
          onChangeText={OwnerName => setOwnerName(OwnerName)}
        />
      </View>
      <View
        style={{
          flex: 1,
          height: 40,
          marginTop: 20,
          marginLeft: 35,
          marginRight: 35,
          margin: 10,
        }}>
        <TextInput
          style={{
            borderWidth: 2,
            padding: 10,
          }}
          placeholder="Enter password"
          onChangeText={password => setpassword(password)}
        />
      </View>
      <View
        style={{
          flex: 1,
          height: 40,
          marginTop: 20,
          marginLeft: 35,
          marginRight: 35,
          margin: 10,
        }}>
        <TextInput
          style={{
            borderWidth: 2,
          }}
          placeholder="Mail Id"
          onChangeText={MailId => setMailId(MailId)}
        />
      </View>
      <View
        style={{
          flex: 1,
          height: 40,
          marginTop: 20,
          marginLeft: 35,

          marginRight: 35,
          margin: 10,
        }}>
        <TextInput
          style={{
            borderWidth: 2,
          }}
          placeholder="Phone Number"
          keyboardType="numeric"
          onChangeText={PhoneNumber => setPhoneNumber(PhoneNumber)}
        />
      </View>
      <View
        style={{
          flex: 1,
          height: 40,
          marginTop: 20,
          marginLeft: 35,
          marginRight: 35,
          margin: 10,
        }}>
        <TextInput
          style={{
            borderWidth: 2,
            padding: 10,
          }}
          placeholder="Property_name"
          onChangeText={Property_name => setProperty_name(Property_name)}
        />
      </View>
      <View
        style={{
          flex: 1,
          height: 40,
          marginTop: 20,
          marginLeft: 35,
          marginRight: 35,
          margin: 10,
        }}>
        <TextInput
          style={{
            borderWidth: 2,
            padding: 10,
          }}
          placeholder="City/Town/Village"
          onChangeText={Area => setArea(Area)}
        />
      </View>
      <View
        style={{
          flex: 1,
          height: 40,
          marginTop: 20,
          marginLeft: 35,
          marginRight: 35,
          margin: 10,
        }}>
        <TextInput
          style={{
            borderWidth: 2,
            padding: 10,
          }}
          placeholder="State"
          onChangeText={State => setState(State)}
        />
      </View>
      <View
        style={{
          flex: 1,
          height: 40,
          marginTop: 20,
          marginLeft: 35,
          marginRight: 35,
          margin: 10,
        }}>
        <TextInput
          style={{
            borderWidth: 2,
            padding: 10,
          }}
          placeholder="Country"
          onChangeText={country => setcountry(country)}
        />
      </View>
      <View
        style={{
          flex: 1,
          height: 40,
          marginTop: 20,
          marginLeft: 35,
          marginRight: 35,
          margin: 10,
        }}>
        <TextInput
          style={{
            borderWidth: 2,
            padding: 10,
          }}
          placeholder="Street"
          onChangeText={Street => setStreet(Street)}
        />
      </View>
      <View
        style={{
          flex: 1,
          height: 40,
          marginTop: 20,
          marginLeft: 35,
          marginRight: 35,
          margin: 10,
        }}>
        <TextInput
          style={{
            borderWidth: 2,
            padding: 10,
          }}
          placeholder="Apartment Number/House Number"
          onChangeText={Door_Number => setDoor_Number(Door_Number)}
        />
      </View>

      <Pressable style={styles.button} onPress={handleSubmitPress}>
        <Text style={styles.textStyle}>SUBMIT</Text>
      </Pressable>
    </ScrollView>
  );
};

export default ModifyOwner;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
    width: 400,
    marginTop: 16,
    justifyContent: 'center',
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
