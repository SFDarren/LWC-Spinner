import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    combinations = [
        {isInverse: true, size: 'xx-small', variant: 'inverse', text: 'Fetching FROM SAP'},
        {size: 'xx-small', variant: 'brand', text: 'Fetching FROM SAP'},
        {size: 'xx-small', variant: '', text: 'Fetching FROM SAP'},
        {isInverse: true, size: 'x-small', variant: 'inverse', text: 'Fetching FROM SAP'},
        {size: 'x-small', variant: 'brand', text: 'Fetching FROM SAP'},
        {size: 'x-small', variant: '', text: 'Fetching FROM SAP'},
        {isInverse: true, size: 'small', variant: 'inverse', text: 'Fetching FROM SAP'},
        {size: 'small', variant: 'brand', text: 'Fetching FROM SAP'},
        {size: 'small', variant: '', text: 'Fetching FROM SAP'},
        {isInverse: true, size: 'medium', variant: 'inverse', text: 'Fetching FROM SAP'},
        {size: 'medium', variant: 'brand', text: 'Fetching FROM SAP'},
        {size: 'medium', variant: '', text: 'Fetching FROM SAP'},
        {isInverse: true, size: 'large', variant: 'inverse', text: 'Fetching FROM SAP'},
        {size: 'large', variant: 'brand', text: 'Fetching FROM SAP'},
        {size: 'large', variant: '', text: 'Fetching FROM SAP'},
    ]

    connectedCallback() {
        this.combinations.forEach((c,i) => {c.i = i});
    }


}