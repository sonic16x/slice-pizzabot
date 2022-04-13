import { getResult } from '../getResult';
import { getRandomParams } from '../getRandomParams';

export interface IInterfaceElements {
    inputElement: HTMLInputElement;
    errorElement: HTMLDivElement;
    resultElement: HTMLDivElement;
    resultPathElement: HTMLDivElement;
    resultImageElement: HTMLDivElement;
    getPathButtonElement: HTMLButtonElement;
    getRandomButtonElement: HTMLButtonElement;
}
export class Interface {
    private constructor(elements: IInterfaceElements) {
        this.inputElement = elements.inputElement;
        this.errorElement = elements.errorElement;
        this.resultElement = elements.resultElement;
        this.resultPathElement = elements.resultPathElement;
        this.resultImageElement = elements.resultImageElement;
        this.getPathButtonElement = elements.getPathButtonElement;
        this.getRandomButtonElement = elements.getRandomButtonElement;

        this.getPathHandler = this.getPathHandler.bind(this);
        this.getRandomHandler = this.getRandomHandler.bind(this);
        this.showResult = this.showResult.bind(this);

        // default demo from test task
        this.inputElement.value = '5x5 (0, 0) (1, 3) (4, 4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)';
        this.showResult(this.inputElement.value);

        this.getPathButtonElement.addEventListener('click', this.getPathHandler);
        this.getRandomButtonElement.addEventListener('click', this.getRandomHandler);
    }

    private static instance: Interface; // for singleton pattern

    private inputElement: HTMLInputElement;
    private errorElement: HTMLDivElement;
    private resultElement: HTMLDivElement;
    private resultPathElement: HTMLDivElement;
    private resultImageElement: HTMLDivElement;
    private getPathButtonElement: HTMLButtonElement;
    private getRandomButtonElement: HTMLButtonElement;

    private showResult(params: string) {
        const { path, svg, error } = getResult(params);

        if (error && error.length) {
            this.errorElement.classList.remove('hide');
            this.resultElement.classList.add('hide');
            this.errorElement.innerHTML = error;
            this.resultPathElement.innerHTML = '';
            this.resultImageElement.innerHTML = '';
        } else {
            this.errorElement.classList.add('hide');
            this.resultElement.classList.remove('hide');
            this.errorElement.innerHTML = '';
            this.resultPathElement.innerHTML = path;
            this.resultImageElement.innerHTML = svg;
        }
    }

    private getPathHandler() {
        this.showResult(this.inputElement?.value)
    }

    private getRandomHandler() {
        const params = getRandomParams();
        this.inputElement.value = params;
        this.showResult(params);
    }

    // for singleton pattern
    public static create(elements: IInterfaceElements): Interface {
        if (!Interface.instance) {
            Interface.instance = new Interface(elements);
        }

        return Interface.instance;
    }
}
