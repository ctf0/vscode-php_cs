import * as vscode from 'vscode'

export const PACKAGE_NAME = 'phpCodeSniffer'
export const PACKAGE_TITLE = 'PHP_CodeSniffer'
export let config: vscode.WorkspaceConfiguration

export function setConfig(): void {
    config = vscode.workspace.getConfiguration(PACKAGE_NAME)
}
