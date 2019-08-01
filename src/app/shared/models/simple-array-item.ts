export class SimpleArrayItem {
  label: string;
  data: any;
  units: string;
  format: string;

  constructor(
    label: string,
    data: any,
    options?: {
      units?: string;
      format?: string;
    }
  ) {
    this.label = label;
    this.data = data;
    this.units = options.units || 'area';
    this.format = options.format || '1.0-0';
  }
}
