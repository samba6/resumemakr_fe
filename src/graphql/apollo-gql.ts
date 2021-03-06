

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AktualisierenAbfrage
// ====================================================

export interface AktualisierenAbfrage_refreshUser {
  id: string;  // The ID of an object
  name: string;
  email: string;
  jwt: string;
}

export interface AktualisierenAbfrage {
  refreshUser: AktualisierenAbfrage_refreshUser | null;  // Refresh a user session
}

export interface AktualisierenAbfrageVariables {
  jwt: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AnfordernPasswortZuruckSetzen
// ====================================================

export interface AnfordernPasswortZuruckSetzen_anfordernPasswortZuruckSetzen {
  email: string;
}

export interface AnfordernPasswortZuruckSetzen {
  anfordernPasswortZuruckSetzen: AnfordernPasswortZuruckSetzen_anfordernPasswortZuruckSetzen | null;
}

export interface AnfordernPasswortZuruckSetzenVariables {
  email: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CloneResume
// ====================================================

export interface CloneResume_cloneResume_resume_additionalSkills {
  id: string;
  description: string | null;
  level: string | null;
  index: number;
  __typename: "Rated";
}

export interface CloneResume_cloneResume_resume_languages {
  id: string;
  description: string | null;
  level: string | null;
  index: number;
  __typename: "Rated";
}

export interface CloneResume_cloneResume_resume_personalInfo {
  id: string;
  address: string | null;
  dateOfBirth: string | null;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  photo: string | null;
  profession: string | null;
  __typename: "PersonalInfo";
}

export interface CloneResume_cloneResume_resume_experiences {
  id: string;
  index: number;
  achievements: (string | null)[] | null;
  companyName: string | null;
  fromDate: string | null;
  position: string | null;
  toDate: string | null;
  __typename: "Experience";
}

export interface CloneResume_cloneResume_resume_skills {
  id: string;
  index: number;
  description: string | null;
  achievements: (string | null)[] | null;
  __typename: "Skill";
}

export interface CloneResume_cloneResume_resume_education {
  id: string;
  index: number;
  course: string | null;
  fromDate: string | null;
  toDate: string | null;
  school: string | null;
  achievements: (string | null)[] | null;
  __typename: "Education";
}

export interface CloneResume_cloneResume_resume {
  id: string;  // The ID of an object
  title: string;
  description: string | null;
  hobbies: (string | null)[] | null;
  __typename: "Resume";
  additionalSkills: (CloneResume_cloneResume_resume_additionalSkills | null)[] | null;
  languages: (CloneResume_cloneResume_resume_languages | null)[] | null;
  personalInfo: CloneResume_cloneResume_resume_personalInfo | null;
  experiences: (CloneResume_cloneResume_resume_experiences | null)[] | null;
  skills: (CloneResume_cloneResume_resume_skills | null)[] | null;
  education: (CloneResume_cloneResume_resume_education | null)[] | null;
}

export interface CloneResume_cloneResume {
  resume: CloneResume_cloneResume_resume | null;
}

export interface CloneResume {
  cloneResume: CloneResume_cloneResume | null;
}

export interface CloneResumeVariables {
  input: CloneResumeInput;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateResume
// ====================================================

export interface CreateResume_createResume_resume_additionalSkills {
  id: string;
  description: string | null;
  level: string | null;
  index: number;
  __typename: "Rated";
}

export interface CreateResume_createResume_resume_languages {
  id: string;
  description: string | null;
  level: string | null;
  index: number;
  __typename: "Rated";
}

export interface CreateResume_createResume_resume_personalInfo {
  id: string;
  address: string | null;
  dateOfBirth: string | null;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  photo: string | null;
  profession: string | null;
  __typename: "PersonalInfo";
}

export interface CreateResume_createResume_resume_experiences {
  id: string;
  index: number;
  achievements: (string | null)[] | null;
  companyName: string | null;
  fromDate: string | null;
  position: string | null;
  toDate: string | null;
  __typename: "Experience";
}

export interface CreateResume_createResume_resume_skills {
  id: string;
  index: number;
  description: string | null;
  achievements: (string | null)[] | null;
  __typename: "Skill";
}

export interface CreateResume_createResume_resume_education {
  id: string;
  index: number;
  course: string | null;
  fromDate: string | null;
  toDate: string | null;
  school: string | null;
  achievements: (string | null)[] | null;
  __typename: "Education";
}

export interface CreateResume_createResume_resume {
  id: string;  // The ID of an object
  title: string;
  description: string | null;
  hobbies: (string | null)[] | null;
  __typename: "Resume";
  additionalSkills: (CreateResume_createResume_resume_additionalSkills | null)[] | null;
  languages: (CreateResume_createResume_resume_languages | null)[] | null;
  personalInfo: CreateResume_createResume_resume_personalInfo | null;
  experiences: (CreateResume_createResume_resume_experiences | null)[] | null;
  skills: (CreateResume_createResume_resume_skills | null)[] | null;
  education: (CreateResume_createResume_resume_education | null)[] | null;
}

export interface CreateResume_createResume {
  resume: CreateResume_createResume_resume | null;
}

export interface CreateResume {
  createResume: CreateResume_createResume | null;
}

export interface CreateResumeVariables {
  input: CreateResumeInput;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteResume
// ====================================================

export interface DeleteResume_deleteResume_resume {
  id: string;  // The ID of an object
  title: string;
}

export interface DeleteResume_deleteResume {
  resume: DeleteResume_deleteResume_resume | null;
}

export interface DeleteResume {
  deleteResume: DeleteResume_deleteResume | null;
}

export interface DeleteResumeVariables {
  input: DeleteResumeInput;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetResume
// ====================================================

export interface GetResume_getResume_additionalSkills {
  id: string;
  description: string | null;
  level: string | null;
  index: number;
  __typename: "Rated";
}

export interface GetResume_getResume_languages {
  id: string;
  description: string | null;
  level: string | null;
  index: number;
  __typename: "Rated";
}

export interface GetResume_getResume_personalInfo {
  id: string;
  address: string | null;
  dateOfBirth: string | null;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  photo: string | null;
  profession: string | null;
  __typename: "PersonalInfo";
}

export interface GetResume_getResume_experiences {
  id: string;
  index: number;
  achievements: (string | null)[] | null;
  companyName: string | null;
  fromDate: string | null;
  position: string | null;
  toDate: string | null;
  __typename: "Experience";
}

export interface GetResume_getResume_skills {
  id: string;
  index: number;
  description: string | null;
  achievements: (string | null)[] | null;
  __typename: "Skill";
}

export interface GetResume_getResume_education {
  id: string;
  index: number;
  course: string | null;
  fromDate: string | null;
  toDate: string | null;
  school: string | null;
  achievements: (string | null)[] | null;
  __typename: "Education";
}

export interface GetResume_getResume {
  id: string;  // The ID of an object
  title: string;
  description: string | null;
  hobbies: (string | null)[] | null;
  __typename: "Resume";
  additionalSkills: (GetResume_getResume_additionalSkills | null)[] | null;
  languages: (GetResume_getResume_languages | null)[] | null;
  personalInfo: GetResume_getResume_personalInfo | null;
  experiences: (GetResume_getResume_experiences | null)[] | null;
  skills: (GetResume_getResume_skills | null)[] | null;
  education: (GetResume_getResume_education | null)[] | null;
}

export interface GetResume {
  getResume: GetResume_getResume | null;  // Get a resume
}

export interface GetResumeVariables {
  input: GetResumeInput;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginMutation
// ====================================================

export interface LoginMutation_login_user {
  id: string;  // The ID of an object
  name: string;
  email: string;
  jwt: string;
}

export interface LoginMutation_login {
  user: LoginMutation_login_user | null;
}

export interface LoginMutation {
  login: LoginMutation_login | null;
}

export interface LoginMutationVariables {
  input: LoginInput;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: PasswortZuruckSetzenVeranderung
// ====================================================

export interface PasswortZuruckSetzenVeranderung_veranderungPasswortZuruckSetzen_user {
  id: string;  // The ID of an object
  name: string;
  email: string;
  jwt: string;
}

export interface PasswortZuruckSetzenVeranderung_veranderungPasswortZuruckSetzen {
  user: PasswortZuruckSetzenVeranderung_veranderungPasswortZuruckSetzen_user | null;
}

export interface PasswortZuruckSetzenVeranderung {
  veranderungPasswortZuruckSetzen: PasswortZuruckSetzenVeranderung_veranderungPasswortZuruckSetzen | null;
}

export interface PasswortZuruckSetzenVeranderungVariables {
  input: VeranderungPasswortZuruckSetzenInput;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PzsTokenkontrollieren
// ====================================================

export interface PzsTokenkontrollieren_pzsTokenKontrollieren {
  token: string;
}

export interface PzsTokenkontrollieren {
  pzsTokenKontrollieren: PzsTokenkontrollieren_pzsTokenKontrollieren | null;  // Kontrollieren dass Passwortzurücksetzen Token is nicht falsch
}

export interface PzsTokenkontrollierenVariables {
  token: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ResumeTitles
// ====================================================

export interface ResumeTitles_listResumes_edges_node {
  id: string;  // The ID of an object
  title: string;
  description: string | null;
  updatedAt: any;
  __typename: "Resume";
}

export interface ResumeTitles_listResumes_edges {
  node: ResumeTitles_listResumes_edges_node | null;  // The item at the end of the edge
}

export interface ResumeTitles_listResumes {
  edges: (ResumeTitles_listResumes_edges | null)[] | null;
  __typename: "ResumeConnection";
}

export interface ResumeTitles {
  listResumes: ResumeTitles_listResumes | null;  // query a resume
}

export interface ResumeTitlesVariables {
  howMany: number;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateResume
// ====================================================

export interface UpdateResume_updateResume_resume_additionalSkills {
  id: string;
  description: string | null;
  level: string | null;
  index: number;
  __typename: "Rated";
}

export interface UpdateResume_updateResume_resume_languages {
  id: string;
  description: string | null;
  level: string | null;
  index: number;
  __typename: "Rated";
}

export interface UpdateResume_updateResume_resume_personalInfo {
  id: string;
  address: string | null;
  dateOfBirth: string | null;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  photo: string | null;
  profession: string | null;
  __typename: "PersonalInfo";
}

export interface UpdateResume_updateResume_resume_experiences {
  id: string;
  index: number;
  achievements: (string | null)[] | null;
  companyName: string | null;
  fromDate: string | null;
  position: string | null;
  toDate: string | null;
  __typename: "Experience";
}

export interface UpdateResume_updateResume_resume_skills {
  id: string;
  index: number;
  description: string | null;
  achievements: (string | null)[] | null;
  __typename: "Skill";
}

export interface UpdateResume_updateResume_resume_education {
  id: string;
  index: number;
  course: string | null;
  fromDate: string | null;
  toDate: string | null;
  school: string | null;
  achievements: (string | null)[] | null;
  __typename: "Education";
}

export interface UpdateResume_updateResume_resume {
  id: string;  // The ID of an object
  title: string;
  description: string | null;
  hobbies: (string | null)[] | null;
  __typename: "Resume";
  additionalSkills: (UpdateResume_updateResume_resume_additionalSkills | null)[] | null;
  languages: (UpdateResume_updateResume_resume_languages | null)[] | null;
  personalInfo: UpdateResume_updateResume_resume_personalInfo | null;
  experiences: (UpdateResume_updateResume_resume_experiences | null)[] | null;
  skills: (UpdateResume_updateResume_resume_skills | null)[] | null;
  education: (UpdateResume_updateResume_resume_education | null)[] | null;
}

export interface UpdateResume_updateResume {
  resume: UpdateResume_updateResume_resume | null;
}

export interface UpdateResume {
  updateResume: UpdateResume_updateResume | null;
}

export interface UpdateResumeVariables {
  input: UpdateResumeInput;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UserRegMutation
// ====================================================

export interface UserRegMutation_registration_user {
  id: string;  // The ID of an object
  name: string;
  email: string;
  jwt: string;
}

export interface UserRegMutation_registration {
  user: UserRegMutation_registration_user | null;
}

export interface UserRegMutation {
  registration: UserRegMutation_registration | null;
}

export interface UserRegMutationVariables {
  input: RegistrationInput;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ResumeTitlesFrag
// ====================================================

export interface ResumeTitlesFrag_edges_node {
  id: string;  // The ID of an object
  title: string;
  description: string | null;
  updatedAt: any;
  __typename: "Resume";
}

export interface ResumeTitlesFrag_edges {
  node: ResumeTitlesFrag_edges_node | null;  // The item at the end of the edge
}

export interface ResumeTitlesFrag {
  edges: (ResumeTitlesFrag_edges | null)[] | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: RatedFrag
// ====================================================

export interface RatedFrag {
  id: string;
  description: string | null;
  level: string | null;
  index: number;
  __typename: "Rated";
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PersonalInfoFrag
// ====================================================

export interface PersonalInfoFrag {
  id: string;
  address: string | null;
  dateOfBirth: string | null;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  photo: string | null;
  profession: string | null;
  __typename: "PersonalInfo";
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ExperienceFrag
// ====================================================

export interface ExperienceFrag {
  id: string;
  index: number;
  achievements: (string | null)[] | null;
  companyName: string | null;
  fromDate: string | null;
  position: string | null;
  toDate: string | null;
  __typename: "Experience";
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: EducationFrag
// ====================================================

export interface EducationFrag {
  id: string;
  index: number;
  course: string | null;
  fromDate: string | null;
  toDate: string | null;
  school: string | null;
  achievements: (string | null)[] | null;
  __typename: "Education";
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: SkillFrag
// ====================================================

export interface SkillFrag {
  id: string;
  index: number;
  description: string | null;
  achievements: (string | null)[] | null;
  __typename: "Skill";
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ResumeMiniFrag
// ====================================================

export interface ResumeMiniFrag {
  id: string;  // The ID of an object
  title: string;
  description: string | null;
  hobbies: (string | null)[] | null;
  __typename: "Resume";
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ResumeFullFrag
// ====================================================

export interface ResumeFullFrag_additionalSkills {
  id: string;
  description: string | null;
  level: string | null;
  index: number;
  __typename: "Rated";
}

export interface ResumeFullFrag_languages {
  id: string;
  description: string | null;
  level: string | null;
  index: number;
  __typename: "Rated";
}

export interface ResumeFullFrag_personalInfo {
  id: string;
  address: string | null;
  dateOfBirth: string | null;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  photo: string | null;
  profession: string | null;
  __typename: "PersonalInfo";
}

export interface ResumeFullFrag_experiences {
  id: string;
  index: number;
  achievements: (string | null)[] | null;
  companyName: string | null;
  fromDate: string | null;
  position: string | null;
  toDate: string | null;
  __typename: "Experience";
}

export interface ResumeFullFrag_skills {
  id: string;
  index: number;
  description: string | null;
  achievements: (string | null)[] | null;
  __typename: "Skill";
}

export interface ResumeFullFrag_education {
  id: string;
  index: number;
  course: string | null;
  fromDate: string | null;
  toDate: string | null;
  school: string | null;
  achievements: (string | null)[] | null;
  __typename: "Education";
}

export interface ResumeFullFrag {
  id: string;  // The ID of an object
  title: string;
  description: string | null;
  hobbies: (string | null)[] | null;
  __typename: "Resume";
  additionalSkills: (ResumeFullFrag_additionalSkills | null)[] | null;
  languages: (ResumeFullFrag_languages | null)[] | null;
  personalInfo: ResumeFullFrag_personalInfo | null;
  experiences: (ResumeFullFrag_experiences | null)[] | null;
  skills: (ResumeFullFrag_skills | null)[] | null;
  education: (ResumeFullFrag_education | null)[] | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: UserFragment
// ====================================================

export interface UserFragment {
  id: string;  // The ID of an object
  name: string;
  email: string;
  jwt: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

// null
export interface CloneResumeInput {
  description?: string | null;
  id: string;
  title?: string | null;
}

// null
export interface CreateResumeInput {
  additionalSkills?: (RatedInput | null)[] | null;
  description?: string | null;
  education?: (EducationInput | null)[] | null;
  experiences?: (CreateExperienceInput | null)[] | null;
  hobbies?: (string | null)[] | null;
  languages?: (RatedInput | null)[] | null;
  personalInfo?: PersonalInfoInput | null;
  skills?: (CreateSkillInput | null)[] | null;
  title: string;
}

// Variables for creating an object with a rating
export interface RatedInput {
  description?: string | null;
  id?: string | null;
  index: number;
  level?: string | null;
}

// Variables for creating resume education
export interface EducationInput {
  achievements?: (string | null)[] | null;
  course?: string | null;
  fromDate?: string | null;
  id?: string | null;
  index: number;
  school?: string | null;
  toDate?: string | null;
}

// Variables for creating resume experience
export interface CreateExperienceInput {
  achievements?: (string | null)[] | null;
  companyName?: string | null;
  fromDate?: string | null;
  id?: string | null;
  index: number;
  position?: string | null;
  toDate?: string | null;
}

// Variables for creating Personal Info
export interface PersonalInfoInput {
  address?: string | null;
  dateOfBirth?: string | null;
  email?: string | null;
  firstName?: string | null;
  id?: string | null;
  lastName?: string | null;
  phone?: string | null;
  photo?: any | null;
  profession?: string | null;
}

// A resume skill
export interface CreateSkillInput {
  achievements?: (string | null)[] | null;
  description?: string | null;
  id?: string | null;
  index: number;
}

// null
export interface DeleteResumeInput {
  id: string;
}

// Variables for getting a Resume
export interface GetResumeInput {
  id?: string | null;
  title?: string | null;
}

// null
export interface LoginInput {
  email: string;
  password: string;
}

// null
export interface VeranderungPasswortZuruckSetzenInput {
  password: string;
  passwordConfirmation: string;
  token: string;
}

// null
export interface UpdateResumeInput {
  additionalSkills?: (RatedInput | null)[] | null;
  description?: string | null;
  education?: (EducationInput | null)[] | null;
  experiences?: (CreateExperienceInput | null)[] | null;
  hobbies?: (string | null)[] | null;
  id: string;
  languages?: (RatedInput | null)[] | null;
  personalInfo?: PersonalInfoInput | null;
  skills?: (CreateSkillInput | null)[] | null;
  title?: string | null;
}

// null
export interface RegistrationInput {
  email: string;
  name: string;
  password: string;
  passwordConfirmation: string;
  source: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================