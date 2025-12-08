import { cloneElement } from "../reactNode";

export interface WaveProps {
  children?: React.ReactNode;
}

const Wave: React.FC<WaveProps> = (props) => {
  const { children } = props;

  return cloneElement(children);
};

export default Wave;
