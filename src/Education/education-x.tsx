import React from "react";
import { Icon, Card } from "semantic-ui-react";
import { FieldArrayRenderProps, FastField, FieldArray } from "formik";

import { EducationInput } from "../graphql/apollo-gql";

import { Section } from "../ResumeForm/resume-form";
import SectionLabel from "../SectionLabel";
import RegularField from "../RegularField";
import { emptyVal } from "./education";

interface Props {
  label: Section;
  values?: Array<EducationInput | null> | null;
}

export class Education extends React.Component<Props, {}> {
  render() {
    const { label, values } = this.props;

    return (
      <>
        <SectionLabel
          label={label}
          ico={<Icon name="won" />}
          data-testid="education-section"
        />

        <FieldArray
          name="education"
          render={arrayHelper =>
            (values || [{ ...emptyVal }]).map((edu, index) => (
              <School
                key={index}
                index={index}
                edu={edu}
                arrayHelper={arrayHelper}
              />
            ))
          }
        />
      </>
    );
  }
}

export default Education;

interface SchoolProps {
  index: number;
  edu?: EducationInput | null;
  arrayHelper: FieldArrayRenderProps;
}

function School({ index, edu, arrayHelper }: SchoolProps) {
  if (!edu) {
    return null;
  }

  return (
    <Card>
      <Card.Content>
        <Card.Header>School #{index + 1}</Card.Header>
      </Card.Content>

      <Card.Content>
        <FastField
          name={makeName(index, "school")}
          label="School name, location"
          defaultValue={edu.school}
          component={RegularField}
        />

        <FastField
          name={makeName(index, "course")}
          label="Major, minor, degree"
          defaultValue={edu.course}
          component={RegularField}
        />

        <FastField
          name={makeName(index, "fromDate")}
          label="Date from"
          defaultValue={edu.fromDate}
          component={RegularField}
        />

        <FastField
          name={makeName(index, "toDate")}
          label="Date to"
          defaultValue={edu.toDate}
          component={RegularField}
        />

        <FieldArray
          name={makeName(index, "achievements")}
          render={helper =>
            (edu.achievements || []).map((achievement, ind) => (
              <FastField
                name={`${makeName(index, "achievements")}.${ind}`}
                key={ind}
                defaultValue={achievement}
                component={RegularField}
              />
            ))
          }
        />
      </Card.Content>
    </Card>
  );
}

function makeName(index: number, key: keyof EducationInput) {
  return `education[${index}].${key}`;
}
