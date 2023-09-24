// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { currentScmController, getCurrentDiff } from './libs/diff';
import { ConventionalGenerator } from './generator/chat-message';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "gptconventionalcommit" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('gptconventionalcommit.helloWorld', async () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user

		const diff = await getCurrentDiff();
		if(!diff) {
			vscode.window.showErrorMessage('No diff found!');
			return;
		}
		const apiKey = vscode.workspace.getConfiguration('gptconventionalcommit').get('apiKey');

		const c = new ConventionalGenerator(diff, {
			apiKey
		});

		const res = c.getCommitMessage().then((result) => {
			const scmController = currentScmController();
			if(!scmController){
				vscode.window.showErrorMessage('No scm controller found!');
				return;
			}
			return scmController.inputBox.value = result;
		});
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
