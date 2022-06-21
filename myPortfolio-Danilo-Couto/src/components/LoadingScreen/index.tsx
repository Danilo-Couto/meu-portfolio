import { SContainer, SpinnerContainer } from 'src/components/LoadingScreen/styles';

export default function LoadingScreen() {
  return (
    <SContainer>
      <SpinnerContainer>
        <div className="double-bounce1" />
        <div className="double-bounce2" />
      </SpinnerContainer>
    </SContainer>
  );
}
