import { InputFields } from "./InputFields";

export function Inputs({setTitle, setContent, setOwner, setStatus}: any) {

  const addTitle = ({target}: any) => setTitle(target.value);
  const addContent = ({target}: any) => setContent(target.value);
  const addOwner = ({target}: any) => setOwner(target.value); 
  const addStatus = ({target}: any) => setStatus(target.value); 
  
  return (
    <>
    <InputFields {...{addTitle, addContent, addOwner, addStatus}}/>
    </>
  );
}
