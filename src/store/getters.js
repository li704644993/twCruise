
const getters = {
  // sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  authority: state => state.user.authority,
  setting: state => state.user.setting,
  userId: state => state.user.userId,
  menuOpts: state => state.user.menuOpts
}
export default getters
