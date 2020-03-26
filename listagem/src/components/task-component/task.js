import React, {useState} from 'react';


function Task() {
    const [description  , setdescription] = useState('');
    const [responsible, setresponsible] = useState('');

    
    async function handleSubmit(e) {
        e.preventDefault();

        const data = {
            description,
            responsible,
          };

        setdescription('');
        setresponsible('');

        try {
            await localStorage.setItem("tarefa", data.description);
            await localStorage.setItem("responsavel", data.responsible);
            console.log('deu certo');
            
        } catch (err) {
            console.log(err);
            alert("Falha ao enviar tarefa, tente novamente.");
        }
    }
        return(
          <div>
            <strong>Digite seus dados</strong>
            <form onSubmit={() => handleSubmit}>
              <div className="input-block">
                <label htmlFor="description">Descrição</label>
                <textarea 
                  name="description" 
                  id="description" 
                  value={description}
                  onChange={ e => setdescription(e.target.value)}
                  required
                ></textarea>
              </div>
 
              <div className="input-block">
                <label htmlFor="responsible">Responsável</label>
                <input 
                  name="responsible" 
                  id="responsible"
                  value={responsible}
                  onChange={ e => setresponsible(e.target.value)} 
                  required
                />
              </div>
              <button type="submit">Enviar</button>
            </form>
          </div>
        );
};
   

export default Task;