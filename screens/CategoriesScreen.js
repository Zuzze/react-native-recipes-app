import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";
import { CATEGORIES } from "../data/mock-data";
import Theme from "../constants/theme";
import { Platform } from "@unimodules/core";

/**
 * Screen to display recipe categories
 * @param {*} props
 */
const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    return (
      <TouchableOpacity style={styles.gridItem}>
        <View>
          <Text>{itemData.item.title}</Text>
          <Button
            title="Show"
            onPress={() => {
              props.navigation.navigate({ routeName: "Recipes" });
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      keyExtractor={item => item.id}
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
    />
  );
};

CategoriesScreen.propTypes = {};

CategoriesScreen.defaultProps = {};

CategoriesScreen.navigationOptions = {
  // see header style documentation at https://reactnavigation.org/docs/headers/
  headerTitle: "Categories",
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Theme.header : Theme.background
  },
  headerTintColor: Theme.headerText
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  gridItem: {
    margin: 15,
    flex: 1,
    height: 150
  }
});

export default CategoriesScreen;
