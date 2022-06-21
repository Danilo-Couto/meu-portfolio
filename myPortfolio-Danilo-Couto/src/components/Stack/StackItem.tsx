import { IStackProps } from 'src/Utils/interfaces';
import { SStackContainer } from 'src/components/Stack/styles';

export default function StackItem({ title, icon }: IStackProps) {
  return (
    <SStackContainer data-aos="fade-up">
      <p>{title}</p>
      {icon}
    </SStackContainer>
  );
}
