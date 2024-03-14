import "./style.css"


export function Tarefa(){

    return(
        <div className="tarefa">
            <div className="nomeTarefa">
                
            <section>
                <p>Nome da tarefa</p>
            </section>
            <section className="dataTarefa">
                <p>11/11/2000</p>
            </section>
            </div>
            <div className="statusTarefa">
                <section className="status">

                </section>
            </div>
        </div>
    )
}