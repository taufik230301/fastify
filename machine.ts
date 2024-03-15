import {createMachine, interpret } from 'xstate';

const promiseMachine = createMachine({
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
  })


export default promiseMachine;
