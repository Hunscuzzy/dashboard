export interface SignInFormData {
  email: string;
  password: string;
}

export interface AccountFormData {
  firstname: string;
  lastname: string;
}

export interface SignUpFormData extends SignInFormData, AccountFormData {}
