import { Subjects, Publisher, PaymentCreatedEvent } from "@dmptickets/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent>{
    readonly subject = Subjects.PaymentCreated;
}