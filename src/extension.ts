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

	let disposable = vscode.commands.registerCommand('gptconventionalcommit.generateMessage', async () => {
		const diff = await getCurrentDiff();
		if(!diff) {
			vscode.window.showErrorMessage('No diff found!');
			return;
		}
		const apiKey = vscode.workspace.getConfiguration('gptconventionalcommit').get('apiKey');

		if(!apiKey) {
			vscode.window.showErrorMessage('No api key found!');
			return;
		}
		const c = new ConventionalGenerator(diff, {
			apiKey: `${apiKey}`
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
