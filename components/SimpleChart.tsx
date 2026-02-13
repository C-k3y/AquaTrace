import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography } from '../lib/theme';

interface DataPoint {
label: string;
value: number;
maxValue?: number;
}

interface SimpleChartProps {
title: string;
data: DataPoint[];
type?: 'bar' | 'line-simple';
}

export default function SimpleChart({ title, data, type = 'bar' }: SimpleChartProps) {
const maxValue = Math.max(...data.map(d => d.value));

if (type === 'bar') {
return (
<View style={styles.container}>
<Text style={styles.title}>{title}</Text>
<View style={styles.chartContainer}>
{data.map((point, idx) => {
const heightPercent = (point.value / maxValue) * 100;
return (
<View key={idx} style={styles.barWrapper}>
<View
style={[
styles.bar,
{ height: `${Math.max(heightPercent, 10)}%` },
]}
/>
<Text style={styles.label}>{point.label}</Text>
<Text style={styles.value}>{point.value}</Text>
</View>
);
})}
</View>
</View>
);
}

// Line chart simple version
return (
<View style={styles.container}>
<Text style={styles.title}>{title}</Text>
<View style={styles.lineChartContainer}>
{data.map((point, idx) => {
const heightPercent = (point.value / maxValue) * 100;
return (
<View key={idx} style={styles.linePoint}>
<View
style={[
styles.dot,
{ height: `${heightPercent}%` },
]}
/>
<Text style={styles.lineLabel}>{point.label}</Text>
<Text style={styles.lineValue}>{point.value}</Text>
</View>
);
})}
</View>
</View>
);
}

const styles = StyleSheet.create({
container: {
backgroundColor: colors.white,
borderRadius: borderRadius.md,
padding: spacing.md,
marginVertical: spacing.md,
shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.08,
shadowRadius: 4,
elevation: 2,
},
title: {
		...(typography.h4 as any),
color: colors.darkText,
marginBottom: spacing.md,
},
chartContainer: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'flex-end',
height: 180,
marginVertical: spacing.md,
},
barWrapper: {
flex: 1,
alignItems: 'center',
marginHorizontal: spacing.xs,
},
bar: {
width: '100%',
backgroundColor: colors.aqua,
borderRadius: borderRadius.sm,
marginBottom: spacing.sm,
},
label: {
		...(typography.caption as any),
color: colors.lightText,
marginBottom: spacing.xs,
},
value: {
		...(typography.caption as any),
color: colors.darkText,
fontWeight: '600',
},
lineChartContainer: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'flex-end',
height: 160,
marginVertical: spacing.md,
},
linePoint: {
flex: 1,
alignItems: 'center',
marginHorizontal: spacing.xs,
},
dot: {
width: 8,
backgroundColor: colors.aqua,
borderRadius: 4,
marginBottom: spacing.sm,
},
lineLabel: {
		...(typography.caption as any),
color: colors.lightText,
marginBottom: spacing.xs,
},
lineValue: {
		...(typography.caption as any),
color: colors.darkText,
fontWeight: '600',
},
});
