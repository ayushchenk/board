import { CardModel } from "../model/CardModel";
import { useDrag } from 'react-dnd';

export interface CardProps {
    card: CardModel;
}

export function Card(props: CardProps) {
    const [, dragRef] = useDrag(() => ({
        type: "card",
        item: {
            code: props.card.code
        }
    }));

    return (
        <section className="card" ref={dragRef}>
            <header>{props.card.title}</header>
            <main>{props.card.priority}</main>
            <footer>{props.card.status}</footer>
        </section>
    );
}