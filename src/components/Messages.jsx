import React from "react";
import Message from "./Message";
import InputMessage from "./InputMessage";

export default function Messages() {
    return(
    <div className="message-wrapper">
        <Message/>
        <InputMessage/>
    </div>
    )
}