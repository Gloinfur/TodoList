import React, {useState} from 'react';
import { Platform, StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard, Alert} from 'react-native';
import Task from './components/Task';
import {COLORS} from './assets/colors.js';


export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    console.log(task)
    if (task == null) {
      console.log("Task is null. Won't add that.")
      Alert.alert("Won't add an empty task!")
      return
    }
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null)
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      
      {/* Today's Tasks */}
      {/* COLORS #222831 #393E46 #FD7014 #EEEEEE*/}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Heutige Aufgaben</Text>
        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity onPress={() => completeTask(index)}>
                <Task key={index} text={item} />
              </TouchableOpacity>
            )
          })}
        </View>
      </View>

      {/* Write Task */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"} 
        style={styles.writeTaskWrapper}>
          <TextInput style={styles.input} placeholder={"Write a Task"} placeholderTextColor="#EEEEEE" value={task} onChangeText={text => setTask(text)}></TextInput>
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
      </KeyboardAvoidingView>


    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkGrey,
  },

  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.orange,
  },
  items: {
    marginTop: 30,
  },

  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  input: {
    color: COLORS.lightGrey,
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: COLORS.orange,
    borderRadius: 20,
    borderWidth: 1,
  },

  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: COLORS.orange,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: "center",
    textAlign: "center",
  },

  addText: {
    color: COLORS.lightGrey,
    fontSize: 40,
    fontWeight: "bold",
  },
});