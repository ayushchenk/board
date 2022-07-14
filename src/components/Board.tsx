import { useState } from "react";
import { CardModel, Priority } from "../model/CardModel";
import { Column } from "./Column";

export function Board() {
    const [cards, setCards] = useState<CardModel[]>([
        {
            code: "C1",
            priority: Priority.Highest,
            status: "To Do",
            title: "something very important to do"
        },
        {
            code: "C2",
            priority: Priority.Low,
            status: "To Do",
            title: "something to do"
        },
        {
            code: "C3",
            priority: Priority.High,
            status: "In Progress",
            title: "something very important in progress"
        },
        {
            code: "C4",
            priority: Priority.Medium,
            status: "In Progress",
            title: "something in progress"
        }
    ]);

    const todoCards = cards.filter(c => c.status === "To Do");
    const inProgressCards = cards.filter(c => c.status === "In Progress");
    const doneCards = cards.filter(c => c.status === "Done");

    const moveHandler = (code: string, column: string) => {
        const oldCards = [...cards];
        const card = oldCards.find(c => c.code === code)!;
        card.status = column;
        setCards(oldCards);
    };

    console.log(cards);

    return (
        <div className="board">
            <Column header="To Do" cards={todoCards} moveCard={moveHandler} />
            <Column header="In Progress" cards={inProgressCards} moveCard={moveHandler} />
            <Column header="Done" cards={doneCards} moveCard={moveHandler} />
        </div>
    );
}