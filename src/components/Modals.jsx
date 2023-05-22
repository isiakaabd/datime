import { Modal, StyleSheet, View } from "react-native";

const Modals = ({ open, handleClose, children }) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={open}
        visible={open}
        onRequestClose={handleClose}
      >
        {children}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
});

export default Modals;
