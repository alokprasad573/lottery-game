import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from './Ticket'

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
            <button onClick={buyTicket} style={{ marginTop: '20px' }}>
                Buy New Ticket
            </button>
            <h3>{isWinning && "Congratulations, you won!"}</h3>
        </div>
    );
}