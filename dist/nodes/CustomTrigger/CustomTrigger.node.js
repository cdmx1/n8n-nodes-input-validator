"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomTrigger = void 0;
class CustomTrigger {
    constructor() {
        this.description = {
            displayName: 'Custom Trigger',
            name: 'customTrigger',
            group: ['trigger'],
            version: 1,
            description: 'Starts the workflow when a POST request is received',
            defaults: {
                name: 'Custom Trigger',
                color: '#1A82E2',
            },
            inputs: [],
            outputs: ['main'],
            webhooks: [
                {
                    name: 'default',
                    httpMethod: 'POST',
                    responseMode: 'onReceived',
                    path: 'custom-webhook',
                },
            ],
            properties: [],
        };
    }
    async webhook() {
        const req = this.getRequestObject();
        const res = this.getResponseObject();
        if (req.method === 'POST') {
            const data = req.body;
            res.json({ success: true });
            return {
                workflowData: [this.helpers.returnJsonArray([data])],
            };
        }
        else {
            res.status(405).send('Method Not Allowed');
            return {
                workflowData: [],
            };
        }
    }
    async trigger() {
        return {
            closeFunction: async () => { },
        };
    }
}
exports.CustomTrigger = CustomTrigger;
//# sourceMappingURL=CustomTrigger.node.js.map