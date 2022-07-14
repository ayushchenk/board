import { useDrop } from "react-dnd";
import { CardModel } from "../model/CardModel";
import { Card } from "./Card";

export interface ColumnProps {
    header: string;
    cards: CardModel[];
    moveCard: (code: string, column: string) => void;
}

export function Column(props: ColumnProps) {
    const [isHovering, dropRef] = useDrop(() => ({
        accept: "card",
        drop: (item: any) => props.moveCard(item.code, props.header),
        collect: (monitor) => monitor.isOver()
    }));

    const cards = props.cards
        .sort((a, b) => b.priority - a.priority)
        .map((c, i) => <Card card={c} key={i}></Card>);

    const className = isHovering ? "column column--hovering" : "column";

    return (
        <div ref={dropRef} className={className}>
            <h3 className="column__header">{props.header}</h3>
            {cards}
        </div>
    );
}