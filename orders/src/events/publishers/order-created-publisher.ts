import { Publisher, OrderCreatedEvent, Subjects } from "@dmptickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    readonly subject = Subjects.OrderCreated;
}

