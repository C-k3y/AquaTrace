import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AlertCard from '../components/AlertCard';
import { colors, spacing, typography } from '../lib/theme';

export default function AlertsScreen() {
return (
<SafeAreaView style={styles.container} edges={['top']}>
<View style={styles.header}>
<Text style={styles.headerTitle}>Contamination Alerts</Text>
<Text style={styles.headerSubtitle}>Real-time water quality incidents</Text>
</View>

<ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
<View style={styles.alertsContainer}>
<Text style={styles.sectionTitle}>Critical Alerts</Text>
<AlertCard
title="High Contamination Detected"
description="Bacterial levels exceeded safe limits in Zone A (District 3). Immediately divert flow to treatment facility."
severity="critical"
timestamp="2 minutes ago"
location="Zone A, District 3"
/>

<Text style={[styles.sectionTitle, { marginTop: spacing.md }]}>Warning Alerts</Text>
<AlertCard
title="Unusual Pressure Anomaly"
description="Pressure drop detected in main pipeline. Possible leak in section 7B. Investigation recommended."
severity="warning"
timestamp="15 minutes ago"
location="Pipeline 7B"
/>
<AlertCard
title="Quality Threshold Approaching"
description="pH level trending towards unsafe zone. Chlorine levels adjusting automatically."
severity="warning"
timestamp="1 hour ago"
location="Zone B, District 1"
/>

<Text style={[styles.sectionTitle, { marginTop: spacing.md }]}>Info Alerts</Text>
<AlertCard
title="Scheduled Maintenance Complete"
description="Pump station #5 maintenance completed successfully. System back to normal operation."
severity="info"
timestamp="3 hours ago"
location="Pump Station 5"
/>
<AlertCard
title="Sensor Recalibration Done"
description="All sensors in Zone C have been recalibrated and validated for accuracy."
severity="info"
timestamp="6 hours ago"
location="Zone C"
/>
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
backgroundColor: colors.waterBlue,
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
alertsContainer: {
paddingHorizontal: spacing.md,
paddingVertical: spacing.md,
},
sectionTitle: {
		...(typography.h4 as any),
color: colors.darkText,
marginBottom: spacing.md,
fontWeight: '600',
},
});
