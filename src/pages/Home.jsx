import {
  ScrollView,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight,
  Dimensions,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import images from "../assets";
import { COLORS, FONTS } from "../utils/fonts";
import { ButtonWithIcon } from "../components";
import { SHADOWS } from "../utils/fonts";
import { useState } from "react";
import Modals from "../components/Modals";
const Home = () => {
  const { icon, logo } = images;
  const { height } = Dimensions.get("window");
  const [modal, setModal] = useState(false);
  return (
    <>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ marginTop: 20 }}
        >
          <View style={[styles.header, { padding: 20, paddingBottom: 0 }]}>
            <View style={styles.header}>
              <Image source={icon} style={styles.img2} resizeMode="contain" />
              <Text>Hi Sam</Text>
            </View>
            <View style={{ marginLeft: "auto" }}>
              <Image source={logo} style={styles.img2} resizeMode="contain" />
            </View>
          </View>

          <View style={styles.account}>
            <Text style={{ color: COLORS.lighterGrey }}>
              Your Account Balance
            </Text>
            <View style={{ marginTop: 5 }}>
              <Text style={styles.superscript}>
                0.00
                <Text style={styles.subscript}>NGN</Text>
              </Text>
            </View>
          </View>
          <View
            style={[styles.account, { flex: 1, gap: 30, flexDirection: "row" }]}
          >
            <ButtonWithIcon
              text="Send"
              icon={"gift"}
              backgroundColor={"#fff"}
            />
            <View>
              <ButtonWithIcon
                text="Fund Wallet"
                icon={"wallet"}
                backgroundColor={COLORS.green100}
              />
            </View>
          </View>
          <View style={styles.block}>
            <FontAwesome5
              name={"square"}
              size={28}
              style={{ color: COLORS.green70 }}
            />
            <Text style={styles.service}>Quick Services</Text>
          </View>
          <View
            style={[
              styles.account,
              { flexDirection: "row", alignItems: "center" },
            ]}
          >
            <Image
              source={images.service}
              style={styles.data}
              resizeMode="contain"
            />
            <Image
              source={images.service1}
              style={styles.data}
              resizeMode="contain"
            />
            <TouchableHighlight
              style={styles.button}
              onPress={() => setModal(true)}
            >
              <FontAwesome5 name={"plus"} size={15} style={{}} />
            </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
      {modal && (
        <Modals open={modal} handleClose={() => setModal(true)}>
          <View style={{ top: height / 2 }}>
            <Text>Welcome</Text>
          </View>
        </Modals>
      )}
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: COLORS.whiteGrey,
    padding: 12,
    borderRadius: 4,
    ...SHADOWS.dark,
  },
  service: {
    color: "#AAAAAA",
    fontSize: 16,
    marginLeft: 10,
    fontFamily: FONTS.MulishBold,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  superscript: {
    fontSize: 40,
    // lineHeight: 40,
    fontFamily: FONTS.MulishBold,
  },
  block: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: COLORS.black,
  },
  subscript: {
    fontSize: 18,
    // lineHeight: 18,
    fontFamily: FONTS.MulishSemiBold,
  },
  data: {
    minHeight: 90,
    borderRadius: 8,
    width: "40%",
    marginRight: 10,
  },
  account: { padding: 20 },
});
