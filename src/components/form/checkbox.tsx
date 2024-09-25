import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { CheckBox } from "@rneui/base";
import Checked from "../../assets/Images/checked.svg";
import UnChecked from "../../assets/Images/unChecked.svg";
import { colors } from "../../styles/colores";
import { globalStyles } from "../../utils/globalStyle";

const CustomCheckbox = ({
  title,
  titleSize = 18,
  titleFamily = "Gilroy-SemiBold",
  titleColor = colors.black,
  checkSize = 24,
  flex=1
}: any) => {
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);

  return (
    <View style={{ flex: flex }}>
      <CheckBox
        containerStyle={{ flexDirection: "row", alignItems: "center" }}
        checked={checked}
        title={
          <Text
            style={{
              fontFamily: titleFamily,
              fontSize: titleSize,
              color: titleColor,
              marginLeft: 8, // Optional margin for spacing
            }}
          >
            {title}
          </Text>
        }
        onPress={toggleCheckbox}
        checkedIcon={<Checked width={checkSize} height={checkSize} />}
        uncheckedIcon={<UnChecked width={checkSize} height={checkSize} />}
      />
    </View>
  );
};

export default CustomCheckbox;

const styles = StyleSheet.create({});
