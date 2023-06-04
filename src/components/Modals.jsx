import {
  Modal,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { SHADOWS } from "../utils/fonts";

const Modals = ({ open, handleClose, children }) => {
  console.log(open);
  return (
    <Modal
      animationType="slide"
      transparent={open}
      visible={open}
      onRequestClose={handleClose}
    >
      <View style={styles.centeredView}>{children}</View>
      {/* </View> */}
      {/* <TouchableWithoutFeedback style={{ backgroundColor: "red", flex: 1 }}>
           </TouchableWithoutFeedback> */}
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    height: "100%",
    // height: 500,
    backgroundColor: "#fff",
    height: "60%",
    width: "100%",
    // backgroundColor: "#25292e",
    // borderTopRightRadius: 18,
    // borderTopLeftRadius: 18,
    position: "absolute",
    bottom: 0,
    boxShadow: SHADOWS.medium,
  },
});

export default Modals;
