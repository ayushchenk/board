import { useState } from "react";
import { CardModel, Priority } from "../model/CardModel";
import { Column } from "./Column";

export interface BoardProps {
    columns: string[];
}

export function Board(props: BoardProps) {
    const [cards, setCards] = useState<CardModel[]>([
        {
            code: "C1",
            priority: Priority.Highest,
            status: "To Do",
            title: "task 1"
        },
        {
            code: "C2",
            priority: Priority.Low,
            status: "To Do",
            title: "task 2"
        },
        {
            code: "C3",
            priority: Priority.High,
            status: "To Do",
            title: "task 3"
        },
        {
            code: "C4",
            priority: Priority.Medium,
            status: "To Do",
            title: "task 4"
        },
        {
            code: "C5",
            priority: Priority.Medium,
            status: "To Do",
            title: "task 5"
        }
    ]);

    const moveHandler = (code: string, column: string) => {
        const newCards = [...cards];
        const card = newCards.find(c => c.code === code)!;
        card.status = column;
        setCards(newCards);
    };

    const columns = props.columns.map(col => <Column
        key={col}
        header={col}
        moveCard={moveHandler}
        cards={cards.filter(c => c.status === col)}
    />);

    return (
        <div className="board">
            {columns}
        </div>
    );
}