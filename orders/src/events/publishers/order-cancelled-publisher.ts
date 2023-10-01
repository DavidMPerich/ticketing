import { Subjects, Publisher, OrderCancelledEvent } from "@dmptickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    readonly subject = Subjects.OrderCancelled;
}