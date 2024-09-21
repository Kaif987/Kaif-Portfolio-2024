import Work from "@/components/ui/work";
import GetInTouch from "./components/GetInTouch";
import Hero from "../components/hero/Hero";
import AboutMe from "@/components/ui/about-me";
import {
  AssistantModal,
  AssistantModalPrimitive,
  // FloatingAssistantButton,
  Thread,
  ThreadPrimitive,
} from "@assistant-ui/react";

import { MyAssistant } from "./components/MyAssistant";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Work />
      <GetInTouch />
      <MyAssistant />
    </div>
  );
}

// export function CustomAssistant() {
//   return (
//     <div className="flex h-full flex-col">
//       <Thread
//         welcome={{
//           suggestions: [
//             {
//               prompt: "How much revenue did Apple make last year?",
//             },
//             {
//               prompt: "Is McDonald's profitable?",
//             },
//             {
//               prompt: "What's the current stock price of Tesla?",
//             },
//           ],
//         }}
//         assistantMessage={{ components: { Text: MarkdownText } }}
//       />
//     </div>
//   );
// }

// const Thread = () => (
//   <ThreadPrimitive.Root>
//   <AssistantModalPrimitive.Root>
//     <AssistantModalPrimitive.Trigger>
//       <FloatingAssistantButton />
//     </AssistantModalPrimitive.Trigger>
//     <AssistantModalPrimitive.Content>
//       <Thread />
//     </AssistantModalPrimitive.Content>
//   </ThreadPrimitive.Root>
// );
