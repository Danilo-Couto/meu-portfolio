export function InputFields({addTitle, title, addContent, content, addOwner, owner, addStatus, status}: any) {
  return (
    <>
    <input type="text" required placeholder="Adicione uma tarefa" onChange={addTitle} value={title} />
    <input type="text" required placeholder="Descreva a tarefa" onChange={addContent} value={content} />
   
    <label> Responsável:
      <select onChange={addOwner} required value={owner}>
        <option defaultValue={"default"}></option>
        <option value={'Danilo'}>Danilo</option>
        <option value={'Murilo'}>Murilo</option>
      </select>
    </label>

    <label> Status:
      <select onChange={addStatus} required value={status}>
        <option defaultValue={"default"}></option>
        <option value={'pendente'}>pendente</option>
        <option value={'em progresso'}>em progresso</option>
        <option value={'pronto'}>pronto</option>
      </select>
    </label>
    </>
    
  );
}
