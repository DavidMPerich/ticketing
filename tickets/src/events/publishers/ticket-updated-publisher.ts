import { Publisher, Subjects, TicketUpdatedEvent } from "@dmptickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    readonly subject = Subjects.TicketUpdated;
}
