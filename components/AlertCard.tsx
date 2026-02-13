import { View, Text, StyleSheet, Pressable } from 'react-native';
import { colors, spacing, borderRadius, typography } from '../lib/theme';

interface AlertCardProps {
	title: string;
	description: string;
	severity: 'critical' | 'warning' | 'info';
	// Accept either an ISO string or a Date so callers are flexible
	timestamp: string | Date;
	location?: string;
	onDismiss?: () => void;
}

function formatTimestamp(tsInput: string | Date) {
	const ts = typeof tsInput === 'string' ? new Date(tsInput) : tsInput;
	if (isNaN(ts.getTime())) return String(tsInput);
	const diff = Date.now() - ts.getTime();
	const seconds = Math.floor(diff / 1000);
	if (seconds < 60) return `${seconds}s ago`;
	if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
	if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
	return ts.toLocaleString();
}

export default function AlertCard({
	title,
	description,
	severity,
	timestamp,
	location,
	onDismiss,
}: AlertCardProps) {
	const severityColor = {
		critical: colors.danger,
		warning: colors.warning,
		info: colors.info,
	}[severity];

	const severityBg = {
		critical: '#FFEBEE',
		warning: '#FFF3E0',
		info: '#E1F5FE',
	}[severity];

	const formattedTimestamp = formatTimestamp(timestamp);

	return (
		<View style={[styles.card, { borderLeftColor: severityColor }]}>
			<View style={styles.header}>
				<View style={[styles.severityBadge, { backgroundColor: severityBg }]}>
					<Text style={[styles.severityText, { color: severityColor }]}>
						{severity.toUpperCase()}
					</Text>
				</View>

				{onDismiss && (
					<Pressable
						onPress={onDismiss}
						accessibilityRole="button"
						accessibilityLabel={`Dismiss ${severity} alert`}
						hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
						style={({ pressed }) => ({ opacity: pressed ? 0.6 : 1 })}
					>
						<Text style={styles.dismissBtn}>✕</Text>
					</Pressable>
				)}
			</View>

			<Text style={styles.title}>{title}</Text>
			<Text style={styles.description}>{description}</Text>

			<View style={styles.footer}>
				{location && (
					<Text style={[styles.meta, styles.metaItem]}>📍 {location}</Text>
				)}
				<Text style={[styles.meta, styles.metaItem, { marginBottom: 0 }]}>
					{formattedTimestamp}
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: colors.white,
		borderRadius: borderRadius.md,
		padding: spacing.md,
		marginVertical: spacing.sm,
		borderLeftWidth: 4,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.08,
		shadowRadius: 4,
		elevation: 2,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: spacing.sm,
	},
	severityBadge: {
		paddingHorizontal: spacing.sm,
		paddingVertical: 2,
		borderRadius: borderRadius.sm,
		minWidth: 64,
		alignItems: 'center',
		justifyContent: 'center',
	},
		severityText: {
			...(typography.caption as any),
			fontWeight: '600',
		},
	dismissBtn: {
		fontSize: 18,
		color: colors.lightText,
		padding: 4,
	},
		title: {
			...(typography.h4 as any),
			color: colors.darkText,
			marginBottom: spacing.xs,
		},
		description: {
			...(typography.body as any),
			color: colors.lightText,
			marginBottom: spacing.md,
			lineHeight: 22,
		},
	footer: {
		flexDirection: 'column',
	},
		meta: {
			...(typography.caption as any),
			color: colors.lightText,
		},
	metaItem: {
		marginBottom: spacing.xs,
	},
});
