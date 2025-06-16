import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Routes } from "./Routes";
import HomeScreen from "../src/screens/Home/HomeScreen";
import ContactScreen from "../src/screens/Contacts/ContactsScreen";
import ProfileScreen from "../src/screens/Profile/ProfileScreen";
import SettingsScreen from "../src/screens/Settings/SettingsScreen";

const Tab = createBottomTabNavigator();


const BottomNavigation = () => {

    return (
        <Tab.Navigator>
            <Tab.Screen 
                name={Routes.Home}
                component={HomeScreen}
            />
            
            <Tab.Screen 
                name={Routes.Contacts}
                component={ContactScreen}
            />
            
            <Tab.Screen 
                name={Routes.Profile}
                component={ProfileScreen}
            />
            
            <Tab.Screen 
                name={Routes.Settings}
                component={SettingsScreen}
            />
            
        </Tab.Navigator>
    );
};

export default BottomNavigation;