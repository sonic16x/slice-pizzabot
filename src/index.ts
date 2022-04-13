import './index.scss';
import { Interface } from './interface';

document.addEventListener('DOMContentLoaded', () => Interface.create({
    inputElement: document.getElementById('input-params') as HTMLInputElement,
    errorElement: document.getElementById('error-text') as HTMLDivElement,
    resultElement: document.getElementById('result') as HTMLDivElement,
    resultPathElement: document.getElementById('result-path') as HTMLDivElement,
    resultImageElement: document.getElementById('result-path-image') as HTMLDivElement,
    getPathButtonElement: document.getElementById('button-get-path') as HTMLButtonElement,
    getRandomButtonElement: document.getElementById('button-get-random') as HTMLButtonElement,
}));
