import { Subjects, Publisher, ExpirationCompleteEvent } from "@dmptickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    readonly subject = Subjects.ExpirationComplete;
}