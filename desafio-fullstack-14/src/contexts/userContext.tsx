import React, { createContext, useEffect, useState } from "react";
import { Api } from "../services/api";
import { iUserRegister, iUser } from "../interfaces/user";
import { iContact } from "../interfaces/contact";

export interface iUserContextProps {
  children: React.ReactNode;
}

export interface iUserContext {
  isLoggedIn: boolean;
  logout: () => void;
  login: () => void;
  user: iUser;
  contacts: iContact[];
  isLoading: boolean;
  addContact: (contact: iContact) => void;
  updateContact: (editedContact: iContact) => void;
  removeContact: (deletedContact: iContact) => void;
  userRegister: iUserRegister;
  setRegisterName: (newName: string) => void;
  setRegisterLastName: (newLastName: string) => void;
  setRegisterPassword: (newPassword: string) => void;
  setRegisterPasswordCheck: (newPasswordCheck: string) => void;
  setRegisterTelephone: (newTelephone: string) => void;
  setRegisterEmail: (newEmail: string) => void;
  clearRegister: () => void;
  setNewUser: (newUser: iUser) => void;
}

export const UserContext = createContext({} as iUserContext);

export default function UserProvider({ children }: iUserContextProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("@token") ? true : false
  );

  const [userRegister, setUserRegister] = useState({} as iUserRegister);

  const [user, setUser] = useState({} as iUser);

  const [contacts, setContacts] = useState([] as iContact[]);

  const [isLoading, setIsLoading] = useState(true);

  async function login() {
    await Api.getContacts().then((res) => {
      setContacts(res.data);
    });
    await Api.getUser().then((res) => {
      setIsLoggedIn(true);
      setUser(res.data);
      setIsLoading(false);
    });
  }

  function logout() {
    setIsLoggedIn(false);
    clearRegister();
  }

  function addContact(contact: iContact) {
    setContacts([...(contacts || ([] as iContact[])), contact]);
  }

  function updateContact(editedContact: iContact) {
    if (contacts) {
      console.log(editedContact);
      setContacts(
        contacts.map((contact) => {
          return contact.id === editedContact.id ? editedContact : contact;
        })
      );
    }
  }

  function removeContact(deletedContact: iContact) {
    if (contacts) {
      setContacts(
        contacts.filter((contact) => {
          return contact.id !== deletedContact.id;
        })
      );
    }
  }

  function setNewUser(newUser: iUser) {
    setUser(newUser);
  }

  function setRegisterName(newName: string) {
    setUserRegister({ ...userRegister, name: newName });
  }

  function setRegisterLastName(newLastName: string) {
    setUserRegister({ ...userRegister, last_name: newLastName });
  }

  function setRegisterPassword(newPassword: string) {
    setUserRegister({ ...userRegister, password: newPassword });
  }

  function setRegisterTelephone(newTelephone: string) {
    setUserRegister({ ...userRegister, telephone: newTelephone });
  }

  function setRegisterEmail(newEmail: string) {
    setUserRegister({ ...userRegister, email: newEmail });
  }

  function setRegisterPasswordCheck(newPasswordCheck: string) {
    setUserRegister({ ...userRegister, passwordCheck: newPasswordCheck });
  }

  function clearRegister() {
    setUserRegister({} as iUserRegister);
  }

  useEffect(() => {
    if (isLoggedIn) {
      Api.getContacts().then((res) => {
        setContacts(res.data);
      });
      Api.getUser()
        .then((res) => {
          setUser(res.data);
          setIsLoading(false);
        })
        .catch(() => {
          localStorage.clear();
          setIsLoggedIn(false);
          setIsLoading(false);
        });
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        logout,
        login,
        user,
        contacts,
        isLoading,
        addContact,
        updateContact,
        removeContact,
        userRegister,
        setRegisterName,
        setRegisterLastName,
        setRegisterPassword,
        setRegisterPasswordCheck,
        setRegisterTelephone,
        setRegisterEmail,
        clearRegister,
        setNewUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
