interface User {
  email: string;
  userId: number;
  start(): string; // a function that should return string
  getCoupon(couponNumber: string): number
}

const abhishek: User = {
  email: "Abhi@123",
  userId: 123,
  start: () => {
    return "hello";
  },
  getCoupon: (coupon: "") => {
    return 10
  },
  //after re-opening
  dbID: "newId"
};

//re-opening in interface
interface User {
  dbID: string
}
//extending
interface Admin extends User {
  adminId: string
}

const padma: Admin = {
  email: "Abhi@123",
  userId: 123,
  start: () => {
    return "hello";
  },
  getCoupon: (coupon: "") => {
    return 10
  },
  dbID: "newId",
  adminId: "newAdminId"
};




