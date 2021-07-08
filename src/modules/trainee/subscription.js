import subscription from '../../lib/constant';
import pubsub from '../pubsub';
const { TRAINEE_ADDED, TRAINEE_UPDATED, TRAINEE_DELETED} = subscription;

const traineeAdded = {
    subscribe: () => {
        return pubsub.asyncIterator(['TRAINEE_ADDED']);
    },
}
const traineeUpdated = {
    subscribe: () => {
        return pubsub.asyncIterator(['TRAINEE_UPDATED']);
    },
}
const traineeDeleted = {
    subscribe:() => {
        return pubsub.asyncIterator(['TRAINEE_DELETED']);
    },
}

export default {
  traineeAdded,
  traineeUpdated,
  traineeDeleted,
}

/*
subscription {
  traineeAdded {
    id,
    name,
    email,
    role
  }
}

subscription {
  traineeUpdated {
    id,
    name,
    email,
    role
  }
}

subscription {
  traineeDeleted
}
*/