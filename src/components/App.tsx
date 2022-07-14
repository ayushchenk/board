import { Board } from "./Board";

export function App() {
    const columns = ["To Do", "In Progress", "In Review", "Done"];

    return (
        <Board columns={columns} />
    );
}