    import TicketNum from "./TicketNum";
    import './Ticket.css';
    
    export default function Ticket({ ticket }) {
        return (
            <div className="Ticket">
                {ticket.map((num, index) => (
                    <TicketNum key={index} num={num} />
                ))}
            </div>
        );
    }