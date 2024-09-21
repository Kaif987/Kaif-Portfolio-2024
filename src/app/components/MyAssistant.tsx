"use client";

import { AssistantModal, useEdgeRuntime } from "@assistant-ui/react";
import { makeMarkdownText } from "@assistant-ui/react-markdown";
import { useChat } from "ai/react";
import { useVercelUseChatRuntime } from "@assistant-ui/react-ai-sdk";

export const MarkdownText = makeMarkdownText();

export function MyAssistant() {
  const chat = useChat({
    api: "/api/chat",
  });

  const assistantRunTime = useVercelUseChatRuntime(chat);

  return (
    <>
      <AssistantModal
        welcome={{
          suggestions: [
            {
              prompt: "Tell me about Kaif ?",
            },
            {
              prompt: "What Skills does Kaif have ?",
            },
          ],
        }}
        runtime={assistantRunTime}
        assistantMessage={{ components: { Text: MarkdownText } }}
      />
    </>
  );
}
