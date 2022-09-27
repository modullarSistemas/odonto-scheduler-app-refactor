export enum routes {
  //AUTH
  ROOT_AUTH = '/auth',
  LOGIN_AUTH = '/auth',

  //ADM
  ROOT_ADM = '/admin',
  DASHBOARD_ADM = '/admin/dashboard',
  FINANCE_ADM = '/admin/finance',
  MANUAL_REGISTERS_ADM = '/admin/manual-registers',
  MANUAL_REGISTERS_PROCEDURES_ADM = '/admin/manual-registers/procedures',
  MANUAL_REGISTERS_PROCEDURES_NEW_PROCEDURE_ADM = '/admin/manual-registers/procedures/new-procedure',
  MANUAL_REGISTERS_PROTHESIS_ADM = '/admin/manual-registers/prothesis',
  MANUAL_REGISTERS_PROTHESIS_NEW_PROTHESIS_ADM = '/admin/manual-registers/prothesis/new-prothesis',
  MANUAL_REGISTERS_TREATMENT_PLANS_ADM = '/admin/manual-registers/treatment-plans',
  MANUAL_REGISTERS_DENTAL_APPLIANCES_ADM = '/admin/manual-registers/dental-appliances',
  DENTISTS_ADM = '/admin/dentists',
  DENTISTS_DENTIST_ADM = '/admin/dentists/:id',
  DENTISTS_NEW_DENTIST_ADM = '/admin/dentists/new-dentist',
  SECRETARIES_ADM = '/admin/secretaries',
  SECRETARIES_SECRETARY_ADM = '/admin/secretaries/:id',
  SECRETARIES_NEW_SECRETARY_ADM = '/admin/secretaries/new-secretary',

  //DENTIST
  ROOT_DENTIST = '/dentist',
  DASHBOARD_DENTIST =  '/dentist/dashboard',
  FINANCE_DENTIST = '/dentist/finance',
  SCHEDULE_DENTIST = '/dentist/schedule',
  SCHEDULE_PROCEDURES_DENTIST = '/secretary/schedule/procedures',
  SCHEDULE_EVALUATIONS_DENTIST = '/secretary/schedule/evaluations',
  SCHEDULE_HISTORY_DENTIST = '/secretary/schedule/history',
  PATIENTS_DENTIST = '/dentist/patients',
  PATIENTS_PATIENT_DENTIST = '/dentist/patients/:id',
  PATIENTS_PATIENT_NEW_EVALUATION_DENTIST = '/dentist/patients/:id/new-evaluation/:treatmentType',
  PATIENTS_PATIENT_TREATMENT_DENTIST = '/dentist/patients/treatment/:treatmentId',

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
  PATIENTS_PATIENT_SECRETARY = '/secretary/patients/:id',
  PATIENTS_NEW_PATIENT_SECRETARY = '/secretary/patients/new-patient',
  PATIENTS_TREATMENT_NEGOTIATION_SECRETARY = '/secretary/patients/treatment-negotiation/:treatmentId'


}
