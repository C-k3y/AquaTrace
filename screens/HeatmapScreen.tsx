import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeatmapGrid from '../components/HeatMapGrid';
import { colors, spacing, typography } from '../lib/theme';

export default function HeatmapScreen() {
const leakData = [
{ value: 2, location: 'Zone A1' },
{ value: 8, location: 'Zone A2' },
{ value: 5, location: 'Zone B1' },
{ value: 35, location: 'Zone B2' },
{ value: 15, location: 'Zone C1' },
{ value: 3, location: 'Zone C2' },
{ value: 78, location: 'Zone D1' },
{ value: 12, location: 'Zone D2' },
];

const contaminationData = [
{ value: 18, location: 'North Wing' },
{ value: 42, location: 'Main Pipeline' },
{ value: 8, location: 'East District' },
{ value: 65, location: 'West District' },
{ value: 25, location: 'South Gateway' },
{ value: 52, location: 'Central Hub' },
{ value: 15, location: 'North Gateway' },
{ value: 38, location: 'East Hub' },
];

return (
<SafeAreaView style={styles.container} edges={['top']}>
<View style={styles.header}>
<Text style={styles.headerTitle}>Leak & Quality Heatmap</Text>
<Text style={styles.headerSubtitle}>Real-time network analysis</Text>
</View>

<ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
<View style={styles.content}>
<HeatmapGrid
title="Leak Detection Heatmap"
cells={leakData}
maxValue={100}
/>

<View style={styles.info}>
<Text style={styles.infoTitle}>Leak Analysis</Text>
<Text style={styles.infoText}>
• Zone D1 shows critical leak activity - immediate inspection recommended
</Text>
<Text style={styles.infoText}>
• AI models predict 92% confidence for main distribution line failure
</Text>
<Text style={styles.infoText}>
• Blockchain verification confirms data integrity across all sensors
</Text>
</View>

<HeatmapGrid
title="Contamination Index Heatmap"
cells={contaminationData}
maxValue={100}
/>

<View style={styles.info}>
<Text style={styles.infoTitle}>Contamination Status</Text>
<Text style={styles.infoText}>
• West District and Central Hub require urgent attention
</Text>
<Text style={styles.infoText}>
• Predictive model suggests contamination source in West District hub
</Text>
<Text style={styles.infoText}>
• All readings are blockchain-certified for regulatory compliance
</Text>
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
backgroundColor: colors.aqua,
},
headerTitle: {
...(typography.h2 as any),
color: colors.white,
fontWeight: '700',
},
headerSubtitle: {
...(typography.body as any),
color: colors.paleTeal,
marginTop: spacing.xs,
},
scrollView: {
flex: 1,
},
content: {
paddingVertical: spacing.md,
},
info: {
marginHorizontal: spacing.md,
marginVertical: spacing.lg,
paddingHorizontal: spacing.md,
paddingVertical: spacing.md,
backgroundColor: colors.white,
borderRadius: 12,
borderLeftWidth: 4,
borderLeftColor: colors.aqua,
},
infoTitle: {
...(typography.h4 as any),
color: colors.darkText,
marginBottom: spacing.sm,
fontWeight: '600',
},
infoText: {
...(typography.body as any),
color: colors.lightText,
marginVertical: spacing.xs,
lineHeight: 22,
},
});
