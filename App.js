import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  Modal,
} from "react-native";
import GoalList from "./components/GoalList";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
export default function App() {
  const [inputGoal, setInputGoal] = useState("");
  const [saveGoal, setSaveGoal] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  function TextInputEnter(textInput) {
    setInputGoal(textInput);
    console.log(inputGoal);
  }

  function saveGoalHandler() {
    if (inputGoal) {
      setSaveGoal((currentGoal) => [
        ...currentGoal,
        { id: Math.random().toString(), value: inputGoal },
      ]);
      setInputGoal("");
      setIsAddMode(false);
    }
  }
  function removeGoalList(goalId) {
    setSaveGoal((currentGoal) => {
      return currentGoal.filter((goal) => goal.id !== goalId);
    });
  }
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headingText}> 🏆 Goal 🏆 &nbsp; Reminder </Text>
      <View style={{ justifyContent: "center" }}>
        <Image style={styles.mainLogo} source={require("./assets/logo.png")} />
      </View>
      <View>
       
        🚀
        <TouchableOpacity
          style={styles.addNewModal}
          onPress={() => setIsAddMode(true)}
        >
          <Text style={styles.appButtonText}>Add New Goals ✔ </Text>
        </TouchableOpacity>
      </View>
      {/* Modal for add new goals */}

      <Modal visible={isAddMode} animationType="slide">
        <View
          style={{ backgroundColor: "#31087B", height: "100%", paddingTop: 20 }}
        >
          <View style={styles.inputContainer}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: "https://media4.giphy.com/media/PgCSFDNmuiXYmmb1ap/giphy.gif?cid=6c09b952b287239d71147a0f0926706f187e474ee8ac86a5&rid=giphy.gif&ct=s",
              }}
            />
            <View style={styles.QoutesContainer}>
              <Text style={styles.QoutesText}>
                True success is all about working towards meaningful goals and
                dreams.
              </Text>
            </View>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your today's goal here"
              onChangeText={TextInputEnter}
              value={inputGoal}
            />
            <View
              style={{
                flexDirection: "row",
                marginRight: 30,
              }}
            >
              <View>
                <TouchableOpacity
                  style={styles.appButtonContainer}
                  onPress={saveGoalHandler}
                >
                  <Text style={styles.appButtonText}>Add Goal </Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.backToHome}
                  onPress={() => setIsAddMode(false)}
                >
                  <Text
                    style={{
                      fontSize: 17,
                      color: "white",
                      textTransform: "uppercase",
                      fontWeight: "600",
                    }}
                  >
                    Back to home
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <FlatList
        keyExtractor={(item, index) => item.id}
        style={styles.goalListConatiner}
        data={saveGoal}
        renderItem={(itemData) => (
          <GoalList
            title={itemData.item.value}
            id={itemData.item.id}
            onDelete={removeGoalList}
          />
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#31087B",
    paddingTop: 100,
    //  paddingHorizontal: 20,
    padding: 20,
    alignItems: "center",
  },
  inputContainer: {
    // flex: 1,
    justifyContent: "center",
    backgroundColor: "#31087B",
    alignItems: "center",
  },
  textInput: {
    marginRight: 10,
    borderWidth: 1,
    width: "80%",
    padding: 10,
    backgroundColor: "#d3d3d3",
    elevation: 5,
    borderRadius: 5,

    color: "black",
    marginBottom: 20,
    fontSize: 17,
    fontWeight: "600",
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#0096FF",
    borderRadius: 5,
    paddingVertical: 14,
    color: "white",
    paddingHorizontal: 20,
    marginBottom: 20,
    marginLeft: 20,
  },
  addNewModal: {
    elevation: 10,
    backgroundColor: "#5800FF",
    borderRadius: 5,
    paddingVertical: 14,
    paddingHorizontal: 10,
  },
  backToHome: {
    elevation: 8,
    backgroundColor: "#395B64",
    borderRadius: 5,
    paddingVertical: 14,
    color: "white",
    paddingHorizontal: 20,
    marginBottom: 20,
    marginLeft: 20,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  tinyLogo: {
    width: 150,
    height: 150,

    margin: "auto",
  },
  goalListConatiner: {
    width: "100%",
  },
  headingText: {
    fontSize: 50,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
  mainLogo: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
  QoutesContainer: {
    padding: 25,
  },
  QoutesText: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
  },
});
