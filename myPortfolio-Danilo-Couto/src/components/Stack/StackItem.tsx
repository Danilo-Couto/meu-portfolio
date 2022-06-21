import { IStackProps } from '../../utils/interfaces';
import { SStackContainer } from './styles';

export default function StackItem({ title, icon }: IStackProps) {
  return (
    <SStackContainer data-aos="fade-up">
      <p>{title}</p>
      {icon}
    </SStackContainer>
  );
}
