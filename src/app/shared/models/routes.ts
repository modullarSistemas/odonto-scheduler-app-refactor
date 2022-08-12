export enum routes {
  //AUTH
  ROOT_AUTH = '/auth',
  LOGIN_AUTH = '/auth',

  //ADM
  ROOT_ADM = '/admin',
  DASHBOARD_ADM = '/admin/dashboard',
  FINANCE_ADM = '/admin/finance',

  //DENTIST
  ROOT_DENTIST = '/dentist',
  DASHBOARD_DENTIST =  '/dentist/dashboard',
  FINANCE_DENTIST = '/dentist/finance',
  SCHEDULE_DENTIST = '/dentist/schedule',
  SCHEDULE_PROCEDURES_DENTIST = '/secretary/schedule/procedures',
  SCHEDULE_EVALUATIONS_DENTIST = '/secretary/schedule/evaluations',
  SCHEDULE_HISTORY_DENTIST = '/secretary/schedule/history',
  PATIENTS_DENTIST = '/dentist/patients',

  //SECRETARY
  ROOT_SECRETARY = '/secretary',
  DASHBOARD_SECRETARY = '/secretary/dashboard',
  FINANCE_SECRETARY = '/secretary/finance',
  SCHEDULE_SECRETARY = '/secretary/schedule',
  SCHEDULE_PROCEDURES_SECRETARY = '/secretary/schedule/procedures',
  SCHEDULE_NEW_PROCEDURE_EVENT_SECRETARY = '/secretary/schedule/procedures/new-procedure-event',
  SCHEDULE_EVALUATIONS_SECRETARY = '/secretary/schedule/evaluations',
  SCHEDULE_NEW_EVALUATION_EVENT_SECRETARY = '/secretary/schedule/evaluations/new-evaluation-event',
  SCHEDULE_HISTORY_SECRETARY = '/secretary/schedule/history',
  PATIENTS_SECRETARY = '/secretary/patients',
  PATIENTS_PATIENT_SECRETARY = '/secretary/patients/',
  PATIENTS_NEW_PATIENT_SECRETARY = '/secretary/patients/new-patient'



}
