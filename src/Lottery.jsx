import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from './Ticket'
import Button from "./Button";

export default function Lottery({n, winCondition}) {
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);

    let buyTicket = () => {
        setTicket(genTicket(n));
    };

    return (
        <div>
            <h1>Lottery Game!</h1>
            <h4>Ticket No.</h4>
            <Ticket ticket={ticket}></Ticket>
            <Button action={buyTicket}></Button>
            <h3>{isWinning && "Congratulations, you won!"}</h3>
        </div>
    );
}