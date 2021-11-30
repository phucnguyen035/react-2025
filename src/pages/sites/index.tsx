import AdminLayout from '../../layouts/admin';
import AdminHeader from '../../layouts/admin/AdminHeader';

export default function SitesPage() {
  return (
    <AdminLayout header={<AdminHeader title="Sites" type="sites" />}>
      <h1 className="text-4xl">Sites page</h1>
    </AdminLayout>
  );
}
