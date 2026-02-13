import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography } from '../lib/theme';

interface Zone {
id: string;
name: string;
quality: number;
temperature: number;
pressure: number;
status: 'healthy' | 'warning' | 'critical';
}

interface WaterMapProps {
zones: Zone[];
title?: string;
}

export default function WaterMap({ zones, title = 'Water Distribution Map' }: WaterMapProps) {
const getStatusColor = (status: string) => {
switch (status) {
case 'healthy':
return colors.success;
case 'warning':
return colors.warning;
case 'critical':
return colors.danger;
default:
return colors.lightGray;
}
};

const getStatusIcon = (status: string) => {
switch (status) {
case 'healthy':
return '✓';
case 'warning':
return '!';
case 'critical':
return '⚠';
default:
return '○';
}
};

return (
<View style={styles.container}>
<Text style={styles.title}>{title}</Text>

{/* Simplified map representation */}
<View style={styles.mapContainer}>
<View style={styles.mapGrid}>
{zones.map((zone) => (
<View
key={zone.id}
style={[
styles.zone,
{
borderColor: getStatusColor(zone.status),
backgroundColor: `${getStatusColor(zone.status)}15`,
},
]}
>
<View style={[styles.statusIndicator, { backgroundColor: getStatusColor(zone.status) }]}>
<Text style={styles.statusIcon}>{getStatusIcon(zone.status)}</Text>
</View>
<Text style={styles.zoneName}>{zone.name}</Text>
<View style={styles.zoneInfo}>
<Text style={styles.zoneMetric}>Q: {zone.quality}%</Text>
<Text style={styles.zoneMetric}>T: {zone.temperature}°C</Text>
<Text style={styles.zoneMetric}>P: {zone.pressure}psi</Text>
</View>
</View>
))}
</View>
</View>

{/* Legend */}
<View style={styles.legendContainer}>
<View style={styles.legendRow}>
<View style={[styles.legendDot, { backgroundColor: colors.success }]} />
<Text style={styles.legendText}>Healthy</Text>
</View>
<View style={styles.legendRow}>
<View style={[styles.legendDot, { backgroundColor: colors.warning }]} />
<Text style={styles.legendText}>Warning</Text>
</View>
<View style={styles.legendRow}>
<View style={[styles.legendDot, { backgroundColor: colors.danger }]} />
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
fontWeight: '600',
},
mapContainer: {
marginVertical: spacing.md,
},
mapGrid: {
flexDirection: 'row',
flexWrap: 'wrap',
// RN doesn't support `gap` reliably across versions; use margins on `zone` instead
},
zone: {
flex: 1,
minWidth: '45%',
padding: spacing.md,
borderRadius: borderRadius.md,
borderWidth: 2,
alignItems: 'center',
marginVertical: spacing.sm,
marginHorizontal: spacing.xs,
},
statusIndicator: {
width: 32,
height: 32,
borderRadius: 16,
alignItems: 'center',
justifyContent: 'center',
marginBottom: spacing.sm,
},
statusIcon: {
color: colors.white,
fontWeight: 'bold',
fontSize: 16,
},
zoneName: {
...(typography.caption as any),
color: colors.darkText,
fontWeight: '600',
marginBottom: spacing.xs,
},
zoneInfo: {
width: '100%',
// use per-item margin on `zoneMetric` instead of `gap`
},
zoneMetric: {
...(typography.caption as any),
color: colors.lightText,
textAlign: 'center',
fontSize: 10,
marginBottom: spacing.xs,
},
legendContainer: {
flexDirection: 'row',
justifyContent: 'space-around',
paddingTop: spacing.md,
borderTopWidth: 1,
borderTopColor: colors.borderGray,
},
legendRow: {
flexDirection: 'row',
alignItems: 'center',
},
legendDot: {
width: 10,
height: 10,
borderRadius: 5,
marginRight: spacing.xs,
},
legendText: {
...(typography.caption as any),
color: colors.lightText,
},
});
