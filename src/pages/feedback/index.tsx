import AdminLayout from '../../layouts/admin';
import AdminHeader from '../../layouts/admin/AdminHeader';

export default function FeedbackPage() {
  return (
    <AdminLayout header={<AdminHeader title="Feedback" type="feedback" />}>
      <h1 className="text-4xl">Feedback page</h1>
    </AdminLayout>
  );
}
