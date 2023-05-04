export interface Spacing {
  // margins
  m?: number;
  mb?: number;
  mx?: number;
  ml?: number | 'auto';
  mr?: number | 'auto';
  mt?: number;
  my?: number;

  // padding
  p?: number;
  pb?: number;
  px?: number;
  pl?: number;
  pr?: number;
  pt?: number;
  py?: number;

  // gaps
  columnGap?: number;
  rowGap?: number;
  gap?: number;
}
