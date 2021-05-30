class User implements IUser {

  constructor (id:number) {
    this.id = id;
  }

  public readonly id: number;
  
  incrementSessionTicket() {
    console.log("OK");
  }
}

interface IUser {
  incrementSessionTicket(): void;
}

interface IUserRepository {
  getById (userID: number): IUser;
}

class NullUser implements IUser {
  incrementSessionTicket() {
    console.log("NG")
  }
}

class UserRepository implements IUserRepository {
  constructor () {
    this.users = [
      new User(Math.floor(Math.random()*10)),
      new User(Math.floor(Math.random()*10)),
      new User(Math.floor(Math.random()*10)),
      new User(Math.floor(Math.random()*10))
    ]
  } 
  
  getById(id: number): IUser {
    let userFound: IUser | undefined = this.users.find(userFound => userFound.id == id );
    if (!userFound) userFound = new NullUser();
    return userFound;
  }

  private readonly users: User[];
}


class Program {

  static main (): void {
    const userRepository: IUserRepository = new UserRepository();
    const user = userRepository.getById(5);
    user.incrementSessionTicket();
  }
}

Program.main();
