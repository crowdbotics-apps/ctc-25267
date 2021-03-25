import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import ArticleList218689Navigator from '../features/ArticleList218689/navigator';
import ArticleList218688Navigator from '../features/ArticleList218688/navigator';
import ArticleList218671Navigator from '../features/ArticleList218671/navigator';
import ArticleList218670Navigator from '../features/ArticleList218670/navigator';
import ArticleList218669Navigator from '../features/ArticleList218669/navigator';
import Settings218654Navigator from '../features/Settings218654/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
ArticleList218689: { screen: ArticleList218689Navigator },
ArticleList218688: { screen: ArticleList218688Navigator },
ArticleList218671: { screen: ArticleList218671Navigator },
ArticleList218670: { screen: ArticleList218670Navigator },
ArticleList218669: { screen: ArticleList218669Navigator },
Settings218654: { screen: Settings218654Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
