# @jupyterlab/jlab-hide-code

JuypterLab extension: Adds two buttons to the notebook toolbar to hide/unhide all code cells 

## Prerequisites

* [JupyterLab](https://github.com/jupyterlab)

## Installation

```bash 
npm install
npm run build
npm pack ./
jupyter labextension install *.tgz
```

Both buttons are automatically placed at the top right side in the notebook toolbar.

## Development

### Init

```bash
npm install
npm run build
jupyter labextension install .
```

### Rebuild

```bash
npm run build
jupyter lab build
```

