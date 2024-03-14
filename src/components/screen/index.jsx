import { Tarefa } from "../Tarefa"
import "./style.css"



export function Screen(){

    return(
       
            <div className="fullScreen">
                <section>
                <h1>ToDoList</h1>

                </section>
                <section>
                    <input type="text" placeholder="Pesquise..." />
                </section>
                <section className="atividades">
                    <Tarefa/>
                    <Tarefa/>
                    <Tarefa/>
                </section>

            </div>
       
    )
}