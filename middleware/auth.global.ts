export default defineNuxtRouteMiddleware(async(to, from) => {

  const token = useCookie('accessToken');

  const hasAuthRoute = new Set(
      Object.freeze([
        '/users',
        '/site',
        '/reservation',
        '/reservation-config',
        '/admin',
      ])
  )

  const changeRoute = (path: string) => {
    const [empty, firstPath] = path.split('/');
    if (firstPath === '') return '/';
    return `/${firstPath}`;
  };

  if (!token.value && hasAuthRoute.has(changeRoute(to.path))) {
    return navigateTo(`/login?redirectUrl=${to.path}`);
  }

  if (token.value && to.path === '/login') {
    const {redirectUrl} = from.query;
    if (!redirectUrl) return navigateTo('/');
    return navigateTo(String(redirectUrl));
  }

  // if (token.value && to.path === '/') {
  //   return navigateTo('/users');
  // }
});