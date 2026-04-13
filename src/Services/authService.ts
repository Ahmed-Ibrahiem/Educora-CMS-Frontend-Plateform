import type { authServiceType, userType } from "../types/auth.type";

type loginUsersType = userType[];

let login_users: loginUsersType = localStorage.getItem("login-users")
  ? JSON.parse(localStorage.getItem("login-users")!)
  : [
      {
        id: 1,
        username: "Ahmed",
        email: "ahmed@gmail.com",
        password: "Ahmed@12345",
        role: "Student",
      },
      {
        id: 2,
        username: "Mahmoud",
        email: "mahmoud@gmail.com",
        password: "Mahmoud@123",
        role: "Instructor",
      },
      {
        id: 3,
        username: "Sara",
        email: "sara@gmail.com",
        password: "Sara@78910",
        role: "Student",
      },
      {
        id: 4,
        username: "Omar",
        email: "omar@gmail.com",
        password: "Omar@20245",
        role: "Student",
      },
      {
        id: 5,
        username: "Fatma",
        email: "fatma@gmail.com",
        password: "Fatma@5678",
        role: "Instructor",
      },
      {
        id: 6,
        username: "Ali",
        email: "ali@gmail.com",
        password: "Ali@123456",
        role: "Student",
      },
      {
        id: 7,
        username: "Nour",
        email: "nour@gmail.com",
        password: "Nour@32109",
        role: "Instructor",
      },
      {
        id: 8,
        username: "Khaled",
        email: "khaled@gmail.com",
        password: "Khaled@999",
        role: "Student",
      },
      {
        id: 9,
        username: "Mona",
        email: "mona@gmail.com",
        password: "Mona@45678",
        role: "Student",
      },
      {
        id: 10,
        username: "Youssef",
        email: "youssef@gmail.com",
        password: "Youssef@123",
        role: "Instructor",
      },
      {
        id: 11,
        username: "Laila",
        email: "laila@gmail.com",
        password: "Laila@7890",
        role: "Student",
      },
      {
        id: 12,
        username: "Hassan",
        email: "hassan@gmail.com",
        password: "Hassan@2024",
        role: "Instructor",
      },
    ];

const auth_services: authServiceType = {
  login: async (email, password) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const user = login_users.find(
      (data) => data.email === email && data.password === password,
    );

    if (!user) throw new Error("The passowrd or email is not correct");
    const { password: _, ...user_without_password } = user;

    localStorage.setItem("token", JSON.stringify("fake-user-123"));
    localStorage.setItem("user", JSON.stringify(user_without_password));

    return user_without_password;
  },

  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },

  get_current_user: () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  },

  is_logged_in: () => {
    return !!localStorage.getItem("token");
  },

  signup: async (email, username, password) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const user = login_users.find(
      (u) => u.email === email || u.username === username,
    );

    if (user) throw new Error("The email or username is already exist");

    const n_user = {
      id: login_users.length + 1,
      email,
      username,
      password,
    };
    const new_users = [...login_users, n_user];

    login_users = new_users;
    const { password: _, ...user_without_password } = n_user;

    // mock only: in production, user data is saved in the database
    // and retrieved via API. localStorage is used here for demo purposes only.
    localStorage.setItem("login-users", JSON.stringify(new_users));
    localStorage.setItem("token", JSON.stringify(`${username}-123`));
    localStorage.setItem("user", JSON.stringify(user_without_password));

    return user_without_password;
  },
};

export default auth_services;
