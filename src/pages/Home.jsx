import {
  ScrollView,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight,
  KeyboardAvoidingView,
  Dimensions,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import images from "../assets";
import { COLORS, FONTS } from "../utils/fonts";
import { ButtonWithIcon, Card, NetworkCard } from "../components";
import { SHADOWS } from "../utils/fonts";
import { useState } from "react";
import Modals from "../components/Modals";
const Home = () => {
  const { icon, logo } = images;
  const { height } = Dimensions.get("window");
  const [modal, setModal] = useState(false);
  const networks = [
    {
      name: "MTN",
      color: COLORS.black,
    },
    {
      name: "GLO",
      color: COLORS.green,
    },
    {
      name: "Airtel",
      color: "red",
    },
    {
      name: "Etisalat",
      color: "green",
    },
  ];
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
          <View style={[styles.account, { backgroundColor: COLORS.green30 }]}>
            <Text style={styles.network}>Select Your Network</Text>
          </View>
          <View
            style={[
              styles.account,
              { flexDirection: "row", flexWrap: "wrap", gap: 10 },
            ]}
          >
            {networks.slice(0, 4).map((item, index) => (
              <View style={{ width: "50%" }}>
                <NetworkCard item={item} key={index} />
              </View>
            ))}
          </View>
          <View
            style={[
              styles.account,
              { flexDirection: "row", flexWrap: "nowrap", gap: 5 },
            ]}
          >
            {networks.slice(2).map((item, index) => (
              <View style={{ flex: 0.5 }}>
                <NetworkCard item={item} key={index} />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
      {modal && (
        <Modals open={modal} handleClose={() => setModal(false)}>
          <View
            style={{
              paddingHorizontal: 20,
              paddingVertical: 15,
            }}
          >
            <Text style={styles.available}>Service Available</Text>
            <View>
              <Card title={"Buy Data"} subTitle="For all networks" />
            </View>
            <View style={{ flexWrap: "nowrap", gap: 20, flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <Card title={" Electricity Bills"} subTitle="" />
              </View>
              <View style={{ flex: 1 }}>
                <Card title={"Buy Airtime"} subTitle="For all networks" />
              </View>
            </View>
            <View style={{ flexWrap: "nowrap", gap: 20, flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <Card
                  title={" Airtime to Cash"}
                  subTitle="Convert excess airtime"
                />
              </View>
              <View style={{ flex: 1 }}>
                <Card title={"TV Cable Subscription"} subTitle="" />
              </View>
            </View>
          </View>
          {/* </ScrollView> */}
          {/* </KeyboardAvoidingView> */}
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
  network: {
    color: COLORS.black,
    fontFamily: FONTS.MulishBold,
    fontSize: 18,
  },
  available: {
    fontSize: 22,
    textAlign: "center",
    fontFamily: FONTS.MulishBold,
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
