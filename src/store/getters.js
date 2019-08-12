const getters = {
  // 系统全局信息 START
  language: state => state.app.language,
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  addRouters: state => state.permission.addRouters,
  website: state => state.common.website,
  isLock: state => state.user.isLock,
  lockPasswd: state => state.user.lockPasswd,
  isFullScren: state => state.common.isFullScren,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  // 系统全局信息 END
  // 用户信息 START
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  permission_routers: state => state.permission.routers,
  browserHeaderTitle: state => state.user.browserHeaderTitle,
  // 用户信息 END
}
export default getters
