export type Unit = 'cm' | 'in';

export const CM_TO_INCH = 0.393701;
export const INCH_TO_CM = 2.54;

export function convertToUnit(value: number, fromUnit: Unit, toUnit: Unit): number {
  if (fromUnit === toUnit) return value;

  if (fromUnit === 'cm' && toUnit === 'in') {
    return value * CM_TO_INCH;
  }

  if (fromUnit === 'in' && toUnit === 'cm') {
    return value * INCH_TO_CM;
  }

  return value;
}

export function formatValue(value: number | '', unit: Unit): string {
  if (value === '') return '';
  const num = typeof value === 'number' ? value : parseFloat(value);
  if (isNaN(num)) return '';
  return `${num.toFixed(2)} ${unit === 'cm' ? 'cm' : 'in'}`;
}
