import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context"
import DashboardScreen from "./screens/DashboardScreen"
import AlertsScreen from "./screens/AlertsScreen"
import HeatmapScreen from "./screens/HeatmapScreen"
import UsageScreen from "./screens/UsageScreen"
import { colors } from './lib/theme';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function DashboardTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.aqua,
        tabBarInactiveTintColor: colors.lightText,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopColor: colors.borderGray,
          paddingBottom: 4,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '500',
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color }: { color: string }) => <Text style={{ fontSize: 20, color }}>💧</Text>,
        }}
      />
      <Tab.Screen
        name="Alerts"
        component={AlertsScreen}
        options={{
          tabBarLabel: 'Alerts',
          tabBarIcon: ({ color }: { color: string }) => <Text style={{ fontSize: 20, color }}>⚠️</Text>,
        }}
      />
      <Tab.Screen
        name="Heatmap"
        component={HeatmapScreen}
        options={{
          tabBarLabel: 'Heatmap',
          tabBarIcon: ({ color }: { color: string }) => <Text style={{ fontSize: 20, color }}>🔥</Text>,
        }}
      />
      <Tab.Screen
        name="Usage"
        component={UsageScreen}
        options={{
          tabBarLabel: 'Usage',
          tabBarIcon: ({ color }: { color: string }) => <Text style={{ fontSize: 20, color }}>📊</Text>,
        }}
      />
    </Tab.Navigator>
  );
}

function RootStack() {
  return (
    <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen name="Tabs" component={DashboardTabs} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});