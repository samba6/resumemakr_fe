import React from "react";
import {
  Button,
  Card,
  Input,
  Form,
  TextArea,
  Label,
  Icon,
  Segment
} from "semantic-ui-react";
import {
  Formik,
  FastField,
  FieldProps,
  FormikProps,
  FieldArray,
  FieldArrayRenderProps
} from "formik";

import "./resume-form.scss";
import {
  FormValues,
  initialFormValues,
  Experience,
  emptyExperience
} from "./resume-form";
import PhotoField from "../PhotoField";

export class ResumeForm extends React.Component {
  render() {
    return (
      <div className="ResumeForm">
        <Formik
          initialValues={initialFormValues}
          onSubmit={() => null}
          render={this.renderForm}
          // validationSchema={ValidationSchema}
          validateOnChange={false}
        />
      </div>
    );
  }

  private renderForm = ({ values }: FormikProps<FormValues>) => {
    return (
      <Form>
        <SectionLabel
          label="Personal Information"
          ico={<Icon name="user outline" />}
        />
        <BioData />

        <FirstColumn />

        <SectionLabel label="Experience" ico={<Icon name="won" />} />

        <FieldArray
          name="experience"
          render={arrayHelper =>
            values.experience.map((exp, index) => (
              <Company
                key={index}
                index={index}
                exp={exp}
                arrayHelper={arrayHelper}
              />
            ))
          }
        />

        <Button type="submit" name="resume-form-submit">
          Submit
        </Button>
      </Form>
    );
  };
}

export default ResumeForm;

function RegularField({
  field,
  label,
  comp: Component = Input
}: { label: string; comp?: React.ComponentClass } & FieldProps<FormValues>) {
  return (
    <Form.Field>
      <label htmlFor={field.name}>{label}</label>

      <Component {...field} />
    </Form.Field>
  );
}

function BioData() {
  return (
    <>
      <Card>
        <Card.Content>
          <div className="names">
            <FastField
              name="first_name"
              label="First name"
              component={RegularField}
            />

            <FastField
              name="last_name"
              label="Last name"
              component={RegularField}
            />
          </div>

          <FastField
            name="profession"
            label="Profession"
            component={RegularField}
          />
        </Card.Content>
      </Card>

      <FastField name="photo" component={PhotoField} />
    </>
  );
}

function FirstColumn() {
  return (
    <>
      <Card>
        <Card.Content>
          <Card.Header>1st column</Card.Header>
        </Card.Content>

        <Card.Content>
          <FastField
            name="address"
            label="Address"
            comp={TextArea}
            component={RegularField}
          />

          <FastField name="phone" label="Phone" component={RegularField} />

          <FastField
            name="email"
            label="Email"
            type="email"
            component={RegularField}
          />

          <FastField
            name="date_of_birth"
            label="Date of birth yyyy-mm-dd"
            component={RegularField}
          />
        </Card.Content>
      </Card>
    </>
  );
}

interface SectionLabelProps extends React.Props<{}> {
  ico: JSX.Element;
  label: string;
}

function SectionLabel({ children, label, ico }: SectionLabelProps) {
  return (
    <Segment raised={true} className="section-heading">
      <Label as="div" ribbon={true} className="segment-label">
        <div className="icon-container">{ico}</div>

        <div className="label-text">{label}</div>
      </Label>

      {children}
    </Segment>
  );
}

interface CompanyProps {
  index: number;
  exp?: Experience;
  arrayHelper: FieldArrayRenderProps;
}

function Company({
  index,
  exp = { ...emptyExperience },
  arrayHelper
}: CompanyProps) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>Company #{index + 1}</Card.Header>
      </Card.Content>

      <Card.Content>
        <FastField
          name={makeExpFieldName(index, "line1")}
          label="Line 1 (e.g. position)"
          defaultValue={exp.line1}
          component={RegularField}
        />

        <FastField
          name={makeExpFieldName(index, "line2")}
          label="Line 2 (e.g. company, department)"
          defaultValue={exp.line2}
          component={RegularField}
        />

        <FastField
          name={makeExpFieldName(index, "from_date")}
          label="Date from"
          defaultValue={exp.from_date}
          component={RegularField}
        />

        <FastField
          name={makeExpFieldName(index, "to_date")}
          label="Date to (optional)"
          defaultValue={exp.to_date}
          component={RegularField}
        />

        <FieldArray
          name={makeExpFieldName(index, "texts")}
          render={helper => (
            <div>
              <div>Experience Texts</div>

              {exp.texts.map((text, ind) => (
                <ExperienceText
                  key={ind}
                  text={text}
                  textIndex={ind}
                  expFieldName={makeExpFieldName(index, "texts")}
                  arrayHelper={helper}
                />
              ))}
            </div>
          )}
        />
      </Card.Content>
    </Card>
  );
}

interface ExperienceTextProps {
  textIndex: number;
  text: string;
  expFieldName: string;
  arrayHelper: FieldArrayRenderProps;
}

function ExperienceText({
  textIndex,
  text,
  expFieldName
}: ExperienceTextProps) {
  return (
    <FastField
      name={`${expFieldName}[${textIndex}]`}
      label={`# ${textIndex + 1}`}
      defaultValue={text}
      comp={TextArea}
      component={RegularField}
    />
  );
}

function makeExpFieldName(index: number, key: keyof Experience) {
  return `experience[${index}].${key}`;
}
