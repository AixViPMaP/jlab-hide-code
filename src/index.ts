import {
  IDisposable, DisposableDelegate
} from '@phosphor/disposable';

import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import {
  ToolbarButton
} from '@jupyterlab/apputils';

import {
  DocumentRegistry
} from '@jupyterlab/docregistry';

import {
  NotebookActions, NotebookPanel, INotebookModel
} from '@jupyterlab/notebook';


const plugin: JupyterLabPlugin<void> = {
  activate,
  id: 'jlab-hide-code:buttonPlugin',
  autoStart: true
};


export
class ButtonExtension implements DocumentRegistry.IWidgetExtension<NotebookPanel, INotebookModel> {

  createNew(panel: NotebookPanel, context: DocumentRegistry.IContext<INotebookModel>): IDisposable {
  
    let hideInputCode = () => {
      NotebookActions.hideAllCode(panel.content);
    };
	let showInputCode = () => {
	  NotebookActions.showAllCode(panel.content);
	};
  
    let buttonHideInput = new ToolbarButton({
      className: 'myButton',
      iconClassName: 'fa fa-eye-slash',
      onClick: hideInputCode,
      tooltip: 'Hide Input'
    });
	
	let buttonShowInput = new ToolbarButton({
      className: 'myButton',
      iconClassName: 'fa fa-eye',
      onClick: showInputCode,
      tooltip: 'Show Input'
    });

    panel.toolbar.insertItem(10, 'hideInput', buttonHideInput);
	panel.toolbar.insertItem(10, 'showInput', buttonShowInput);
	
    return new DisposableDelegate(() => {
      buttonHideInput.dispose();
	  buttonShowInput.dispose();
    });
  }

  
}

function activate(app: JupyterLab) {
  app.docRegistry.addWidgetExtension('Notebook', new ButtonExtension());
};

export default plugin;
