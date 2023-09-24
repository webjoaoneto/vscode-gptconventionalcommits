import { OpenAI } from "langchain/llms/openai";
import { conventionalExamples } from "./examples";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import {
  SemanticSimilarityExampleSelector,
  PromptTemplate,
  FewShotPromptTemplate,
} from "langchain/prompts";
import { HNSWLib } from "langchain/vectorstores/hnswlib";

process.env.OPENAI_API_KEY = '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';

export class ConventionalGenerator {
  constructor(private readonly diffMessage: string, private readonly params: any = {}) {
  }

  async getCommitMessage() {
    const openAi = new OpenAI({
      openAIApiKey: this.params.apiKey
    });

    const examplePrompt = new PromptTemplate({
      inputVariables: ["diff", "output"],
      template: "Input: {diff}\nOutput: {output}",
    });

    const exampleSelector = await SemanticSimilarityExampleSelector.fromExamples(
      conventionalExamples,
      new OpenAIEmbeddings(),
      HNSWLib,
      { k: 1 }
    );  

    const dynamicPrompt = new FewShotPromptTemplate({
      exampleSelector,
      examplePrompt,
      prefix: "You are a developer working on a project. You are about to commit your changes to the git repository. Repository uses a conventional commit messages notation for each commit and push. Which single conventional commit message can be writen for the given diff:",
      suffix: "Input: {diff}\nOutput:",
      inputVariables: ["diff"],
    });

    
    const chain = dynamicPrompt.pipe(openAi);
    
    //replace all braces { } with empty string
    console.log('diff is', this.diffMessage.replace(/{/g, '').replace(/}/g, ''));
    const result = await chain.invoke({ diff:  this.diffMessage.replace(/{/g, '').replace(/}/g, '') });
    console.log('result is', result);
    return result;
  }
}