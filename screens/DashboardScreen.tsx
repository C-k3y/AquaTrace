import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StatCard from '../components/StatCard';
import SimpleChart from '../components/SimpleChart';
import WaterMap from '../components/WaterMap';
import { colors, spacing, typography } from '../lib/theme';

export default function DashboardScreen() {
  const waterZones = [
    { id: '1', name: 'Zone A', quality: 92, temperature: 18, pressure: 65, status: 'healthy' as const },
    { id: '2', name: 'Zone B', quality: 85, temperature: 22, pressure: 72, status: 'healthy' as const },
    { id: '3', name: 'Zone C', quality: 78, temperature: 25, pressure: 68, status: 'warning' as const },
    { id: '4', name: 'Zone D', quality: 42, temperature: 28, pressure: 45, status: 'critical' as const },
    { id: '5', name: 'Zone E', quality: 88, temperature: 20, pressure: 70, status: 'healthy' as const },
    { id: '6', name: 'Zone F', quality: 71, temperature: 24, pressure: 62, status: 'warning' as const },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>AquaTrace</Text>
          <Text style={styles.headerSubtitle}>Water Intelligence Network</Text>
        </View>

        {/* Water Map */}
        <View style={styles.section}>
          <WaterMap zones={waterZones} />
        </View>

        {/* Quick Stats */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Overview</Text>
          <StatCard
            title="Water Quality Index"
            value="87"
            unit="/100"
            trend={{ value: 3, isPositive: true }}
            backgroundColor={colors.paleTeal}
          />
          <StatCard
            title="Active Sensors"
            value="1,240"
            trend={{ value: 12, isPositive: true }}
            backgroundColor={colors.lightBlue}
          />
          <StatCard
            title="System Health"
            value="98.4"
            unit="%"
            trend={{ value: 1, isPositive: true }}
            backgroundColor="#E0F7FA"
          />
        </View>

        {/* Water Usage Chart */}
        <View style={styles.section}>
          <SimpleChart
            title="Daily Water Usage"
            data={[
              { label: 'Mon', value: 65 },
              { label: 'Tue', value: 72 },
              { label: 'Wed', value: 58 },
              { label: 'Thu', value: 81 },
              { label: 'Fri', value: 74 },
              { label: 'Sat', value: 45 },
            ]}
            type="bar"
          />
        </View>

        {/* Water Quality Trend */}
        <View style={styles.section}>
          <SimpleChart
            title="Water Quality Trend (Weekly)"
            data={[
              { label: 'Mon', value: 82 },
              { label: 'Tue', value: 85 },
              { label: 'Wed', value: 83 },
              { label: 'Thu', value: 87 },
              { label: 'Fri', value: 89 },
              { label: 'Sat', value: 87 },
            ]}
            type="line-simple"
          />
        </View>

        {/* System Status */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Network Status</Text>
          <View style={styles.statusGrid}>
            <View style={[styles.statusCard, { backgroundColor: colors.paleTeal }]}>
              <Text style={styles.statusValue}>24/7</Text>
              <Text style={styles.statusLabel}>Monitoring</Text>
            </View>
            <View style={[styles.statusCard, { backgroundColor: colors.lightBlue }]}>
              <Text style={styles.statusValue}>12</Text>
              <Text style={styles.statusLabel}>Zones</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: colors.lightGray,
},
scrollView: {
flex: 1,
},
header: {
paddingHorizontal: spacing.md,
paddingVertical: spacing.lg,
backgroundColor: colors.deepOcean,
},
headerTitle: {
    ...(typography.h2 as any),
color: colors.white,
fontWeight: '700',
},
headerSubtitle: {
    ...(typography.body as any),
color: colors.aquaLight,
marginTop: spacing.xs,
},
section: {
paddingHorizontal: spacing.md,
paddingVertical: spacing.md,
},
sectionTitle: {
    ...(typography.h4 as any),
color: colors.darkText,
marginBottom: spacing.md,
fontWeight: '600',
},
statusGrid: {
    flexDirection: 'row',
    // `gap` is not universally supported in RN; use space-between and small horizontal margins on cards
    justifyContent: 'space-between',
},
statusCard: {
flex: 1,
paddingVertical: spacing.lg,
paddingHorizontal: spacing.md,
borderRadius: 12,
alignItems: 'center',
justifyContent: 'center',
    marginHorizontal: spacing.xs,
},
statusValue: {
    ...(typography.h3 as any),
color: colors.deepOcean,
fontWeight: '700',
},
statusLabel: {
    ...(typography.body as any),
color: colors.lightText,
marginTop: spacing.xs,
},
});