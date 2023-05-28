export interface Props {
  onChange: (index: number) => void;
  selectedIndex: number;
  controls: Control[];
}

interface Control {
  title: string;
}
