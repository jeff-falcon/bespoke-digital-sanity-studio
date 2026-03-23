import { Card, Text } from '@sanity/ui';

export function PreHeader({ children }: React.PropsWithChildren) {
  return <h5 style={{ textTransform: 'uppercase', opacity: 0.5, margin: '0 0 8px' }}>{children}</h5>;
}

export function ParagraphLarge({ children }: React.PropsWithChildren) {
  return <p style={{ fontSize: '18px', lineHeight: '24px', margin: '0', opacity: 0.7 }}>{children}</p>;
}

export function BulletsWarning({ children }: React.PropsWithChildren) {
  return (
    <Card padding={3} style={{ border: '1px solid activetext' }}>
      <Text style={{ color: 'ActiveText' }}>
        <strong>Warning:</strong> if using bullets in the description field they will not look good unless text is left
        aligned
      </Text>
    </Card>
  );
}
