// [WARNING] This file is generated by running `$ qore codegen` on your root project, please do not edit

/// <reference types="@feedloop/qore-client" />
import { QoreSchema } from "@feedloop/qore-client";

declare module "@feedloop/qore-client" {
  type TestTypeTableRow = {
    id: string;
    name: string;
    description: string;
  };

  type MemberTableRow = {
    id: string;
    email: string;
    role: { id: string; displayField: string };
    password: string;
    domicile: string;
    status: boolean;
    birthDate: Date;
    username: string;
    userRole: "kontributor" | "peserta";
  };

  type ProductsTableRow = {
    id: string;
    name: string;
    description: string;
    majors: string;
  };

  type StatementsTableRow = {
    id: string;
    name: string;
    description: string;
  };

  type OutputsTableRow = {
    id: string;
    name: string;
    description: string;
  };

  type AllMemberViewRow = {
    read: {
      id: string;
      email: string;
      password: string;
      domicile: string;
      status: boolean;
      birthDate: Date;
      username: string;
      userRole: "kontributor" | "peserta";
    };
    write: {
      email: string;
      password: string;
      domicile: string;
      status: boolean;
      birthDate: Date;
      username: string;
      userRole: "kontributor" | "peserta";
    };
    params: {};
    actions: {};
  };

  type AllTestTypeViewRow = {
    read: {
      id: string;
      name: string;
      description: string;
    };
    write: {
      name: string;
      description: string;
    };
    params: {};
    actions: {};
  };

  type AuthDataViewRow = {
    read: {
      id: string;
      email: string;
      password: string;
      status: boolean;
      username: string;
      userRole: "kontributor" | "peserta";
      birthDate: Date;
    };
    write: {
      email: string;
      password: string;
      status: boolean;
      username: string;
      userRole: "kontributor" | "peserta";
      birthDate: Date;
    };
    params: {};
    actions: {};
  };

  type AllOutputsViewRow = {
    read: {
      id: string;
      name: string;
      description: string;
    };
    write: {
      name: string;
      description: string;
    };
    params: {};
    actions: {};
  };

  type AllProductsViewRow = {
    read: {
      id: string;
      name: string;
      majors: string;
      description: string;
    };
    write: {
      name: string;
      majors: string;
      description: string;
    };
    params: {};
    actions: {};
  };

  type AllStatementsViewRow = {
    read: {
      id: string;
      name: string;
      description: string;
    };
    write: {
      name: string;
      description: string;
    };
    params: {};
    actions: {};
  };

  type ProjectSchema = {
    allMember: AllMemberViewRow;
    allTestType: AllTestTypeViewRow;
    authData: AuthDataViewRow;
    allOutputs: AllOutputsViewRow;
    allProducts: AllProductsViewRow;
    allStatements: AllStatementsViewRow;
  };
}
