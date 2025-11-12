import AuthForm from "@/components/auth/AuthForm";

export const metadata = {
  title: 'Patient Login - Cureline+',
  description: 'Sign in to your Cureline+ account to access healthcare consultations.',
};

export default function PatientLoginPage() {
  return  <AuthForm type='login' userRole='patient'/>
}