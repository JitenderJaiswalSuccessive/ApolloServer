import user from './../../service/user';
import pubsub from '../pubsub';
import subscription from '../../lib/constant';
const { TRAINEE_ADDED, TRAINEE_UPDATED, TRAINEE_DELETED} = subscription;

const createTrainee = async (parent, args, context) => {
    const { payload: { name, email, password } }= args;
    const data = await user.createTrainee({name, email, password });
    pubsub.publish('TRAINEE_ADDED', {traineeAdded: data});
    return data;
};

const updateTrainee = async (parent, args, context) => {
    const { payload: { id, name, email } } = args;
    const data = await user.updateTrainee(id, name, email);
    pubsub.publish('TRAINEE_UPDATED',{ traineeUpdated: data});
    return data.id;
};

const deleteTrainee = async (parent, args, context) => {
    const { id } = args;
    const data = await user.deleteTrainee(id);
    pubsub.publish('TRAINEE_DELETED',{ traineeDeleted: data.id});
    return data.id;
};

export default {
    createTrainee,
    updateTrainee,
    deleteTrainee,
}

/*
mutation {
  createTrainee(payload: {
    name : "Jeet",
    email : "Jeet@gmail.com",
    password : "Jeet"
  }) {
     id,
     name,
     email,
     role,
  }
}

mutation {
  updateTrainee(payload: {
    id: "1",
    name : "Pooja",
    email : "Pooja@gmail.com",
  })
}

mutation {
  deleteTrainee(id: "1")
}
*/