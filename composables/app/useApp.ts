import { useAppConfig } from "#app/config";
import {sidebarConfig} from "~/composables/app/config";

export const useApp = () => {
  const { appName, apiEndPoint } = useAppConfig();
  const token = useCookie('token');
  // const isAuth = useAuth();
  const browserTitle = ref('');

  const route = useRoute();
  const router = useRouter();

  const sidebar = sidebarConfig;

  return {
    appName,
    route,
    router,
    sidebar,
    // isAuth,
    token,
    apiEndPoint
  }
}