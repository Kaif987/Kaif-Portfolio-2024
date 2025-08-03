import { LangChainAdapter, Message } from "ai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { ChatGroq } from "@langchain/groq";

export const maxDuration = 30;

export async function POST(req: Request) {
  const {
    messages,
  }: {
    messages: Message[];
  } = await req.json();

  const last5Messages = messages.slice(-5);
  const latestMessage = messages[messages.length - 1];

  const prompt = ChatPromptTemplate.fromMessages([
    [
      "system",
      `You are a Kaif Chat Bot, that helps your creator Mohammad Kaif by answering questions from his client. Here is all the information about Kaif : {context}. Answer these questions
      to the best of your ability and in case you cannot answer a question that is in the context just say you don't know but you can ask this question by contacting him directly.
      Also here is the history of your conversation with the client: {history}. 
      Please try to give short and concise answers within 100 words by only answering exactly the question that the user is asking.
      `,
    ],
    ["user", "{question}"],
  ]);

  const context = `Personal Information:

    Name: Mohammad Kaif
    Phone: +91 7007035173
    Email: mdkaifprofession@gmail.com
    LinkedIn: https://www.linkedin.com/in/kaif-mohd/
    GitHub: https://github.com/Kaif987
    Portfolio Website: https://kaif-siddiqui.tech/

  Summary: Kaif is a Professional Full Stack Developer who has extensive experience in building website,
  He specializes in creating AI apps, Chatbots using Langchain and Langgraph. He is skilled
  turning figma designs into working prototype

Education:
    Integral University, Lucknow, UP, India
        Degree: Bachelor in Computer Application with 9.0 CGPA

Projects:

    Portfolio Website
        Technologies: Next.js, TypeScript, Shadcn, Tailwind CSS
        Start Date: June 2024
        End Date: July 2024
        Description:
            Created a personal portfolio website showcasing personal projects, skills, and writings.
            Integrated GitHub API to fetch pinned repositories.
            Designed a responsive and modern UI using Shadcn and Tailwind CSS.
            Solved issues with rendering MDX files using next/mdx package.

    Blogging Application
        Technologies: React, TypeScript, Tailwind CSS, Shadcn UI, Honojs, Postgres, Prisma
        Start Date: June 2024
        Description:
            Built a blogging application that allows users to write and read blogs, and leave comments.
            Implemented user authentication for secure access.
            Frontend hosted on Vercel with CI/CD integration. Backend hosted on Cloudflare.

    Ecommerce Website
        Technologies: React, MongoDB, Node.js, JavaScript, HTML, Tailwind CSS
        Start Date: January 2023
        End Date: May 2023
        Description:
            Developed a full-stack e-commerce website with a REST API backend.
            Used MongoDB to store user data and cart items.
            Implemented JWT tokens for authentication and React Router Dom for routing.
            Stored JWT tokens in local storage for persistent user state.

    Campus Tutor
        Technologies: Next.js, Google API, Tailwind CSS
        Start Date: November 2023
        End Date: December 2023
        Description:
            Developed an educational platform where students can enroll in courses and access content and videos.
            Utilized Google API to manage file uploads from teachers' Google Drive.
            Implemented a progress tracking feature to monitor user progress in enrolled courses.

Technical Skills:

    Languages: JavaScript, TypeScript, Core Java, HTML, CSS
    Frameworks: React, Next.js, React Native, Tailwind CSS
    Developer Tools: Git, Google Cloud Platform, Figma, VS Code, Slack
    Database: MongoDB, Firebase, PostgreSQL, Supabase
    Libraries: Redux, Recoil, Express, Prisma

Project Links:

    Medium Backend Cloudflare Project: https://medium-backend-cloudflare-mohammad-kaifs-projects.vercel.app/
    Aldo Website: https://aldo-website.netlify.app/
    Campus Tutor: https://campus-tutor.vercel.app/`;

  const llm = new ChatGroq({
    model: "gemma2-9b-it",
    temperature: 0.7,
    streaming: true,
  });

  const chain = prompt.pipe(llm).pipe(new StringOutputParser());

  const stream = await chain.stream({
    question: latestMessage.content,
    context,
    history: last5Messages.map((m) => m.content).join("\n"),
  });

  return LangChainAdapter.toDataStreamResponse(stream);
}
