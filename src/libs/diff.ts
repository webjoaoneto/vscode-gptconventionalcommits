import { extensions } from "vscode";
import { GitExtension } from "../types/git-types";
const gitExtension = extensions.getExtension<GitExtension>("vscode.git");

export function currentScmController() {
    return gitExtension?.exports.getAPI(1).repositories[0];
}

export function getCurrentDiff() {
    const currentDiff = gitExtension?.exports.getAPI(1).repositories[0]?.diff(true);


    return currentDiff;
}