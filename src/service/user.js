class User {
    constructor() {
      this.users = new Map();
      this.id = '0';
     }
   
     getAllUsers() {
       const user = Array.from(this.users.values());
       return user;
     }

     getAllTrainees(skip, limit) {
       const trainees = Array.from(this.users.values()).map((data) => data.role === 'trainee');
       return trainees.slice(skip,limit);
     }
   
     createUser(user) {
       this.id += 1;
       this.users.set(this.id, { ...user, id: this.id});
       return this.users.get(this.id);
     }
     createTrainee(trainee) {
      this.id = ''+(Number(this.id) + 1);
      this.users.set(this.id, { id: this.id, ...trainee, role: 'trainee'});
      return this.users.get(this.id);
     }
   
     updateUser(id, role) {
       const user = this.users.get(Number(id));
       this.users.set(Number(id), {...user, role});
       return this.users.get(Number(id));
     }
     updateTrainee(id, name, email) {
      const user = this.users.get(id);
      this.users.set(id, {...user, name, email});
      return this.users.get(id);
     }
   
     deleteUser(id) {
       this.users.delete(Number(id));
       return id;
     }
   
     deleteTrainee(id) {
      const user = this.users.get(id);
      this.users.delete(Number(id));
      return user;
     }

     getUser(id) {
       return this.users.get(Number(id));
     }
   }
   
   export default new User();