import { Publisher, Subjects, TicketCreatedEvent } from "@dmptickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    readonly subject = Subjects.TicketCreated;
}
