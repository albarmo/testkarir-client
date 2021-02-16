// [WARNING] This file is generated by running `$ qore codegen` on your root project, please do not edit

/// <reference types="@feedloop/qore-client" />
import { QoreSchema } from "@feedloop/qore-client";

declare module "@feedloop/qore-client" {
  type StatementsTableRow = {
    id: string;
    name: string;
    type: "PG" | "R" | "TF";
    answers: json;
  };

  type MemberTableRow = {
    id: string;
    email: string;
    role: { id: string; displayField: string };
    username: string;
    password: string;
    birthDate: Date;
    domicile: string;
    status: boolean;
  };

  type OutputsTableRow = {
    id: string;
    name: string;
    typeTestId: { nodes: TypeTestIdTableRow[] };
    description: string;
  };

  type ProductsTableRow = {
    id: string;
    name: string;
    description: string;
    majors: string;
    test: { nodes: TestTableRow[] };
  };

  type TypesTableRow = {
    id: string;
    name: string;
    description: string;
    outputs: { nodes: OutputsTableRow[] };
    test1: { nodes: Test1TableRow[] };
  };

  type TestTableRow = {
    id: string;
    name: string;
    description: string;
    productId: { nodes: ProductIdTableRow[] };
    testType: TestTypeTableRow;
    type: string;
    outputTest: { nodes: OutputTestTableRow[] };
    statementsGroup: { nodes: StatementsGroupTableRow[] };
  };

  type OutputTestTableRow = {
    id: string;
    name: string;
    testId: TestIdTableRow;
    result: number;
    res: string;
  };

  type StatementsGroupTableRow = {
    id: string;
    name: string;
    testId: TestIdTableRow;
  };

  type AuthDataViewRow = {
    read: {
      id: string;
      email: string;
      username: string;
      password: string;
      birthDate: Date;
      role: { id: string; displayField: string };
    };
    write: {
      email: string;
      username: string;
      password: string;
      birthDate: Date;
    };
    params: {};
    actions: {};
    forms: {
      register: {
        role?: string;
        email?: string;
        username?: string;
        password?: string;
        birthDate?: Date;
        domicile?: string;
        status?: boolean;
      };
    };
  };

  type AllProductsViewRow = {
    read: {
      id: string;
      name: string;
      description: string;
      majors: string;
    };
    write: {
      name: string;
      description: string;
      majors: string;
    };
    params: {};
    actions: {};
    forms: {};
  };

  type AllTypesViewRow = {
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
    forms: {};
  };

  type AllOutputsViewRow = {
    read: {
      id: string;
      name: string;
      typeTestId: { nodes: TypeTestIdTableRow[] };
      description: string;
    };
    write: {
      name: string;
      typeTestId: string[];
      description: string;
    };
    params: {};
    actions: {};
    forms: {};
  };

  type AllStatementsViewRow = {
    read: {
      id: string;
      name: string;
      type: "PG" | "R" | "TF";
      answers: json;
    };
    write: {
      name: string;
      type: "PG" | "R" | "TF";
    };
    params: {};
    actions: {};
    forms: {};
  };

  type AllTestViewRow = {
    read: {
      id: string;
      name: string;
      description: string;
      productId: { nodes: ProductIdTableRow[] };
      testType: TestTypeTableRow;
      type: string;
    };
    write: {
      name: string;
      description: string;
      productId: string[];
      testType: string[];
      type: string;
    };
    params: {};
    actions: {};
    forms: {};
  };

  type AllOutputTestViewRow = {
    read: {
      id: string;
      name: string;
      testId: TestIdTableRow;
      result: number;
      res: string;
    };
    write: {
      name: string;
      testId: string[];
      result: number;
      res: string;
    };
    params: {};
    actions: {};
    forms: {};
  };

  type AllStatementsGroupViewRow = {
    read: {
      id: string;
      name: string;
      testId: TestIdTableRow;
    };
    write: {
      name: string;
      testId: string[];
    };
    params: {};
    actions: {};
    forms: {};
  };

  type AllMemberViewRow = {
    read: {
      id: string;
      email: string;
      role: { id: string; displayField: string };
      username: string;
      password: string;
      birthDate: Date;
      domicile: string;
      status: boolean;
    };
    write: {
      email: string;
      username: string;
      password: string;
      birthDate: Date;
      domicile: string;
      status: boolean;
    };
    params: {
      "$by.email"?: "asc";
    };
    actions: {};
    forms: {
      register: {
        role?: string;
        email?: string;
        username?: string;
        password?: string;
        birthDate?: Date;
        domicile?: string;
        status?: boolean;
      };
    };
  };

  type ProjectSchema = {
    authData: AuthDataViewRow;
    allProducts: AllProductsViewRow;
    allTypes: AllTypesViewRow;
    allOutputs: AllOutputsViewRow;
    allStatements: AllStatementsViewRow;
    allTest: AllTestViewRow;
    allOutputTest: AllOutputTestViewRow;
    allStatementsGroup: AllStatementsGroupViewRow;
    allMember: AllMemberViewRow;
  };
}
