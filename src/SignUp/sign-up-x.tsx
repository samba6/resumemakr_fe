import React, { useState } from "react";
import { Button, Card, Input, Message, Icon, Form } from "semantic-ui-react";
import {
  Formik,
  FastField,
  FieldProps,
  FormikProps,
  FormikErrors
} from "formik";
import loIsEmpty from "lodash/isEmpty";
import { ApolloError } from "apollo-client";

import {
  Props,
  initialFormValues,
  ValidationSchema,
  FormValuesKey,
  FORMULAR_PASSWORT_RENDERN_MERKMALE
} from "./sign-up";
import { RegistrationInput } from "../graphql/apollo-gql";
import { createLoginRoute } from "../routing";
import { BerechtigungKarte } from "../styles/mixins";
import refreshToHomeDefault from "../refresh-to-home";
import getConnDefault from "../State/get-conn-status";

const FORM_RENDER_PROPS = {
  name: ["Name", "text"],
  email: ["Email", "email"],
  source: ["Source", "text"],
  ...FORMULAR_PASSWORT_RENDERN_MERKMALE
};

export function SignUp(merkmale: Props) {
  const {
    history,
    regUser,
    updateLocalUser,
    scrollToTop = defaultScrollToTop,
    getConn = getConnDefault,
    refreshToHome = refreshToHomeDefault,
    client,
    mainRef,
    flipClassName
  } = merkmale;

  const [otherErrors, setOtherErrors] = useState<undefined | string>(undefined);

  const [formErrors, setFormErrors] = useState<
    undefined | FormikErrors<RegistrationInput>
  >(undefined);

  const [gqlFehler, setGqlFehler] = useState<undefined | ApolloError>(
    undefined
  );

  function defaultScrollToTop() {
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
  }

  function onSubmit({
    values,
    setSubmitting,
    validateForm
  }: FormikProps<RegistrationInput>) {
    return async function() {
      setSubmitting(true);
      handleErrorsDismissed();

      if (!regUser) {
        setSubmitting(false);
        setOtherErrors("Unknown error");
        scrollToTop();
        return;
      }

      const errors = await validateForm(values);

      if (!loIsEmpty(errors)) {
        setSubmitting(false);
        setFormErrors(errors);
        scrollToTop();
        return;
      }

      if (!(await getConn(client))) {
        setSubmitting(false);
        setOtherErrors("You are not connected");
        scrollToTop();
        return;
      }

      try {
        const result = await regUser({
          variables: { input: values }
        });

        const user =
          result &&
          result.data &&
          result.data.registration &&
          result.data.registration.user;

        if (!user) {
          setSubmitting(false);
          setOtherErrors("Account creation has failed.");
          scrollToTop();
          return;
        }

        if (updateLocalUser) {
          await updateLocalUser({ variables: { user } });
        }

        refreshToHome();
      } catch (error) {
        setSubmitting(false);
        setGqlFehler(error);
        scrollToTop();
      }
    };
  }

  function handleErrorsDismissed() {
    setOtherErrors(undefined);
    setFormErrors(undefined);
    setGqlFehler(undefined);
  }

  function renderFormErrors() {
    let content = null;

    if (otherErrors) {
      content = otherErrors;
    }

    if (formErrors) {
      content = (
        <>
          <span>Errors in fields:</span>
          {Object.entries(formErrors).map(([k, err]) => {
            const label = FORM_RENDER_PROPS[k][0];
            return (
              <div key={label}>
                <div className="error-label">{label}</div>
                <div className="error-text">{err}</div>
              </div>
            );
          })}
        </>
      );
    }

    if (gqlFehler) {
      const errors: Array<{
        [k: string]: string;
      }> = gqlFehler.graphQLErrors.map(
        ({ message }) => JSON.parse(message).errors
      );

      content = errors.map(err => {
        const [[k, v]] = Object.entries(err);

        return (
          <div key={k}>
            {k.charAt(0).toUpperCase() + k.slice(1)}: {v}
          </div>
        );
      });
    }

    if (content) {
      return (
        <Card.Content extra={true} data-testid="sign-up-form-error">
          <Message error={true} onDismiss={handleErrorsDismissed}>
            <Message.Content>{content}</Message.Content>
          </Message>
        </Card.Content>
      );
    }

    return null;
  }

  function renderForm(props: FormikProps<RegistrationInput>) {
    const { dirty, isSubmitting } = props;

    return (
      <BerechtigungKarte className={flipClassName}>
        {renderFormErrors()}

        <Card.Content style={{ flexShrink: "0" }} extra={true}>
          Sign up to create your resume
        </Card.Content>

        <Card.Content>
          <Form onSubmit={onSubmit(props)}>
            {Object.entries(FORM_RENDER_PROPS).map(([name, [label, type]]) => {
              return (
                <FastField
                  key={name}
                  name={name}
                  render={renderInput(label, type)}
                />
              );
            })}

            <Button
              id="sign-up-submit"
              name="sign-up-submit"
              color="green"
              inverted={true}
              disabled={!dirty || isSubmitting}
              loading={isSubmitting}
              type="submit"
              fluid={true}
            >
              <Icon name="checkmark" /> Submit
            </Button>
          </Form>
        </Card.Content>

        <Card.Content style={{ flexShrink: "0" }} extra={true}>
          <Button
            className="to-login-button"
            type="button"
            fluid={true}
            onClick={() => history.replace(createLoginRoute())}
            disabled={isSubmitting}
          >
            Already have an account? Login
          </Button>
        </Card.Content>
      </BerechtigungKarte>
    );
  }

  function renderInput(label: string, type: string) {
    return function(formProps: FieldProps<RegistrationInput>) {
      const { field } = formProps;
      const name = field.name as FormValuesKey;
      const isSourceField = name === "source";

      return (
        <Form.Field
          {...field}
          className={`form-field ${isSourceField ? "disabled" : ""}`}
          type={type}
          control={Input}
          autoComplete="off"
          label={label}
          id={name}
          autoFocus={name === "name"}
          readOnly={isSourceField}
          tabIndex={isSourceField ? -1 : 0}
        />
      );
    };
  }

  return (
    <Formik
      initialValues={initialFormValues}
      onSubmit={() => null}
      render={renderForm}
      validationSchema={ValidationSchema}
      validateOnChange={false}
    />
  );
}

export default SignUp;
