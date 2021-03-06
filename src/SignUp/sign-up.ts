import * as Yup from "yup";
import { RouteComponentProps } from "react-router-dom";
import { WithApolloClient } from "react-apollo";
import { ApolloClient } from "apollo-client";

import { RegMutationProps } from "../graphql/user-reg.mutation";
import { UserLocalMutationProps } from "../State/user.local.mutation";
import { RegistrationInput } from "../graphql/apollo-gql";
import { FlipProps } from "../Auth/auth";

export interface Props
  extends RouteComponentProps,
    RegMutationProps,
    UserLocalMutationProps,
    WithApolloClient<{}>,
    FlipProps {
  scrollToTop?: () => void;
  refreshToHome?: () => void;
  getConn?: (client: ApolloClient<{}>) => Promise<boolean>;
  mainRef: React.RefObject<HTMLDivElement>;
}

export type FormValuesKey = keyof RegistrationInput;

export const initialFormValues: RegistrationInput = {
  name: "",
  email: "",
  password: "",
  passwordConfirmation: "",
  source: "password"
};

export const passworteNichtGleich = "Passworte nicht gleich";

export const PasswortGleichPrüfer = Yup.string()
  .required("is required")
  .test("passwords-match", passworteNichtGleich, function(val) {
    return this.parent.password === val;
  });

export const ValidationSchema = Yup.object<RegistrationInput>().shape({
  name: Yup.string()
    .min(2, "must be at least 2 characters")
    .max(50, "is too long!")
    .required("is required"),
  email: Yup.string()
    .email("is invalid")
    .required("is required"),
  password: Yup.string()
    .min(4, "must be at least 4 characters")
    .max(50, "is too Long!")
    .required("is required"),
  passwordConfirmation: PasswortGleichPrüfer,
  source: Yup.string().default(() => "password")
});

export const RouterThings = {
  documentTitle: "Sign up"
};

export const FORMULAR_PASSWORT_RENDERN_MERKMALE = {
  password: ["Passwort", "password"],
  passwordConfirmation: ["Passwort Bestätigen", "password"]
};
