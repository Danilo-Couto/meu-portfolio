import { useState } from "react";
import { Inputs } from "../../Inputs";

function TaskItem({ editTask, deleteTask, id, title, content, status, owner, createdAt
}: any) {

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setTitle] = useState('');  
  const [editedContent, setContent] = useState(''); 
  const [editedOwner, setOwner] = useState(undefined); 
  const [editedStatus, setStatus] = useState(undefined); 

  const editedTask = {
    name: editedTitle,
    editedContent,
    status: editedStatus,
    owner: editedOwner === "Danilo" ? 1 : 2
  }

  const deleteClick = ({target}: any) => deleteTask(target.value);

  const toogleEditForm = () => setIsEditing(!isEditing);
  
  const sendEdition = (e: any) => {
    e.preventDefault();
    editTask(id, editedTask);
    toogleEditForm();
  };
 
  const viewTask = (
    <>
      <div key={id} className="todo-list" >
        <h4>{title}</h4>
        <p>descrição: {content}</p>
        <p>responsável: {owner}</p>
        <p>status: {status}</p>
        <p>criada em: {new Date(createdAt).toLocaleDateString('pt-BR', {timeZone: 'UTC'})}</p>
        <button className="edit" type="button" onClick={toogleEditForm}>Editar tarefa</button>
        <button className="delete" type="button" onClick={deleteClick} value={id}>Deletar tarefa</button>
    </div>
  </>
);

  const editingForm = (
    <div className="">
      <form className="" onSubmit={sendEdition}>
        <Inputs {...{
          setTitle, setContent, setStatus, title, content,
          status, setOwner, editedStatus
        }} />
        <button type="submit">Salvar</button>
        <button className="cancel" type="button" onClick={toogleEditForm}>Cancelar</button>
      </form>
      </div>
  )

  return isEditing ? editingForm : viewTask
}

export default TaskItem;
