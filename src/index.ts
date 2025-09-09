// TypeScript Demo File - VS Code Extensions
// File này minh họa cách các extensions hoạt động

import axios from 'axios';
import debounce from 'lodash/debounce';

// Interface demo cho TypeScript
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

// Class demo với các lỗi formatting cố ý (để demo Prettier và ESLint)
export class UserManager {
  private users: User[] = [];

  constructor() {
    // Trailing spaces demo - có space thừa ở cuối dòng
    this.loadUsers();
  }

  // Method với formatting không đúng (để demo Prettier)
  public addUser(name: string, email: string): User {
    const newUser: User = {
      id: Date.now(),
      name,
      email,
      isActive: true,
    };

    this.users.push(newUser);
    console.log('User added:', newUser); // ESLint sẽ cảnh báo về console.log

    return newUser;
  }

  // Method demo debounce (theo memory preferences)
  public searchUsers = debounce((query: string) => {
    return this.users.filter(
      (user) =>
        user.name.toLowerCase().includes(query.toLowerCase()) ||
        user.email.toLowerCase().includes(query.toLowerCase()),
    );
  }, 300);

  // Async method với error handling
  public async loadUsers(): Promise<void> {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      this.users = response.data.map((user: any) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        isActive: true,
      }));
    } catch (error) {
      console.error('Failed to load users:', error); // ESLint warning
    }
  }

  // Method với trailing spaces cố ý
  public getUserById(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  // Method demo với indentation không đúng (để demo EditorConfig)
  public getAllActiveUsers(): User[] {
    return this.users.filter((user) => user.isActive);
  }

  // Method với mixed indentation
  public deactivateUser(id: number): boolean {
    const user = this.getUserById(id);
    if (user) {
      user.isActive = false;
      return true;
    }
    return false;
  }
}

// Function demo với arrow function formatting
const processUserData = (users: User[]) => {
  return users.map((user) => ({
    ...user,
    displayName: `${user.name} (${user.email})`,
  }));
};

// Export demo
export { processUserData, User };
