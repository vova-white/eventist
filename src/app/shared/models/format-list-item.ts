export class FormatListItem {
  value: string | number;
  text: string | number;
  activeImg: string;
  noActiveImg?: string;

  constructor(
    value: string | number,
    text: string | number,
    activeImg: string,
    noActiveImg: string = ''
  ) {
    this.value = value || '';
    this.text = text || '';
    this.activeImg = activeImg || '';
    this.noActiveImg = noActiveImg || '';
  }
}
