import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ActionSheet from "react-native-actions-sheet";

const ActionSheetModule = ({ actionRef, children }: any) => {
  return (
    <View>
      <ActionSheet ref={actionRef} containerStyle={styles.actionSheet}>
        {children}
      </ActionSheet>
    </View>
  );
};

export default ActionSheetModule;

const styles = StyleSheet.create({
  actionSheet: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
});
