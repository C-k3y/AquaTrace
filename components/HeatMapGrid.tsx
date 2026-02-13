import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography } from '../lib/theme';

interface HeatmapCell {
value: number;
location: string;
}

interface HeatmapGridProps {
title: string;
cells: HeatmapCell[];
maxValue?: number;
}

export default function HeatmapGrid({ title, cells, maxValue = 100 }: HeatmapGridProps) {
const getHeatmapColor = (value: number) => {
const ratio = value / maxValue;
if (ratio < 0.2) return colors.aquaLight;
if (ratio < 0.4) return colors.lightBlue;
if (ratio < 0.6) return colors.waterBlue;
if (ratio < 0.8) return colors.warning;
return colors.danger;
};

return (
<View style={styles.container}>
<Text style={styles.title}>{title}</Text>
<View style={styles.gridContainer}>
{cells.map((cell, idx) => (
<View
key={idx}
style={[
styles.cell,
{ backgroundColor: getHeatmapColor(cell.value) },
]}
>
<Text style={styles.cellValue}>{cell.value}</Text>
<Text style={styles.cellLocation}>{cell.location}</Text>
</View>
))}
</View>
<View style={styles.legend}>
<View style={styles.legendItem}>
<View style={[styles.legendColor, { backgroundColor: colors.aquaLight }]} />
<Text style={styles.legendText}>Low</Text>
</View>
<View style={styles.legendItem}>
<View style={[styles.legendColor, { backgroundColor: colors.waterBlue }]} />
<Text style={styles.legendText}>Medium</Text>
</View>
<View style={styles.legendItem}>
<View style={[styles.legendColor, { backgroundColor: colors.warning }]} />
<Text style={styles.legendText}>High</Text>
</View>
<View style={styles.legendItem}>
<View style={[styles.legendColor, { backgroundColor: colors.danger }]} />
<Text style={styles.legendText}>Critical</Text>
</View>
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
gridContainer: {
flexDirection: 'row',
flexWrap: 'wrap',
justifyContent: 'space-between',
marginBottom: spacing.md,
},
cell: {
width: '48%',
padding: spacing.md,
marginVertical: spacing.sm,
borderRadius: borderRadius.md,
alignItems: 'center',
},
cellValue: {
		...(typography.h3 as any),
color: colors.white,
fontWeight: '700',
},
cellLocation: {
		...(typography.caption as any),
color: colors.white,
marginTop: spacing.xs,
fontWeight: '500',
},
legend: {
flexDirection: 'row',
justifyContent: 'space-around',
paddingTop: spacing.md,
borderTopWidth: 1,
borderTopColor: colors.borderGray,
},
legendItem: {
flexDirection: 'row',
alignItems: 'center',
		// RN doesn't have `gap` in all versions; use margin on the color square instead
},
legendColor: {
width: 12,
height: 12,
borderRadius: 4,
		marginRight: spacing.xs,
},
legendText: {
		...(typography.caption as any),
color: colors.lightText,
},
});
