import { OpenAI } from "langchain/llms/openai";
import {
  PromptTemplate,
  FewShotPromptTemplate} from "langchain/prompts";

import { examples } from "../training/training-data";
import { RunnableSequence } from "langchain/dist/schema/runnable";
export interface ConventionalGeneratorParams {
  apiKey: string;
}
export class ConventionalGenerator {
  private chain: RunnableSequence;
  
  constructor(private readonly diffMessage: string, private readonly params: ConventionalGeneratorParams ) {
    const prompt = new PromptTemplate(
      {
        inputVariables: ["diff", "answer"],
        template: `
          Please provide a conventional commit message for the following change:
          Changes: {diff}
    
          Answer: {answer}
        `
      });

      const few_shot_prompt = new FewShotPromptTemplate(
        {
          examples: examples,
          examplePrompt: prompt,
          suffix: "Changes: {diff}",
          inputVariables: ["diff"],
        });

      const openAi = new OpenAI({
        openAIApiKey: this.params.apiKey,
      });
      this.chain = few_shot_prompt.pipe(openAi);
      
  }

  async getCommitMessage(): Promise<string> {
    return this.chain.invoke({
      diff: this.diffMessage.slice(0, 2000)
    }).then(res => {
      return res.trim().replace(/^Answer: /, "").replace(/\n$/, "");
    });
  }
}