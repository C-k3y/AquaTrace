import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StatCard from '../components/StatCard';
import SimpleChart from '../components/SimpleChart';
import { colors, spacing, typography } from '../lib/theme';

export default function UsageScreen() {
return (
<SafeAreaView style={styles.container} edges={['top']}>
<View style={styles.header}>
<Text style={styles.headerTitle}>Usage Analytics</Text>
<Text style={styles.headerSubtitle}>Consumption patterns & efficiency</Text>
</View>

<ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
<View style={styles.section}>
<Text style={styles.sectionTitle}>Current Period</Text>
<StatCard
title="Total Consumption"
value="2,458"
unit="M³"
trend={{ value: 8, isPositive: false }}
backgroundColor={colors.paleTeal}
/>
<StatCard
title="Peak Usage Hour"
value="8:00 AM"
backgroundColor={colors.lightBlue}
/>
<StatCard
title="Efficiency Rating"
value="94"
unit="%"
trend={{ value: 5, isPositive: true }}
backgroundColor="#E0F7FA"
/>
</View>

<View style={styles.section}>
<SimpleChart
title="Hourly Usage Pattern"
data={[
{ label: '12 AM', value: 15 },
{ label: '4 AM', value: 8 },
{ label: '8 AM', value: 95 },
{ label: '12 PM', value: 78 },
{ label: '4 PM', value: 62 },
{ label: '8 PM', value: 88 },
]}
type="bar"
/>
</View>

<View style={styles.section}>
<SimpleChart
title="Weekly Consumption Trend"
data={[
{ label: 'Week 1', value: 2100 },
{ label: 'Week 2', value: 2350 },
{ label: 'Week 3', value: 2200 },
{ label: 'Week 4', value: 2458 },
]}
type="line-simple"
/>
</View>

<View style={styles.section}>
<Text style={styles.sectionTitle}>District Breakdown</Text>
<View style={styles.districtList}>
{[
{ name: 'Downtown Zone', usage: 450, percent: 18 },
{ name: 'Industrial Hub', usage: 620, percent: 25 },
{ name: 'Residential North', usage: 520, percent: 21 },
{ name: 'Commercial District', usage: 485, percent: 20 },
{ name: 'Agricultural Zone', usage: 383, percent: 16 },
].map((district, idx) => (
<View key={idx} style={styles.districtRow}>
<View>
<Text style={styles.districtName}>{district.name}</Text>
<Text style={styles.districtUsage}>{district.usage} M³</Text>
</View>
<View style={styles.progressBar}>
<View
style={[
styles.progressFill,
{ width: `${district.percent * 5}%` },
]}
/>
</View>
<Text style={styles.districtPercent}>{district.percent}%</Text>
</View>
))}
</View>
</View>

<View style={styles.section}>
<Text style={styles.sectionTitle}>Predictions</Text>
<View style={styles.predictionCard}>
<Text style={styles.predictionTitle}>AI Forecast (Next 7 Days)</Text>
<Text style={styles.predictionValue}>2,520 M³</Text>
<Text style={styles.predictionNote}>Expected consumption based on usage patterns and weather data</Text>
</View>
<View style={[styles.predictionCard, { backgroundColor: colors.lightBlue }]}>
<Text style={styles.predictionTitle}>Anomaly Detection</Text>
<Text style={styles.predictionStatus}>✓ No anomalies detected</Text>
<Text style={styles.predictionNote}>All readings within expected parameters</Text>
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
header: {
paddingHorizontal: spacing.md,
paddingVertical: spacing.lg,
backgroundColor: colors.skyBlue,
},
headerTitle: {
		...(typography.h2 as any),
color: colors.white,
fontWeight: '700',
},
headerSubtitle: {
		...(typography.body as any),
color: colors.lightBlue,
marginTop: spacing.xs,
},
scrollView: {
flex: 1,
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
districtList: {
backgroundColor: colors.white,
borderRadius: 12,
padding: spacing.md,
		// RN doesn't support `gap` reliably; spacing is applied to `districtRow`
},
districtRow: {
flexDirection: 'row',
alignItems: 'center',
		// replace gap with margins on child elements
		marginBottom: spacing.md,
},
districtName: {
		...(typography.body as any),
color: colors.darkText,
fontWeight: '500',
},
districtUsage: {
		...(typography.caption as any),
color: colors.lightText,
marginTop: spacing.xs,
},
progressBar: {
flex: 1,
height: 8,
backgroundColor: colors.borderGray,
borderRadius: 4,
overflow: 'hidden',
},
progressFill: {
height: '100%',
backgroundColor: colors.aqua,
},
districtPercent: {
		...(typography.caption as any),
color: colors.aqua,
fontWeight: '600',
minWidth: 30,
},
predictionCard: {
backgroundColor: colors.paleTeal,
borderRadius: 12,
padding: spacing.md,
marginVertical: spacing.sm,
},
predictionTitle: {
		...(typography.caption as any),
color: colors.lightText,
marginBottom: spacing.xs,
},
predictionValue: {
		...(typography.h3 as any),
color: colors.deepOcean,
fontWeight: '700',
marginVertical: spacing.sm,
},
predictionStatus: {
		...(typography.h4 as any),
color: colors.success,
fontWeight: '600',
marginVertical: spacing.sm,
},
predictionNote: {
		...(typography.caption as any),
		color: colors.lightText,

},
});
