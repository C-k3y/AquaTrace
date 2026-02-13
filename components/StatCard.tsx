import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography } from '../lib/theme';

interface StatCardProps {
title: string;
value: string;
unit?: string;
icon?: string;
trend?: {
value: number;
isPositive: boolean;
};
backgroundColor?: string;
}

export default function StatCard({
title,
value,
unit,
trend,
backgroundColor = colors.aquaLight,
}: StatCardProps) {
return (
<View style={[styles.card, { backgroundColor }]}>
<Text style={styles.title}>{title}</Text>
<View style={styles.valueContainer}>
<Text style={styles.value}>{value}</Text>
{unit && <Text style={styles.unit}>{unit}</Text>}
</View>
{trend && (
<View style={styles.trendContainer}>
<Text style={[styles.trend, { color: trend.isPositive ? colors.success : colors.danger }]}>
{trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
</Text>
</View>
)}
</View>
);
}

const styles = StyleSheet.create({
card: {
backgroundColor: colors.aquaLight,
borderRadius: borderRadius.lg,
padding: spacing.md,
marginVertical: spacing.sm,
},
title: {
		...(typography.caption as any),
color: colors.darkText,
marginBottom: spacing.xs,
opacity: 0.8,
},
valueContainer: {
flexDirection: 'row',
alignItems: 'baseline',
},
value: {
		...(typography.h2 as any),
color: colors.deepOcean,
fontWeight: '700',
},
unit: {
		...(typography.body as any),
color: colors.lightText,
marginLeft: spacing.xs,
},
trendContainer: {
marginTop: spacing.sm,
},
trend: {
		...(typography.caption as any),
fontWeight: '600',
},
});
