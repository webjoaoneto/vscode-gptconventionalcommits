# GPTConventionalCommit

GPTConventionalCommit is a VS Code extension that uses OpenAI's GPT-3 to generate conventional commit messages based on the changes in your Git repository.

## Features

- Generates conventional commit messages based on the changes in your Git repository
- Uses OpenAI's GPT-3 to generate natural language commit messages
- Supports custom OpenAI API keys
- Adds a "Generate Commit Message" button to the Git panel

## Usage

1. Install the extension from the VS Code Marketplace
2. Set your OpenAI API key in the extension's configuration (see below)
3. Open the Git panel and select a file or files to commit
4. Click the "Generate Commit Message" button to generate a conventional commit message for the changes
5. Review and edit the commit message as needed
6. Click the "Commit" button to commit the changes with the generated commit message

## Configuration

The extension can be configured using the following settings:

- `gptconventionalcommit.apiKey`: Your OpenAI API key. If not set, the extension will use the default API key provided by OpenAI.

To set your API key, open the VS Code settings editor (`Ctrl+,` or `Cmd+,`), search for "GPTConventionalCommit", and enter your API key in the "Api Key" field.

## License

This extension is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.