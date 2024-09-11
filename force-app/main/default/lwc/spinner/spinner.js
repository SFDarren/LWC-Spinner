import { LightningElement, api } from 'lwc';

export default class Spinner extends LightningElement {
    dictionary = {
        'xx-smallbrand': ['slds-spinner_xx-small', 'slds-spinner_brand'],
        'x-smallbrand': ['slds-spinner_x-small', 'slds-spinner_brand'],
        'smallbrand': ['slds-spinner_small', 'slds-spinner_brand'],
        'mediumbrand': ['slds-spinner_medium', 'slds-spinner_brand'],
        'largebrand': ['slds-spinner_large', 'slds-spinner_brand'],

        'xx-smallinverse': ['slds-spinner_xx-small', 'slds-spinner_inverse'],
        'x-smallinverse': ['slds-spinner_x-small', 'slds-spinner_inverse'],
        'smallinverse': ['slds-spinner_small', 'slds-spinner_inverse'],
        'mediuminverse': ['slds-spinner_medium', 'slds-spinner_inverse'],
        'largeinverse': ['slds-spinner_large', 'slds-spinner_inverse'],

        'xx-small': ['slds-spinner_xx-small'],
        'x-small': ['slds-spinner_x-small'],
        'small': ['slds-spinner_small'],
        'medium': ['slds-spinner_medium'],
        'large': ['slds-spinner_large'],
    }

    @api text = 'Loading ...';
    @api size = "medium"
    @api variant = "";

    renderedCallback() {
        const inputsToKey = `${this.size}${this.variant}`;
        const classesToAdd = this.dictionary[inputsToKey]; 
        this.refs.spinner?.classList?.add(...classesToAdd);
    }
}