import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList() {
    return(
        <section className="repository-list">
            <h1>Lista de reposotório</h1>

            <ul>
               <RepositoryItem repository="unform1" />
               <RepositoryItem />
               <RepositoryItem />
               <RepositoryItem />
            </ul>
        </section>
    )
}