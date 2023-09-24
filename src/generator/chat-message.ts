import { OpenAI } from "langchain/llms/openai";
import { conventionalExamples } from "./examples";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import {
  SemanticSimilarityExampleSelector,
  PromptTemplate,
  FewShotPromptTemplate,
  BaseChatPromptTemplate
} from "langchain/prompts";
import { MemoryVectorStore } from "langchain/vectorstores/memory";

export interface ConventionalGeneratorParams {
  apiKey: string;
}
export class ConventionalGenerator {
  private openAi: OpenAI
  ;
  constructor(private readonly diffMessage: string, private readonly params: ConventionalGeneratorParams ) {
    this.openAi = new OpenAI({
      openAIApiKey: this.params.apiKey,

    });
  }

  async getCommitMessage() {
    const examplePrompt = new PromptTemplate({
      inputVariables: ["diff", "output"],
      template: "Input: {diff}\nOutput: {output}",
    });

    const exampleSelector = await SemanticSimilarityExampleSelector.fromExamples(
      conventionalExamples,
      new OpenAIEmbeddings({
        openAIApiKey: this.params.apiKey,
      }),
      MemoryVectorStore,
    );  

    const dynamicPrompt = new FewShotPromptTemplate({
      exampleSelector,
      examplePrompt,
      prefix: "You are a developer working on a project. You are about to commit your changes to the git repository. Repository uses a conventional commit messages notation for each commit and push. Which single conventional commit message can be writen for the given diff:",
      suffix: "Input: {diff}\nOutput:",
      inputVariables: ["diff"],
    });

    
    const chain = dynamicPrompt.pipe(this.openAi);
    
    const diff = this.diffMessage.replace(/{/g, '').replace(/}/g, '').substring(0, 3800);
    const result = await chain.invoke({ diff });
    console.log('result is', result);
    return result;
  }
}