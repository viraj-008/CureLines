import AuthForm from "@/components/auth/AuthForm";

export const metadata = {
  title: 'Doctor Login - Cureline+',
  description: 'Healthcare provider sign in to Cureline+ platform. Manage your practice and consultations.',
};


export default function DoctorLoginPage() {
  return  <AuthForm type='login' userRole='doctor'/>
}