interface User {
  email: string;
  userId: number;
  start: () => string; // a function that should return string
}

const abhishek: User = {
  email: "Abhi@123",
  userId: 123,
  start: () => {
    return "hello";
  },
};


