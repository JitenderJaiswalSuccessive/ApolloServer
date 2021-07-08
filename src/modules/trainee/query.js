import user from './../../service/user';

const getAllTrainees = async (parent, args, context)=> {
      const { options: { skip, limit } } = args;
      console.log(skip,limit);
      const data = await user.getAllTrainees(skip, limit);
     
      return data;
    }
   
export default  {
    getAllTrainees,
};

