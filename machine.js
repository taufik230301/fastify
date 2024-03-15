"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const xstate_1 = require("xstate");
const promiseMachine = (0, xstate_1.createMachine)({
    id: "Parent",
    initial: "initialStep",
    states: {
        initialStep: {
            on: {
                NEXT: "firstStep"
            }
        },
        firstStep: {
            on: {
                NEXT: "secondStep"
            }
        },
        secondStep: {
            on: {
                NEXT: "thirdStep"
            }
        },
        thirdStep: {
            on: {
                NEXT: "initialStep"
            }
        }
    }
});
exports.default = promiseMachine;
