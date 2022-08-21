export function DeleteAllButton({deleteAllTasks}:any){
  return (
    <button className="delete" type="button" onClick={deleteAllTasks}>Excluir Tudo</button>
    );
}
