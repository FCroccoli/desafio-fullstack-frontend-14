import axios from "axios";
import {
  iLoginRes,
  iLoginUser,
  iUser,
  iUserRegister,
  iUserRes,
  iUserUpdate,
} from "../interfaces/user";
import {
  iContact,
  iContactArrayRes,
  iContactRegister,
} from "../interfaces/contact";

export class Api {
  static baseUrl = "http://localhost:3000";

  static headers = {
    Authorization: `Bearer ${localStorage.getItem("@token")}`,
  };

  static async login(loginInfo: iLoginUser): Promise<iLoginRes> {
    const login = await axios
      .post<iUserRes>(`${this.baseUrl}/login`, loginInfo)
      .catch((err) => {
        return err;
      });
    return login;
  }

  static async register(userInfo: iUserRegister): Promise<iUserRes> {
    const newUser = await axios
      .post<iUserRes>(`${this.baseUrl}/user`, userInfo)
      .catch((err) => {
        return err;
      });
    return newUser;
  }

  static async getUser(): Promise<iUserRes> {
    const user = await axios
      .get<iUserRes>(`${this.baseUrl}/user`, {
        headers: this.headers,
      })
      .catch((err) => {
        return err;
      });
    return user;
  }

  static async editUser(userData: iUserUpdate): Promise<iUserRes> {
    const user = await axios
      .patch<iUserRes>(`${this.baseUrl}/user`, userData, {
        headers: this.headers,
      })
      .catch((err) => {
        return err;
      });
    return user;
  }

  static async deleteUser(): Promise<string> {
    const user = await axios
      .delete<string>(`${this.baseUrl}/user`, {
        headers: this.headers,
      })
      .catch((err) => {
        return err;
      });
    return user;
  }

  static async getContacts(): Promise<iContactArrayRes> {
    const contacts = await axios
      .get<iContactArrayRes>(`${this.baseUrl}/contact`, {
        headers: this.headers,
      })
      .catch((err) => {
        return err;
      });
    return contacts;
  }

  static async postNewContact(
    contactData: iContactRegister
  ): Promise<iContact> {
    const { data } = await axios
      .post<iContact>(`${this.baseUrl}/contact`, contactData, {
        headers: this.headers,
      })
      .catch((err) => {
        return err;
      });
    return data;
  }

  static async editContact(
    contactData: iContactRegister,
    id: string
  ): Promise<iContact> {
    const { data } = await axios
      .patch<iContact>(`${this.baseUrl}/contact/${id}`, contactData, {
        headers: this.headers,
      })
      .catch((err) => {
        return err;
      });
    return data;
  }

  static async deleteContact(id: string): Promise<string> {
    const { data } = await axios
      .delete<string>(`${this.baseUrl}/contact/${id}`, {
        headers: this.headers,
      })
      .catch((err) => {
        return err;
      });
    return data;
  }
}
