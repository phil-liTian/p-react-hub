import { AdminLayout } from "@pa/materials";
import { GlobalContent } from "../modules/GlobalContent";
import { GlobalHeader } from "../modules/global-header/GlobalHeader";
import { GlobalSider } from "../modules/GlobalSider";
import { GlobalFooter } from "../modules/GlobalFooter";

const BaseLayout = () => {
  return (
    <AdminLayout
      Header={<GlobalHeader />}
      Sider={<GlobalSider />}
      Footer={<GlobalFooter />}
    >
      <GlobalContent />
    </AdminLayout>
  );
};

export default BaseLayout;
